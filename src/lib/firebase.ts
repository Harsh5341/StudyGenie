
import { initializeApp, getApps, getApp, FirebaseOptions } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig: FirebaseOptions = {
  projectId: "studygenie-i0w7b",
  appId: "1:566226990012:web:80bcb3338fc162e0ee71b9",
  storageBucket: "studygenie-i0w7b.firebasestorage.app",
  apiKey: "AIzaSyABb7nFxUpqUGpArmbmWJ-ubgdOskOzgy0",
  authDomain: "studygenie-i0w7b.firebaseapp.com",
  messagingSenderId: "566226990012",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);
