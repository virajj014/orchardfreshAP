// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    // paste your firebase config here
    apiKey: "AIzaSyC6p5nNZRl_OTvK_1VNtn0ehFch1q4BR-M",
    authDomain: "orchardfresh-5b6f6.firebaseapp.com",
    projectId: "orchardfresh-5b6f6",
    storageBucket: "orchardfresh-5b6f6.appspot.com",
    messagingSenderId: "89522000627",
    appId: "1:89522000627:web:8276933e3422114e9b9d86"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);


export { storage, db };
