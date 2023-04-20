//importar firebase para que se haga la conexion
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
  
//Segunda importación opcional para conectar con base de datos en un futuro
//import firestore from 'firebase/firestore'
    
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA2hZ7vc9BdVJJSEXuie5Sk1TEr1W59Z5Q",
    authDomain: "vuefirebase-3fc20.firebaseapp.com",
    projectId: "vuefirebase-3fc20",
    storageBucket: "vuefirebase-3fc20.appspot.com",
    messagingSenderId: "59356587241",
    appId: "1:59356587241:web:006713173289782883bc78"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);

const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({timestampsInSnapshots:true});

export default firebaseApp.firestore();