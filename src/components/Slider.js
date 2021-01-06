import { Box, Flex, Image, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { Slide } from 'react-slideshow-image';

export default function Slider({ latestBlogs }) {
  return (
    <Box
      h="40vh"
      w="60vw"
      ml="20vw"
      mt="10vh"
      borderRadius="15px"
      overflow="hidden"
    >
      {latestBlogs && (
        <Slide>
          {latestBlogs.map(blog => (
            <Link
              _hover={{ textDecoration: 'none' }}
              textDecoration="none"
              href={`/blog/${blog.id}`}
            >
              <Flex
                alignItems="flex-end"
                h={'40vh'}
                backgroundImage={`linear-gradient(0deg, rgba(0,0,0,.45) 0%, rgba(255,255,255,0) 100%), url(http://localhost${blog.fieldImage.uri.url})`}
                backgroundSize="cover"
              >
                <Text
                  fontWeight="bold"
                  color="white"
                  fontSize="30px"
                  verticalAlign="bottom"
                  key={blog.id}
                  p="50px 60px"
                >
                  {blog.title}
                </Text>
              </Flex>
            </Link>
          ))}
        </Slide>
      )}
    </Box>
  );
}
