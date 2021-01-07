import { Box, Flex, Image, Link, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { BsBookmarkPlus, BsBookmarkFill } from 'react-icons/bs';

export default function BlogTeaser({
  blog,
  setBookmarkedBlogs,
  bookmarkedBlogs,
}) {
  const [bookmark, setBookmark] = useState(false);

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
        if (window.location.pathname === '/bookmarks') {
          window.location.reload();
        }
        setBookmarkedBlogs(blogs => blogs.filter(b => b.id !== blog.id));
      } else {
        setBookmarkedBlogs([...bookmarkedBlogs, blog]);
      }
    }, 200);
  };

  return (
    <Box
      w={'100%'}
      h={180}
      mb={5}
      backgroundColor="gray.100"
      borderRadius={10}
      boxShadow="0 1px 5px rgba(0,0,0,.2)"
      position="relative"
    >
      <Box p={15}>
        <Flex positoin="relative">
          <Box w="60%">
            <Link href={`/blog/${blog.id}`} _hover={{ textDecoration: 'none' }}>
              <Text fontWeight="bold" fontFamily="body" fontSize={16}>
                {blog.title}
              </Text>
              <Text fontSize={12} color="gray.dark">
                {blog.body.value.length > 250
                  ? blog.body.value
                      .slice(0, 250)
                      .replace(/<\/?[^>]+(>|$)/g, '') + '...'
                  : blog.body.value.replace(/<\/?[^>]+(>|$)/g, '')}
              </Text>
            </Link>
          </Box>
          <Box mt={1}>
            <button onClick={handleBookmarkSave} style={{ outline: 'none' }}>
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
              w={'30%'}
              h={'80%'}
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
