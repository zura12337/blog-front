import { Box, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getUser, uploadImage } from "../services";

export default function CreateBlog() {
  const [token, setToken] = useState();

  useEffect(() => {
    const token = getUser();
    setToken(token);
  }, []);

  const handleImageUpload = (e) => {
    const imgUrl = URL.createObjectURL(e.target.files[0]);
    const imgName = e.target.files[0].name;
    uploadImage({ imgUrl, token, imgName });
  };

  return (
    <Box py={50} w="60%" m="auto">
      <FormControl>
        <FormLabel>Blog Title</FormLabel>
        <Input type="text" />
        <br />
        <br />
        <FormLabel>Blog Image</FormLabel>
        <Input type="file" onChange={handleImageUpload} />
        <br />
        <br />
        <FormLabel>Blog Description</FormLabel>
        <Textarea></Textarea>
        <br />
        <br />
      </FormControl>
    </Box>
  );
}
