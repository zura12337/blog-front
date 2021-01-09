/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import BlogListing from "../../components/BlogListing";
import Loading from "../../components/Loading";
import { getBlogsByTopic } from "../../services/index";

export default function BlogsByTopicPage({ match }) {
  const [blogs, setBlogs] = useState();

  const topic = match.params.topic;

  const getBlogs = async () => {
    const { data: blogs } = await getBlogsByTopic(topic);
    setBlogs(blogs);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return blogs ? (
    <Box mt={50}>
      {blogs.length > 0 && (
        <Text fontSize={24} textAlign="center">
          Showing Blogs about {topic}
        </Text>
      )}
      <BlogListing blogs={blogs} />
    </Box>
  ) : (
    <Loading loading={true} />
  );
}
