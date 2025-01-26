import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDPufdcCPHM2qHLCUEMzn0kE4huA7eXid0",
  authDomain: "ikeshoe-1bd8e.firebaseapp.com",
  projectId: "ikeshoe-1bd8e",
  storageBucket: "ikeshoe-1bd8e.firebasestorage.app",
  messagingSenderId: "251973671262",
  appId: "1:251973671262:web:6e08bf5716c1efa91957cf",
  measurementId: "G-LWLEM1VGPG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
