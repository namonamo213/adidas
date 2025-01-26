import Button from "../Components/Button";
import React, { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import app from "../firebaseConfig";

const Signin = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [auth]);

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();

    provider.setCustomParameters({
      prompt: "select_account",
    });

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("User Signed In:", result.user);
      })

      .catch((error) => {
        console.log("Error Signing in", error);
      });
  };

  const handleSignOut = () => {
    signOut(auth);
    then(() => {
      console.log("User signed out");
      setUser(null);
    }).catch((error) => {
      console.error("Error Signing out:", error);
    });
  };

  return (
    <div className="max-container flex flex-col justify-center items-center mt-60 gap-3">
      <h3 className="text-2xl font-palanquin text-gray-300 border-b-2 mb-4 pb-2 border-gray-300">
        Sign In
      </h3>
      {user ? (
        <div className="flex flex-col items-center justify-center gap-3 font-palanquin">
          <p className="text-2xl">Welcome, {user.displayName}</p>
          <button
            onClick={handleSignOut}
            className="border cursor-pointer rounded-full px-5 py-2 font-palanquin text-lg "
          >
            SignOut
          </button>
        </div>
      ) : (
        <button
          onClick={handleGoogleSignIn}
          className="border cursor-pointer rounded-full px-5 py-2 font-palanquin"
        >
          Sign in with Google
        </button>
      )}
    </div>
  );
};

export default Signin;
