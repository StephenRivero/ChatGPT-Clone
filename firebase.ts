import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBAyVUlSt8I_F2GVp-VKs4UHgQ20T3XXI",
  authDomain: "chatgpt-clone-8119b.firebaseapp.com",
  projectId: "chatgpt-clone-8119b",
  storageBucket: "chatgpt-clone-8119b.appspot.com",
  messagingSenderId: "322898632313",
  appId: "1:322898632313:web:4f3175caea502aa1f97ea8",
  measurementId: "G-6KPLL8F1YE"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };