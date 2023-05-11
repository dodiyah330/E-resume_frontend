import React from "react";
import { Route, Redirect } from "react-router";


function ProtectRoutes({ component: Component, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("token");

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/Login" />
      }
    />
  );
}

export default ProtectRoutes;