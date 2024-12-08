import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import { Audio } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex items-center">
        <h2 className="text-2xl text-green-700">Loading</h2>
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
      </div>
    );
  }

  if (!user) {
    return (
      <Navigate state={{ from: location.pathname }} to={"/LogIn"}></Navigate>
    );
  }

  return children;
};

export default PrivateRoute;
