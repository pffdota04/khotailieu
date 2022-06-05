// firebase

import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Router from "next/router";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

import { auth} from "../services/firebase";
const provider = new GoogleAuthProvider();

const Login = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [errorLogin, setErrorLogin] = useState(null);
  const [count, setCounte] = useState(0);

  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      console.log(currentUser);
      if (currentUser !== null)
        currentUser
          .getIdTokenResult()
          .then((idTokenResult) => {
            console.log(idTokenResult);
          })
          .catch((error) => {
            console.log(error);
          });
    });
  });

  const Login = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setUserInfo({ user: user, token: token });
        console.log({ user: user, token: token });
        console.log(token);
        Router.push("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorLogin(errorMessage);
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <Container sx={{ paddingTop: "65px" }}>
      <main id="main">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div onClick={() => setCounte((prv) => prv + 1)}>counter: {count}</div>
        <div>|</div>
        <div>|</div>
        <div>|</div>
        <div onClick={() => Login()}>|-LOGIN CLICK HERE-|</div>
        <p>{errorLogin !== null && errorLogin}</p>
        {userInfo !== null && JSON.stringify(userInfo)}
      </main>
    </Container>
  );
};

export default Login;
