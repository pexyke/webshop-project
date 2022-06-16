import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";

const Protected = ({ children }) => {
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(token)
    if (!token) {
      navigate("/admin/login");
    }
  }, [token, navigate]);

  return <React.Fragment>{children}</React.Fragment>;
};

export default Protected;
