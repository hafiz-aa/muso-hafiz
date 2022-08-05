import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyD6C08Q9Vk9_RC9RZAublvMzj6E6lmLGs4",
  authDomain: "muso-hafiz.firebaseapp.com",
  projectId: "muso-hafiz",
  storageBucket: "muso-hafiz.appspot.com",
  messagingSenderId: "364413863911",
  appId: "1:364413863911:web:329c0288e0d89c8d8c9f42"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

//generate timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {
  projectFirestore,
  projectAuth,
  projectStorage,
  timestamp
}