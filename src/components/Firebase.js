import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDoM_DFBrY_2Jvv59nkuyaazYk-mz-Q1CA",
  authDomain: "waycycle-35a22.firebaseapp.com",
  projectId: "waycycle-35a22",
  storageBucket: "waycycle-35a22.appspot.com",
  messagingSenderId: "183752548920",
  appId: "1:183752548920:web:0b870df5859ea660fb3ccd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
// export const db=getFirestore(app)
// export default app;