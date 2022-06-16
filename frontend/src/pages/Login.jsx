import React, { useEffect } from "react";
import { Header } from "../components";
import {
  GithubLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import { useAuth } from "../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { auth, token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/admin/ecommerce");
    }
  }
  , [token]);

  return (
    <div className="flex flex-wrap flex-col content-center">
      <div className=" flex flex-wrap flex-col gap-4 m-2 md:m-10 mt-24 p-5  md:p-10 bg-white rounded-3xl max-w-md">
        <Header category="Page" title="Login" />
        <GithubLoginButton className="p-5" onClick={() => alert("Hello")} />
        <GoogleLoginButton onClick={auth} />
      </div>
    </div>
  );
};

export default Login;
