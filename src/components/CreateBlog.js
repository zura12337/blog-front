import { Box, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getUser, uploadImage, newBlog } from "../services";
import FormField from "./common/FormField";
import FormTextarea from "./common/FormTextarea";

export default function CreateBlog() {
  const [token, setToken] = useState();
  const [errors, setErrors] = useState({});
  const [blog, setBlog] = useState({});

  const allowedFileExtensions = [
    "image/png",
    "image/gif",
    "image/jpg",
    "image/jpeg",
  ];

  useEffect(() => {
    const token = getUser();
    setToken(token);
  }, []);

  const handleImageUpload = (e) => {
    const img = e.target.files[0];
    const imgName = e.target.files[0].name;
    var reader = new FileReader();
    reader.readAsArrayBuffer(img);
    let newErrors = { ...errors };
    if (allowedFileExtensions.indexOf(e.target.files[0].type) > -1) {
      reader.onload = async () => {
        const binaryStr = reader.result;
        const data = await uploadImage({
          binaryStr,
          token,
          imgName: imgName,
        });
        if (data) {
          setBlog({ ...blog, imageId: data.id });
        }
      };
      delete newErrors.image;
    } else {
      newErrors.image = "Not Allowed Type";
    }
    setErrors(newErrors);
  };
  const handleChange = (e) => {
    const name = e.target.name;
    if (e.target.value === "") {
      setErrors({ ...errors, [name]: "This input is required." });
    } else {
      let newErrors = errors;
      delete newErrors[name];
      setErrors(newErrors);
    }
    setBlog({ ...blog, [name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    if (JSON.stringify(errors) === "{}") {
      let newBlogObject = { ...blog };
      await newBlog({ blog: newBlogObject, token });
    }
  };

  return (
    <Box py={50} w="60%" m="auto">
      <Box>
        <FormField
          name="title"
          label="Blog Title"
          type="text"
          onChange={handleChange}
          error={errors.title}
        />
        <FormField
          name="image"
          label="Blog Image"
          type="file"
          onChange={handleImageUpload}
          error={errors.image}
        />
        <FormTextarea
          name="body"
          onChange={handleChange}
          label="Body"
          error={errors.body}
        />
        <Button onClick={handleSubmit} type="submit">
          Submit
        </Button>
      </Box>
    </Box>
  );
}
