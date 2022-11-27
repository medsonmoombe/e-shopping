import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDolKajBXgXwsaLainv4APlWUp_hdu8nGE",
  authDomain: "e-store-bb48c.firebaseapp.com",
  projectId: "e-store-bb48c",
  storageBucket: "e-store-bb48c.appspot.com",
  messagingSenderId: "672121749319",
  appId: "1:672121749319:web:f470dbe16ad00402ca9662"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db =getFirestore(app);
export default app;