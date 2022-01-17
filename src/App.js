import "./App.css";
import initializeAuthentication from "./Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";

initializeAuthentication();
const provider = new GoogleAuthProvider();

function App() {
  const [user, setUser] = useState({});

  const handleGoogleSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="App">
      <button className="sign-in-btn" onClick={handleGoogleSignIn}>
        Google Sign-in
      </button>
      <div>{user.email}</div>
      <h1>Welcome, {user.displayName}</h1>
      <img className="user-pic" src={user.photoURL} alt={""} />
    </div>
  );
}

export default App;
