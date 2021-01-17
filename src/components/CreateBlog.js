import { Box, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  getUser,
  uploadImage,
  newBlog,
  getTopics,
  getBlogById,
} from "../services";
import FormField from "./common/FormField";
import FormSelect from "./common/FormSelect";
import FormTextarea from "./common/FormTextarea";
import Loading from "./Loading";

export default function CreateBlog({ id }) {
  const [token, setToken] = useState();
  const [errors, setErrors] = useState({});
  const [blog, setBlog] = useState({});
  const [topics, setTopics] = useState();
  const [loading, setLoading] = useState(false);

  const allowedFileExtensions = [
    "image/png",
    "image/gif",
    "image/jpg",
    "image/jpeg",
  ];

  const getData = async () => {
    const { data } = await getTopics();
    let topics = [];
    data.forEach((topic) => {
      const topicObj = {
        value: topic.id,
        label: topic.name,
      };
      topics.push(topicObj);
    });
    setTopics(topics);
  };

  const getBlog = async () => {
    setLoading(true);
    const { data } = await getBlogById(id);
    console.log(data);
    const topics = [];
    data.fieldTopic.forEach((topic) => {
      const obj = {
        label: topic.name,
        value: topic.id,
      };
      topics.push(obj);
    });
    setBlog({
      title: data.title,
      body: data.body.value,
      topics: topics,
    });
    setLoading(false);
  };

  useEffect(() => {
    const token = getUser();
    getData();
    setToken(token);
    if (id) {
      getBlog();
    }
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
        console.log(data);
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

  const handleCKEDitorChange = (e) => {
    if (e.editor.getData() === "") {
      setErrors({ ...errors, body: "This input is required." });
    } else {
      let newErrors = errors;
      delete errors.body;
      setErrors(newErrors);
    }
    setBlog((blog) => ({ ...blog, body: e.editor.getData() }));
  };

  const handleSubmit = async () => {
    if (JSON.stringify(errors) === "{}") {
      let newBlogObject = { ...blog };
      await newBlog({ blog: newBlogObject, token });
    }
  };

  const handleTopicChange = (e) => {
    if (!e) return;
    e.forEach((topic) => {
      if (blog["topics"]) {
        setBlog({ ...blog, topics: [...blog["topics"], topic] });
      } else {
        setBlog({ ...blog, topics: [topic] });
      }
    });
  };

  if (loading) {
    return <Loading loading={loading} />;
  }

  return (
    <Box py={50} w="60%" m="auto">
      <Box>
        <FormField
          name="title"
          label="Blog Title"
          type="text"
          onChange={handleChange}
          error={errors.title}
          value={blog.title}
        />
        <FormField
          name="image"
          label="Blog Image"
          type="file"
          onChange={handleImageUpload}
          error={errors.image}
          value={blog.image}
        />
        <FormTextarea
          name="body"
          onChange={handleCKEDitorChange}
          label="Body"
          error={errors.body}
          content={blog.body}
        />
        <FormSelect
          onChange={handleTopicChange}
          label="Select Topic"
          items={topics}
          multiple={true}
          value={blog.topics}
        />
        <Button onClick={handleSubmit} type="submit">
          Submit
        </Button>
      </Box>
    </Box>
  );
}
