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

function google() {
    var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(provider).then(function(result) {
    // The signed-in user info.
    var user = result.user;
    console.log(user);
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorCode, errorMessage);
});
}



  