
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDucpzdP6it2rXJu4eG4KeBX5HAc_rnykg",
  authDomain: "add-college.firebaseapp.com",
  projectId: "add-college",
  storageBucket: "add-college.firebasestorage.app",
  messagingSenderId: "200138365910",
  appId: "1:200138365910:web:30602e4850db533375e277"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
