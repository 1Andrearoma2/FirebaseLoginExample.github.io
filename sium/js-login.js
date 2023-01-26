import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
  
  const firebaseConfig = {
    //firebase information
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



  