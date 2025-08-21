import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  "projectId": "studygenie-i0w7b",
  "appId": "1:566226990012:web:80bcb3338fc162e0ee71b9",
  "storageBucket": "studygenie-i0w7b.firebasestorage.app",
  "apiKey": "AIzaSyABb7nFxUpqUGpArmbmWJ-ubgdOskOzgy0",
  "authDomain": "studygenie-i0w7b.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "566226990012"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
