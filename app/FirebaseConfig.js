import Firebase from 'firebase';
let config = {
    apiKey: "AIzaSyCnmF9FHph6in4RJDGN-tcTu-y0Tn9Pks0",
    authDomain: "ebigs-tinder.firebaseapp.com",
    databaseURL: "https://ebigs-tinder.firebaseio.com",
    projectId: "ebigs-tinder",
    storageBucket: "ebigs-tinder.appspot.com",
    messagingSenderId: "15088750172",
    appId: "1:15088750172:web:a2ed0b7e6b8c844fc6e099",
    measurementId: "G-QJBDNXPC1Q"
};
let app = Firebase.initializeApp(config);
export const db = app.database();