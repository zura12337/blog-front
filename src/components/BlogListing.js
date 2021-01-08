import { Box, Text } from "@chakra-ui/react";
import React from "react";
import BlogTeaser from "./BlogTeaser";

export default function BlogListing({ blogs }) {
  return (
    <Box w={"60%"} m={"auto"} mt={"80px"}>
      {blogs.length > 0 ? (
        blogs.map((blog) => <BlogTeaser key={blog.id} blog={blog} />)
      ) : (
        <Text textAlign="center" fontSize={28}>
          Blogs not found.
        </Text>
      )}
    </Box>
  );
}
