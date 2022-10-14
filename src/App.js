import app from './firebase/firebase.init'
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import './App.css';
import { useState } from 'react';
const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({})
  const provider = new GoogleAuthProvider()
  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);

      })
      .catch(error => {
        console.log(error);
      })
  }
  return (
    <div className="App">
      <button onClick={handleClick}>add to google</button>
      <div>
        name :  {user.displayName}
        email : {user.email}
      </div>
    </div>
  );
}

export default App;
