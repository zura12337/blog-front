import {
  Box,
  Button,
  Grid,
  GridItem,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import BlogListing from "../../components/BlogListing";
import Slider from "../../components/Slider";
import Topics from "../../components/Topics";
import Loading from "../../components/Loading";

import { getLatestBlogs, getTopics } from "../../services";

export default function HomePage() {
  const [blogs, setBlogs] = useState([]);
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(false);

  const background = useColorModeValue("solidWhite", "dark");

  const getData = async () => {
    setLoading(true);
    const [{ data: blogs }, { data: topics }] = await Promise.all([
      getLatestBlogs(4),
      getTopics(),
    ]);
    setLoading(false);
    setBlogs(blogs);
    setLatestBlogs(blogs.slice(0, 3));
    setTopics(topics);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Loading loading={loading} />
      <Slider latestBlogs={latestBlogs} />
      <Grid
        templateColumns="2fr 1fr"
        pt={50}
        background={background}
        borderTop="1px solid gray"
      >
        <GridItem>
          <BlogListing blogs={blogs} />
        </GridItem>
        <GridItem mt={"80px"}>
          <Topics topics={topics} />
        </GridItem>
      </Grid>
      <Box py={10} px={"28%"} background={background}>
        <Link _hover={{ textDecoration: "none" }} href="/blogs">
          <Button>See More</Button>
        </Link>
      </Box>
    </>
  );
}
