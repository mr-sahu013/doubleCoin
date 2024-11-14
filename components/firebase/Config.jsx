// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  // databaseUri: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URI,
  // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  // measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  apiKey: "AIzaSyDyJVItZ3pHficc6QLuJJfD-BpIbbKIU9w",
  authDomain: "doublecoin-f75ee.firebaseapp.com",
  databaseURL: "https://doublecoin-f75ee-default-rtdb.firebaseio.com",
  projectId: "doublecoin-f75ee",
  storageBucket: "doublecoin-f75ee.firebasestorage.app",
  messagingSenderId: "579203738138",
  appId: "1:579203738138:web:1c9c51be4b9b70043d3fa3",
  measurementId: "G-E5XD0Z1W7K",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const db = getDatabase(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, firestore, storage };
