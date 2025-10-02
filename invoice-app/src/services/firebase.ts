
import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserSessionPersistence, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY!,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN!,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID!,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET!,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID!,
    appId: import.meta.env.VITE_FIREBASE_APP_ID!,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// runtime check (optional)
if (!firebaseConfig.apiKey) {
    console.warn("Missing Firebase config in env! Make sure .env is set.");
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const storage = getStorage(app);

// Set persistence to avoid issues
setPersistence(auth, browserSessionPersistence);

export { auth, storage, googleProvider, facebookProvider, signInWithPopup, analytics, signInWithRedirect };



