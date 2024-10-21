import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getDatabase, ref, set } from 'firebase/database';
const firebaseConfig = {
  apiKey: "AIzaSyCb2OBf0eyaegHQqwZHDaFWB7EBtncCTIs",
  authDomain: "fooddelivery-app-fdbba.firebaseapp.com",
  projectId: "fooddelivery-app-fdbba",
  storageBucket: "fooddelivery-app-fdbba.appspot.com",
  messagingSenderId: "555263756877",
  appId: "1:555263756877:web:a48e4c0bea7dca189a2a04"
};

export const app = initializeApp(firebaseConfig);
