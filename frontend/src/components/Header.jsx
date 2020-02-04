import React from 'react';
import logo from './mr-meeseeks-logo.jpg';
import '../App.css';

class Header extends React.Component {

 
  setRenderCondition() {

  	if (this.props.authenticated) {
  		return true
  	}
  	else {return false}
  }

  render() {
  	const {
	    user,
	    signOut,
	    signInWithGoogle,
	  } = this.props;


    return (

    	<div className = "App-header">
    		<img src={logo} className="App-logo" alt="logo" />
				<h1>Help Me With This</h1>
    	</div>




    )
  }
}

export default Header


// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <h1>Help Me With This</h1>
//   <FirebaseAuthConsumer>
//           {({ isSignedIn, user, providerId }) => {
//             return (                  
//               <div>
//                 <div>
//                   {
//                     isSignedIn 
//                       ? <p>Hello, {user.displayName}</p>
//                       : <p>Please sign in.</p>
//                   }
//                   {
//                     isSignedIn
//                       ? <Button variant="outline-light" size="lg" color="#ffffff" onClick={signOut}>Sign out</Button>
//                       : <Button variant="outline-light" size="lg" onClick={signInWithGoogle}>Sign in with Google</Button>
//                   }
//                 </div>
//               </div>
//             );
//           }}
//   </FirebaseAuthConsumer> 
// </header>