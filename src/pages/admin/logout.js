import React, { useEffect } from "react";
import { logOut } from "../../services";

export default function LogoutPage() {
  useEffect(() => {
    logOut();
    window.location.replace("/");
  }, []);

  return <div></div>;
}
