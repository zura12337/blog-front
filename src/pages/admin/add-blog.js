import { Box } from "@chakra-ui/react";
import React from "react";
import CreateBlog from "../../components/CreateBlog";

export default function AddBlogPage({ match }) {
  const id = match.params.id;

  return <Box>{id ? <CreateBlog id={id} /> : <CreateBlog />}</Box>;
}
