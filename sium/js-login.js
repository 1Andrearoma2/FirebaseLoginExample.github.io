import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
  
  const firebaseConfig = {
    apiKey: "AIzaSyBYL2IhO7yvCMsJvoSlmNa5TBauYdnn-zA",
    authDomain: "sito-b48d3.firebaseapp.com",
    databaseURL: "https://sito-b48d3-default-rtdb.firebaseio.com",
    projectId: "sito-b48d3",
    storageBucket: "sito-b48d3.appspot.com",
    messagingSenderId: "996571159670",
    appId: "1:996571159670:web:f4e4b4fc10e1b424e65357",
    measurementId: "G-0253HBPRXW"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = getAuth()
  const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log('user', userCredential)
            history.push('/admin')
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error(errorCode, errorMessage)
        });
    }



  