import React from 'react';
// import logo from './mr-meeseeks-logo.jpg';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom'

import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd
} from "@react-firebase/auth";

import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';


import {Header} from './components'
import {TaskFeed} from './components'

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};





// TODO: initialize firebase analytics

//Login Component


//List of tasks users need help with, for admin console
// function TaskList(){}

// //Add task
// function NewTask(){}

function TopTask(props) {
  return (
    <Jumbotron className="top-task">
      <h1>{props.header}</h1>
      <p>{props.description}</p>
      <p>
        <Button variant="primary">Help this user!</Button>
      </p>
    </Jumbotron>
  );
}

function PostTask(props) {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        
        <Form.Control placeholder="What do you need help with?" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Make my post anonymous" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Post
      </Button>
    </Form>
  );
}

// class MoviesInsert extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             name: '',
//             rating: '',
//             time: '',
//         }
//     }

function UsersTask(props) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Your Last Task</Card.Title>
        <Card.Text>
          Help me play guitar.
        </Card.Text>
        <Card.Text>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

//look at unstated library

class App extends React.Component {

  render() {

    const isAuthenticated = true

    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;

    return (


      <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
        {

          <div className="App">
          {/*
            <header className="App-header">
              <FirebaseAuthConsumer>
                      {({ isSignedIn, user, providerId }) => {
                        return (                  
                          <div>
                            <div>
                              {
                                isSignedIn 
                                  ? <p>Hello, {user.displayName}</p>
                                  : <p>Please sign in.</p>
                              }
                              {
                                isSignedIn
                                  ? <Button variant="outline-light" size="lg" color="#ffffff" onClick={signOut}>Sign out</Button>
                                  : <Button variant="outline-light" size="lg" onClick={signInWithGoogle}>Sign in with Google</Button>
                              }
                            </div>
                            <Header authenticated = {isSignedIn}/>
                          </div>
                        );
                      }}
              </FirebaseAuthConsumer>
            </header> 
          */}
          <FirebaseAuthConsumer>
            {(isSignedIn) => {
              return (
                <div>
                  <Header authenticated = {isSignedIn} />
                  <Router>
                    <TaskFeed/>
                  </Router>
                </div>

              )
            }}

            
          </FirebaseAuthConsumer>

            <body className="App-body">
              <FirebaseAuthConsumer>
                      {({ isSignedIn, user, providerId }) => {
                        return (                  
                          <div className = "App-body">
                            <div className="App-body">
                              {
                                isSignedIn 
                                  ? <TopTask 
                                    header = "Help me get with this task!"
                                    description = "I'm trying to..."
                                  />
                                  : null
                              }
                            </div>
                            <div className="App-body">
                              {
                                isSignedIn
                                  ? <UsersTask/>
                                  : null
                              }
                            </div>
                            <div className="App-body">
                              {
                                isSignedIn
                                  ? <PostTask/>
                                  : null
                              }
                            </div>
                          </div>
                        );
                      }}
              </FirebaseAuthConsumer> 
            </body>
            <footer>
              <FirebaseAuthConsumer>
                      {({ isSignedIn, user, providerId }) => {
                        return (                  
                          <div>
                            <pre style={{ height: 300, overflow: "auto" }}>
                              {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
                            </pre>
                          </div>
                        );
                      }}
              </FirebaseAuthConsumer> 
            </footer>
          </div>
        }
      </FirebaseAuthProvider>
    );
  }
}


export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
