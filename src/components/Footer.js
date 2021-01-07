import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Link,
  Text,
  Textarea,
} from '@chakra-ui/react';
import React from 'react';

export default function Footer() {
  return (
    <Box bg="black" w="100%" h="48vh" mt="40vh">
      <Flex justifyContent="space-between" px={100} py={10}>
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
            color="white"
            fontFamily={'logo_font'}
            fontWeight={'bold'}
            textDecoration="none"
          >
            Blog
          </Link>
        </Heading>
        <Box position="relative" mr={100} mt={10}>
          <Text
            color="white"
            fontFamily={'logo_font'}
            fontSize="28px"
            fontWeight="bold"
          >
            Contact Us
          </Text>
          <form>
            <Input
              background="white"
              placeholder="Email Address"
              fontSize="12px"
              type="mail"
            />
            <Textarea
              mt={3}
              background="white"
              fontSize="12px"
              placeholder="Message"
            ></Textarea>
            <Button position="absolute" right="0" top="100%" fontSize="14px">
              Send
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  );
}
