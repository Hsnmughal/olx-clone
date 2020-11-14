import firebase from 'firebase';
import 'firebase/database';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqg9yi3KG1VnsiL0FreNtey0voN3bpuF8",
  authDomain: "olx-clone-b52b1.firebaseapp.com",
  databaseURL: "https://olx-clone-b52b1.firebaseio.com",
  projectId: "olx-clone-b52b1",
  storageBucket: "olx-clone-b52b1.appspot.com",
  messagingSenderId: "246737237044",
  appId: "1:246737237044:web:923a333abd485b27228661",
  measurementId: "G-DT340X8VQJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth,provider, storage, db, firebaseApp}
export default firebase