// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBYL2IhO7yvCMsJvoSlmNa5TBauYdnn-zA",
    authDomain: "sito-b48d3.firebaseapp.com",
    databaseURL: "https://sito-b48d3-default-rtdb.firebaseio.com",
    projectId: "sito-b48d3",
    storageBucket: "sito-b48d3.appspot.com",
    messagingSenderId: "996571159670",
    appId: "1:996571159670:web:f4e4b4fc10e1b424e65357",
    measurementId: "G-0253HBPRXW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //-------------------------------------------> JS <------------------------------------------------------
  
  function resetPassword() {
    var email = document.getElementById("email").value;
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(emailRegex.test(email)){
      firebase.auth().sendPasswordResetEmail(email)
        .then(function() {
          alert("Email inviata con successo!");
        }).catch(function(error) {
          // Gestione degli errori
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode == 'auth/invalid-email') {
            alert(errorMessage);
          } else if (errorCode == 'auth/user-not-found') {
            alert(errorMessage);
          }
          console.log(error);
        });
    }else{
      alert("Indirizzo email non valido, per favore inserisci un indirizzo email valido")
    }
  }
  