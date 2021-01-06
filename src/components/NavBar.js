import React from 'react';
import {
  Box,
  Flex,
  Link,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

export default function NavBar() {
  const btnBg = useColorModeValue('yellow.300', 'yellow.500');
  return (
    <Flex
      w={'100%'}
      px={100}
      py={6}
      justifyContent="space-between"
      alignItems="center"
      borderBottomWidth={'2px'}
      boxShadow="sm"
    >
      <Heading>
        <Link
          href="/"
          _hover={{
            textDecoration: 'none',
          }}
          _focus={{
            outline: 'none',
          }}
          px={10}
          fontFamily={'logo_font'}
          fontWeight={'bold'}
          textDecoration="none"
        >
          Blog
        </Link>
      </Heading>
      <Flex>
        <Box py={2} px={10} bg={btnBg} justifySelf="flex-end" borderRadius={5}>
          <Text>
            <Link
              _hover={{
                textDecoration: 'none',
              }}
              _focus={{
                outline: 'none',
              }}
              href="/bookmarks"
              fontWeight="bold"
            >
              Bookmarks
            </Link>
          </Text>
        </Box>
        <ColorModeSwitcher />
      </Flex>
    </Flex>
  );
}
