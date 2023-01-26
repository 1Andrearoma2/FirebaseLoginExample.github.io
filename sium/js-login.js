  import {signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
  
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

  var auth = firebase.auth();

// Funzione per l'autenticazione con email e password
function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(function (user) {
      // Reindirizzare alla pagina successiva dopo l'accesso
      alert("User logged in!");
    })
    .catch(function (error) {
      // Gestire gli errori
      console.log(error.message);
    });
}

// Assegnare la funzione di login all'evento onclick del bottone di login
document.getElementById("login").addEventListener("click", login);



  