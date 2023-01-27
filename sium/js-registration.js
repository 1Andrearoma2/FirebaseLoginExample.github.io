const firebaseConfig = {
  apiKey: "AIzaSyBYL2IhO7yvCMsJvoSlmNa5TBauYdnn-zA",
  authDomain: "sito-b48d3.firebaseapp.com",
  databaseURL: "https://sito-b48d3-default-rtdb.firebaseio.com",
  projectId: "sito-b48d3",
  storageBucket: "sito-b48d3.appspot.com",
  messagingSenderId: "996571159670",
  appId: "1:996571159670:web:95f1ace481693a49e65357",
  measurementId: "G-M8CV3HFGVD"
  };

firebase.initializeApp(firebaseConfig);

  var registrationFormDB = firebase.database().ref("registration");

  document.getElementById('registration').addEventListener('submit', submitForm);

  function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var username = getElementVal("username");
    var emailid = getElementVal("email");
    var password = getElementVal("password");

    saveMessages(name, username, emailid, password);

    document.querySelector('.alert').style.display = 'block';

    setTimeout(() => {
      document.querySelector('.alert').style.display = 'none';
    }, 3000);

    document.getElementById('registration').reset();

  }
  const saveMessages = (name, username, emailid, password) => {
    var newRegistrationForm = registrationFormDB.push();

    newRegistrationForm.set({
      name : name,
      username : username,
      emailid : emailid,
      password : password,
    })
  }

const getElementVal = (id) => {
  return document.getElementById(id).value;
};