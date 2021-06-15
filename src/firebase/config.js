import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBF45L-ZmBaAnXEi86Qdl4yZ-IcIN3-udo",
    authDomain: "vue-firbase-m-blog.firebaseapp.com",
    projectId: "vue-firbase-m-blog",
    storageBucket: "vue-firbase-m-blog.appspot.com",
    messagingSenderId: "359555569829",
    appId: "1:359555569829:web:80f723744b928a706d154c",
    measurementId: "G-GNNQP6JFWG"
  };

// init firebase

firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export{ projectAuth, projectFirestore, timestamp }