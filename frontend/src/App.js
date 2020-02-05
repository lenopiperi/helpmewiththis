import React from 'react';
// import logo from './mr-meeseeks-logo.jpg';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom'

//login button imports
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

    //TODO: Use the "user" constant to set the render state for application
    //TODO: create a handleRenderState function and feed it to sub components to disable them if user isn't logged in

    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;

    console.log('app.js log',user)

    return (
            <div>
              <Header user={user} signIn={signInWithGoogle} signOut={signOut}  />
              <TaskFeed user={user}/>
            </div>
    )
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
