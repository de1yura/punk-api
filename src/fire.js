import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBsDlfqaGMX7NBXqTGhbRCZul4i3KTVH90",
  authDomain: "punk-api-80e68.firebaseapp.com",
  projectId: "punk-api-80e68",
  storageBucket: "punk-api-80e68.appspot.com",
  messagingSenderId: "683675382968",
  appId: "1:683675382968:web:98090c5ef60d1f7511b04d"
};

const fire = firebase.initializeApp(firebaseConfig);

export default firebase;