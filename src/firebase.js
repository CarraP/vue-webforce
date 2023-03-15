import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import { ref, onUnmounted, computed } from "vue";

firebase.initializeApp({
  apiKey: "AIzaSyD13kcP3ekX9bg6f2uFHA1X4xOJoTKDsqc",
  authDomain: "webforce3-3.firebaseapp.com",
  databaseURL:
    "https://webforce3-3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "webforce3-3",
  storageBucket: "webforce3-3.appspot.com",
  messagingSenderId: "253342471147",
  appId: "1:253342471147:web:7038d20e2797392a4f7fae",
  measurementId: "G-6607L3KEJH",
});

const auth = firebase.auth();

export function useAuth() {
  const user = ref(null);
  const unsubscribe = auth.onAuthStateChanged((_user) => (user.value = _user));
  onUnmounted(unsubscribe);
  const isLogin = computed(() => user.value !== null);

  const signIn = async () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(googleProvider);
  };
  const signOut = () => auth.signOut();

  return { user, isLogin, signIn, signOut };
}

const firestore = firebase.firestore();
const messagesCollection = firestore.collection("messages");
const messagesQuery = messagesCollection
  .orderBy("createdAt", "desc")
  .limit(100);

export function useChat() {
  const messages = ref([]);
  const unsubscribe = messagesQuery.onSnapshot((snapshot) => {
    messages.value = snapshot.docs
      .map((doc) => ({ id: doc.id, ...doc.data() }))
      .reverse();
  });
  onUnmounted(unsubscribe);

  const { user, isLogin } = useAuth();
  const sendMessage = (text) => {
    if (!isLogin.value) return;
    const { photoURL, uid, displayName } = user.value;
    messagesCollection.add({
      userName: displayName,
      userId: uid,
      userPhotoURL: photoURL,
      text: text,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  return { messages, sendMessage };
}
