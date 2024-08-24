import React, { useState } from "react";
import Button from "../components/Button";
import SvgComponent from "../components/SvgComponent";
import SignupForm from "../components/signup/SignUpForm";
import {PLAIN_MSG, RECIPIENT, NONCE, getCallbackUrl, generateNonce} from '../context/data';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignupFormVisible, setIsSignupFormVisible] = useState(false);

  const navigate = useNavigate();

  const handleClick = async (purpose) => {
    if (purpose === "login") {
      // navigate("/login");

      let nonce = generateNonce();

      const urlParams = new URLSearchParams({
        message: PLAIN_MSG,
        recipient: RECIPIENT,
        nonce,
        callbackUrl: getCallbackUrl(),
      });

      localStorage.setItem("nonce", nonce);

      window.location.replace(`https://auth.near.ai/?${urlParams.toString()}`);
    }
  };

  return (
    <>
      {!isSignupFormVisible ? (
        <div className="loginContainer">
          <div className="loginContainerContent">
            <SvgComponent w={50} h={50} />
            <h1>Welcome to Talkbot</h1>
            <p>Your Ultimate AI Assistant</p>
            <div className="loginButtonWrapper">
              <Button text="Log in with NEAR" handleClick={() => handleClick("login")} />
            </div>
          </div>
        </div>
      ) : (
        <SignupForm />
      )}
    </>
  );
};

export default Login;
