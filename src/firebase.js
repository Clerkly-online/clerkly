import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYI7_NN44SJHCFHde-Od3sFT19zk3_nek",
  authDomain: "clerkly-6873a.firebaseapp.com",
  projectId: "clerkly-6873a",
  storageBucket: "clerkly-6873a.firebasestorage.app",
  messagingSenderId: "314810124407",
  appId: "1:314810124407:web:8ce4db0b44253b2b9b9e72"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
