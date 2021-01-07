import { Box, Button, Flex, Image, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { BsBookmarkPlus } from 'react-icons/bs';

export default function BlogTeaser() {
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
            <Link href={'/blog/'} _hover={{ textDecoration: 'none' }}>
              <Text fontWeight="bold" fontFamily="body" fontSize={16}>
                5 Simple Things I removed from My Life to become happier
              </Text>
              <Text fontSize={12} color="gray.dark">
                Gravida sollicitudin mollis irure veritatis dictum. Sit turpis!
                Volutpat bibendum? Do, earum delectus interdum, sint
                voluptatibus adipiscing recusandae fames. Aliqua digniss
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
              src={'/assets/sample.png'}
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
