import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "./firebases";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
const Login = () => {
  const [{}, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) =>
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
      )
      .catch((error) => alert(error.message));
  };
  return (
    <div className="Login">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="whatsApp_Logo"
        />
        <div className="login__text">
          <h1>Sign in to WhatsApp</h1>
        </div>
        <Button onClick={signIn}>Sign in With Google</Button>
      </div>
    </div>
  );
};

export default Login;
