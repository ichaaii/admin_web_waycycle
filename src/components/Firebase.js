import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0K33On2cFkyfijgivGcndcq-vZxhLbDE",
  authDomain: "waycycle-2107.firebaseapp.com",
  projectId: "waycycle-2107",
  storageBucket: "waycycle-2107.appspot.com",
  messagingSenderId: "29205033242",
  appId: "1:29205033242:web:61fba34af609706daa3ca3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app)

// export const db=getFirestore(app)
// export default getFirestore (app);