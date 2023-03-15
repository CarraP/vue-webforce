import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { ref, onUnmounted, computed } from "vue";

firebase.initializeApp({
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
});

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

const messagesColleciton = firestore.collection("messages");
const messagesQuery = messagesColleciton
  .orderBy("createdAt", "desc")
  .limit(100);

export function useChat() {
  const messages = ref([]);
  const unsubscribe = messagesQuery.onSnapshot((snapshot) => {
    messages.value = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  });

  onUnmounted(unsubscribe);
  const { user, isLogin } = useAuth();

  const sendMessage = (text) => {
    if (!isLogin.value) return;
    const { photoURL, displayName, uid } = user.value;
    messagesColleciton.add({
      text,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      photoURL,
      displayName,
      uid,
    });
  };

  return { messages, sendMessage };
}
