import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBrEw9XP9x3gxg-eNmDyCQR9lbs9Qi5K98",
    authDomain: "my-website-1dcdf.firebaseapp.com",
    projectId: "my-website-1dcdf",
    storageBucket: "my-website-1dcdf.appspot.com",
    messagingSenderId: "1011537595478",
    appId: "1:1011537595478:web:c401adf80a0bda19fefff7"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init firestore
const projectFirestore = firebase.firestore()
const projectStorage = firebase.storage()

export { projectFirestore, projectStorage }