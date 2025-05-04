// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import getAuth
import { getFirestore } from "firebase/firestore"; // Import getFirestore

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:
    globalThis.importMeta?.env?.VITE_FIREBASE_API_KEY ||
    import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain:
    globalThis.importMeta?.env?.VITE_FIREBASE_AUTH_DOMAIN ||
    import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId:
    globalThis.importMeta?.env?.VITE_FIREBASE_PROJECT_ID ||
    import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket:
    globalThis.importMeta?.env?.VITE_FIREBASE_STORAGE_BUCKET ||
    import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:
    globalThis.importMeta?.env?.VITE_FIREBASE_MESSAGING_SENDER_ID ||
    import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId:
    globalThis.importMeta?.env?.VITE_FIREBASE_APP_ID ||
    import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId:
    globalThis.importMeta?.env?.VITE_FIREBASE_MEASUREMENT_ID ||
    import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
