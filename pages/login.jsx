// firebase

import { useEffect, useState } from "react";
import { Box, Button, Container } from "@mui/material";
import Router from "next/router";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import GoogleIcon from "@mui/icons-material/Google";
import { auth } from "../services/firebase";
import style from "./../styles/Login.module.scss";
const provider = new GoogleAuthProvider();

const Login = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [errorLogin, setErrorLogin] = useState(null);
  const [logined, setLogined] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      console.log(currentUser);
      if (currentUser !== null)
        currentUser
          .getIdTokenResult()
          .then((idTokenResult) => {
            console.log(idTokenResult);
            setLogined(true);
          })
          .catch((error) => {
            console.log(error);
            setLogined(false);
          });
      else setLogined(false);
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
  const Logout = () => {
    signOut(auth)
      .then(() => {
        alert("OUT");
      })
      .catch((error) => {
        alert("EOROROrr");
      });
  };

  return (
    <Container
      sx={{ paddingTop: "65px", position: "relative" }}
      className={style.login}
    >
      {logined ? (
        <Button
          onClick={() => Logout()}
          variant="contained"
          sx={{
            backgroundColor: "danger.main",
            position: "absolute",
            top: "50%",
            right: "50%",
            transform: "translate(50%, 50%)",
          }}
        >
          Logout
        </Button>
      ) : (
        <Button
          onClick={() => Login()}
          variant="contained"
          sx={{
            backgroundColor: "danger.main",
            position: "absolute",
            top: "50%",
            right: "50%",
            transform: "translate(50%, 50%)",
          }}
        >
          <GoogleIcon sx={{ p: "2px" }} /> Đăng nhập với Google
        </Button>
      )}

      <p>{errorLogin !== null && errorLogin}</p>
      {/* {userInfo !== null && JSON.stringify(userInfo)} */}
    </Container>
  );
};

export default Login;
