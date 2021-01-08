import {
  Box,
  Flex,
  Image,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { BsBookmarkPlus, BsBookmarkFill } from "react-icons/bs";

import { BookmarksContext } from "../context/index";

export default function BlogTeaser({ blog }) {
  const [bookmark, setBookmark] = useState(false);
  const { bookmarkedBlogs, setBookmarkedBlogs } = useContext(BookmarksContext);

  const backgroundcolor = useColorModeValue("gray.100", "gray.700");

  useEffect(() => {
    for (let bookmarkedBlog of bookmarkedBlogs) {
      if (bookmarkedBlog.id === blog.id) {
        setBookmark(true);
        break;
      }
    }
  }, []);

  const handleBookmarkSave = () => {
    setTimeout(() => {
      setBookmark(!bookmark);
      if (bookmark === true) {
        if (window.location.pathname === "/bookmarks") {
          window.location.reload();
        }
        setBookmarkedBlogs((blogs) => blogs.filter((b) => b.id !== blog.id));
      } else {
        setBookmarkedBlogs([...bookmarkedBlogs, blog]);
      }
    }, 200);
  };

  return (
    <Box
      w={"100%"}
      h={180}
      mb={5}
      backgroundColor={backgroundcolor}
      borderRadius={10}
      boxShadow="0 1px 5px rgba(0,0,0,.2)"
      position="relative"
    >
      <Box p={15}>
        <Flex positoin="relative">
          <Box w="60%">
            <Link href={`/blog/${blog.id}`} _hover={{ textDecoration: "none" }}>
              <Text fontWeight="bold" fontFamily="body" fontSize={16}>
                {blog.title}
              </Text>
              <Text fontSize={12} color="gray.dark">
                {blog.body.value.length > 250
                  ? blog.body.value
                      .slice(0, 250)
                      .replace(/<\/?[^>]+(>|$)/g, "") + "..."
                  : blog.body.value.replace(/<\/?[^>]+(>|$)/g, "")}
              </Text>
            </Link>
          </Box>
          <Box mt={1}>
            <button onClick={handleBookmarkSave} style={{ outline: "none" }}>
              {bookmark ? (
                <BsBookmarkFill size={17} />
              ) : (
                <BsBookmarkPlus size={17} />
              )}
            </button>
          </Box>
          <Box>
            <Image
              position="absolute"
              right="15px"
              w={"30%"}
              h={"80%"}
              maxWidth={"250px"}
              objectFit="fill"
              src={`http://localhost${blog.fieldImage.uri.url}`}
              borderRadius={5}
              boxShadow="0 0 5px rgba(0,0,0,.4)"
              alt="blog-teaser-img"
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
