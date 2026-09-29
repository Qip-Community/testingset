import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC4twvVkdbCzEPQVeL6BsmLJSES6fK79kE",
  authDomain: "vcxzvxc.firebaseapp.com",
  projectId: "vcxzvxc",
  storageBucket: "vcxzvxc.firebasestorage.app",
  messagingSenderId: "63209859230",
  appId: "1:63209859230:web:4271674d878287f360fc6f",
  measurementId: "G-8L54PCX0CS"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// 🔑 ImgBB ключ для бесплатной загрузки картинок
export const IMGBB_KEY = "bd858b15f908cc7586a02eda8080fe3f";