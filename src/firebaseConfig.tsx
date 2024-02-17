import { initializeApp } from "firebase/app";
import { getAuth, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

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

  const addUsers = async (user) => {
   
    try {
        const docRef = await addDoc(collection(db, "users"), {
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