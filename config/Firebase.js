import firebase from 'firebase';
import { API_KEY, AUTH_DOMAIN, DATABASE_URL, PROJECT_ID, MESSAGE_SENDER_ID, APP_ID } from 'react-native-dotenv';

var firebaseConfig = {
    apiKey: "AIzaSyD9kQ6sdn6m7f44xU0UjgiyOL_0sfQ5Txc",
    authDomain: "fir-auth-8c1d8.firebaseapp.com",
    databaseURL: "https://fir-auth-8c1d8.firebaseio.com",
    projectId: "fir-auth-8c1d8",
    storageBucket: "fir-auth-8c1d8.appspot.com",
    messagingSenderId: "448897664810",
    appId: "1:448897664810:web:11a901946769766012c053"
};

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;