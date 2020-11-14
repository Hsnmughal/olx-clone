import React, { useEffect , useState } from 'react';
import './App.css';
import Header from './header1';
import PreFooter from './prefooter';
import Foooter from './footer';
import PostFooter from './postfooter';
import Header0 from './header0';
import { firebaseApp } from './firebase';
import 'firebase/database';
import firebase from 'firebase';
import AppRouter from './router';
function App() {
  const [currentUser , setCurrentUser] = useState()
  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged(function(user){
      setCurrentUser(user)
      });
    }, [])
    const objectt = {
      name : currentUser && currentUser.displayName,
      email : currentUser && currentUser.email,
      avatarSrc : currentUser && currentUser.photoURL
    }
  return (
    <div className="App">
      {currentUser ? (<Header Objj={objectt} />) : (<Header0 />)}
      {/* <Router >
        <Route exact path="/" component={ThreeComp}/>
        <Route path="/cardform" component={CardForm} />
      </Router> */}
      <AppRouter user={currentUser}/>
      <PreFooter />
      <Foooter />
      <PostFooter />
    </div>
  );
}

export default App;


// if (user) {
//    displayName : user.displayName;
//    email : user.email;
//    emailVerified : user.emailVerified;
//    photoURL : user.photoURL;
//    isAnonymous : user.isAnonymous;
//    uid : user.uid;
//    providerData : user.providerData;
//    console.log(user)
  
// } else {
//   User is signed out.
//   ...
// }
