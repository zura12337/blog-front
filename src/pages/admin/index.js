import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { getJWT } from "../../services/index";

export default function AdminPage() {
  const [authCredentials, setAuthCredentials] = useState({
    grant_type: "password",
    client_id: "",
    client_secret: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    let newAuthCredentials = authCredentials;
    newAuthCredentials[e.target.name] = e.target.value;
    setAuthCredentials(newAuthCredentials);
  };

  const handleSubmit = async () => {
    const data = await getJWT(authCredentials);
    if (data) {
      localStorage.setItem(
        "access_token",
        data.token_type + " " + data.access_token
      );
      localStorage.setItem("refresh_token", data.refresh_token);
      window.location.replace("/");
    }
  };

  return (
    <Box w={"50%"} m={"auto"} pt="100px">
      <FormControl>
        <FormLabel>Client ID</FormLabel>
        <Input type="text" name="client_id" onChange={handleChange} />
        <br />
        <br />
        <FormLabel>Cliend Secret</FormLabel>
        <Input type="password" name="client_secret" onChange={handleChange} />
        <br />
        <br />
        <FormLabel>Username</FormLabel>
        <Input type="text" name="username" onChange={handleChange} />
        <br />
        <br />
        <FormLabel>Password</FormLabel>
        <Input type="password" name="password" onChange={handleChange} />
        <Button onClick={handleSubmit} mt={4} type="submit">
          Submit
        </Button>
      </FormControl>
    </Box>
  );
}
