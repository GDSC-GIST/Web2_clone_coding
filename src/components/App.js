import React, { useState, useEffect } from "react";
import { authService } from "/Users/ualibekova_s/Documents/nwitter/src/fbase";
import AppRouter from '/Users/ualibekova_s/Documents/nwitter/src/components/Router.js';

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? (
        <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} />
      ) : (
        "Initializing..."
      )}      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  );
}
export default App;
