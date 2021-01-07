import { Box, Button, Flex, Image, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { BsBookmarkPlus } from 'react-icons/bs';

export default function BlogTeaser({ blog }) {
  return (
    <Box
      w={650}
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
                  ? blog.body.value.slice(0, 250) + '...'
                  : blog.body.value}
              </Text>
            </Link>
          </Box>
          <Box mt={1}>
            <button style={{ outline: 'none' }}>
              <BsBookmarkPlus size={17} />
            </button>
          </Box>
          <Box>
            <Image
              position="absolute"
              right="15px"
              w={'33%'}
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
