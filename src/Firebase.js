import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import emailjs from 'emailjs-com';

emailjs.init("_H59xsezjb2loQduM");


const firebaseConfig = {
    apiKey: "AIzaSyBLrYySw7PMApQRtk9O_EDbvgAO1hr6OBY",
    authDomain: "react-portfolio-1311.firebaseapp.com",
    projectId: "react-portfolio-1311",
    storageBucket: "react-portfolio-1311.appspot.com",
    messagingSenderId: "118606282517",
    appId: "1:118606282517:web:db7d4cd6ba5e97e770b31c",
    measurementId: "G-D1R8EVJ221"
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
    
export { firestore };

//EMailJS Necessary details
// template id : service_458fznj
// service id : service_458fznj
// API key : _H59xsezjb2loQduM