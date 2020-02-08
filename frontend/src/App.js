import React from 'react';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom'

//login button imports
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import 'bootstrap/dist/css/bootstrap.min.css';



// import {
//   FirebaseAuthProvider,
//   FirebaseAuthConsumer,
//   IfFirebaseAuthed,
//   IfFirebaseAuthedAnd
// } from "@react-firebase/auth";


import {Header} from './components'
import {TaskFeed} from './components'
import {PostTask} from './components'

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};



class App extends React.Component {

  render() {

    //TODO: Use the "user" constant to set the render state for application
    //TODO: create a handleRenderState function and feed it to sub components to disable them if user isn't logged in

    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;

    console.log('app.js log',user)

// TODO: great a function or method that forced TaskFeed to render every time a task is posted
    return (
            <div>
              <Header user={user} signIn={signInWithGoogle} signOut={signOut}  />
              <div className = "App-body">
                <TaskFeed user={user}/>
                <PostTask user={user}/>
              </div>
            </div>
    )
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
