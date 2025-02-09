// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { Auth, getAuth } from 'firebase/auth';
import { FirebaseStorage, getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8_KnGrrCEsXDYOU8jnGpytqngneVIvog",
  authDomain: "link-home-547c6.firebaseapp.com",
  projectId: "link-home-547c6",
  storageBucket: "link-home-547c6.firebasestorage.app",
  messagingSenderId: "407411122261",
  appId: "1:407411122261:web:ae5570a44f9e16b898f4dc"
};

// Initialize Firebase
const currentApps = getApps();
let auth: Auth;
let storage: FirebaseStorage

if (!currentApps.length) {
  const app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  storage = getStorage(app);
}else{
    const app = currentApps[0];
    auth = getAuth(app);
    storage = getStorage(app);
}

export {auth, storage};
