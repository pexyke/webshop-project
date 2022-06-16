import { React, useState, useEffect, useContext, createContext } from "react";
import http from "axios";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, [])
  

  const auth = () => {
    console.log(process.env.REACT_APP_REDIRECT_URI)

    const searchParams = new URLSearchParams();
    searchParams.append("response_type", "code");
    searchParams.append("client_id", process.env.REACT_APP_CLIENT_ID);
    searchParams.append("redirect_uri", process.env.REACT_APP_REDIRECT_URI); // /callback/${provider} later
    searchParams.append("scope", "openid");
    searchParams.append("prompt", "select_account");

    const completeUrl = `${process.env.REACT_APP_GOOGLE_BASE_URL}?${searchParams.toString()}`;
    window.open(completeUrl);
  };

  const login = async (code, provider) => {
    try {
      const response = await http.post("http://localhost:4000/api/user/login", {
        code,
        provider,
      });
      console.log("data", response.data);
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
    } catch (err) {
      console.log(err);
      setToken(null);
      localStorage.removeItem("token");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return <AuthContext.Provider value={{ token, auth, logout, login }}>{children}</AuthContext.Provider>; // provide value for my context
};

// custom hook bro
const useAuth = () => {
  const context = useContext(AuthContext); // read the context and subscribe to its changes
  if (!context) throw new Error("add AuthProvider to route"); // dev help only
  return context;
};

export { AuthProvider, useAuth };