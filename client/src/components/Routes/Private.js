// PrivateRoute.js
import React, { useEffect, useState } from "react";
import { useAuth } from "../../Context/Auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API}/api/v1/auth/user-auth`
        );
        if (res.data.ok) {
          setOk(true);
        } else {
          setOk(false);
        }
      } catch (error) {
        setOk(false);
      }
    };
    if (auth?.token) {
      authCheck();
    } else {
      setOk(false);
    }
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner path="login" />;
}
