import { initializeApp } from "firebase/app";
import { getAuth, FacebookAuthProvider } from "firebase/auth";
import { getFirestore, collection, setDoc, doc } from "firebase/firestore";
import { userType } from "./type";

const firebaseConfig = {
    apiKey: "AIzaSyABR0WdAy-j8m7KvAzPcZEX9hmMsPyi5s0",
    authDomain: "whatsappclone-adbf0.firebaseapp.com",
    projectId: "whatsappclone-adbf0",
    storageBucket: "whatsappclone-adbf0.appspot.com",
    messagingSenderId: "1035598991697",
    appId: "1:1035598991697:web:5942b760f1292294d08370",
    measurementId: "G-Z8RHQ7HFWF"
  };

  const app = initializeApp(firebaseConfig)

  const auth = getAuth(app)
  const provider = new FacebookAuthProvider()

  const db = getFirestore(app)

  const addUsers = async (user: userType) => {
   
    try {
      const docRef = doc(collection(db, "users"));

      await setDoc(docRef, {
        id: user.id,
        name: user.name,
        avatar: user.avatar
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  export {auth, provider, addUsers}