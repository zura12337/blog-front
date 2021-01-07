import { Box, Link, Text } from '@chakra-ui/react';
import React from 'react';

export default function Topics({ topics }) {
  return (
    <Box
      w={'70%'}
      borderRadius={10}
      px={'35px'}
      py={15}
      backgroundColor={'gray.100'}
      h={200}
    >
      <Text textTransform="uppercase" letterSpacing={-0.5} fontSize={14}>
        Discover More
      </Text>
      <Box>
        {topics.map(topic => (
          <Link
            key={topic.id}
            _hover={{
              textDecoration: 'none',
            }}
            href={`/topic/${topic.name}`}
            m="1.5px"
            display="inline-block"
            borderWidth="1px"
            borderRadius={2}
            backgroundColor="white"
            borderColor={'black'}
            p={1}
            w={'max-content'}
            h="max-content"
            verticalAlign="center"
            lineHeight="normal"
          >
            <Text fontSize={12}>{topic.name}</Text>
          </Link>
        ))}
      </Box>
    </Box>
  );
}
