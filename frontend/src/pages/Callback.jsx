import { React, useEffect,  createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";

const Callback = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

 
  useEffect(() => {
    const loginWithCode = async () => {
      const params = new URLSearchParams(window.location.search);
      const code = params.get("code");
      console.log(code);
      if (code) {
        await login(code, "google");
        navigate("/ecommerce");
      }
    };
    loginWithCode();
    // eslint-disable-next-line
  }, []);

  return <div>Callback</div>;
};

export default Callback;