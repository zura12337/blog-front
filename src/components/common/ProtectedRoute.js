import React from "react";
import { Redirect, Route } from "react-router";
import { getUser } from "../../services";

export default function ProtectedRoute({
  path,
  component: Component,
  render,
  ...rest
}) {
  const user = getUser();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!user)
          return (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location },
              }}
            />
          );
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
}
