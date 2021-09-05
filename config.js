import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 apiKey: "AIzaSyBqAOfJObPe2gVlB4QBneUjJWaSeSi1TiE",
  authDomain: "joejoe-aaee4.firebaseapp.com",
  databaseURL: "https://joejoe-aaee4-default-rtdb.firebaseio.com",
  projectId: "joejoe-aaee4",
  storageBucket: "joejoe-aaee4.appspot.com",
  messagingSenderId: "720632035205",
  appId: "1:720632035205:web:96c288dfb0a1782b18f6ec"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()



