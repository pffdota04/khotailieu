import MetaTags from "react-meta-tags";

// firebase
import { auth } from "../services/firebase";
import firebase from "firebase/app";
import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
const provider = new GoogleAuthProvider();
const getauth = getAuth();

const Login = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [errorLogin, setErrorLogin] = useState(null);
  const [count, setCounte] = useState(0);

  useEffect(() => {
    getauth.onAuthStateChanged((currentUser) => {
      console.log(currentUser);
      if(currentUser!==null)
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

  const Logout = () => {
    signOut(auth)
      .then(() => {
        alert("OUT")
      })
      .catch((error) => {
        alert("EOROROrr");
        // An error happened.
      });
  };
  const Login = () => {
    signInWithPopup(getauth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setUserInfo({ user: user, token: token });
        console.log({ user: user, token: token });
        console.log(token);
        localStorage;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorLogin(errorMessage);
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div>
      <MetaTags>
        <title>Đăng nhập</title>
        <meta
          name="description"
          content={
            "Đăng nhập ngay để xem thêm nhiều phim hay cập nhật liên tục tại Kphim.xyz với chất lượng cao HD, fullHD, 4K, Bluray,.. với tốc độ cực mạnh!"
          }
        />
      </MetaTags>
      <main id="main">
        <div>xcvxc</div>
        <div>xcvxc</div>
        <div>xcvxc</div>
        <div>xcvxc</div>
        <div>xcvxc</div>
        <div>xcvxc</div>
        <div>xcvxc</div>
        <div>xcvxc</div>
        <div onClick={() => setCounte((prv) => prv + 1)}>{count}</div>
        <div onClick={() => Login()}>LOGIN</div>
        <div>xcvxc</div>
        <div>xcvxc</div>
        <div onClick={() => Logout()}>LOGOUT</div>
        <p>{errorLogin !== null && errorLogin}</p>
        {userInfo !== null && JSON.stringify(userInfo)}
      </main>
    </div>
  );
};

export default Login;
