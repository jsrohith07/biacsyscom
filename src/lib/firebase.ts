import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdSpQxEyAlPGKwta4Gms1U0awaHdgqULo",
  authDomain: "biacsys-4c41e.firebaseapp.com",
  projectId: "biacsys-4c41e",
  storageBucket: "biacsys-4c41e.firebasestorage.app",
  messagingSenderId: "269344886601",
  appId: "1:269344886601:web:be16481dfb3f6311a9d498"
};

// Initialize Firebase ONLY if it hasn't been initialized yet
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);