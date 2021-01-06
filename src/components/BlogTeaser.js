import { Box, Flex, Image, Link, Text } from '@chakra-ui/react';
import React from 'react';

export default function BlogTeaser() {
  return (
    <Box
      w={650}
      h={180}
      mb={5}
      backgroundColor="gray.200"
      borderRadius={10}
      boxShadow="0 1px 5px rgba(0,0,0,.2)"
      position="relative"
    >
      <Link href={'/blog/'} _hover={{ textDecoration: 'none' }}>
        <Box p={15}>
          <Flex>
            <Box w="60%">
              <Text fontWeight="bold" fontFamily="body" fontSize={16}>
                5 Simple Things I removed from My Life to become happier
              </Text>
              <Text fontSize={12} color="gray.dark">
                Gravida sollicitudin mollis irure veritatis dictum. Sit turpis!
                Volutpat bibendum? Do, earum delectus interdum, sint
                voluptatibus adipiscing recusandae fames. Aliqua digniss
              </Text>
            </Box>
            <Box>
              <Image
                position="absolute"
                right="20px"
                w={'35%'}
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
      </Link>
    </Box>
  );
}
