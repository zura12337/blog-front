import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Link,
  List,
  ListItem,
  Text,
  Textarea,
} from '@chakra-ui/react';
import React from 'react';

export default function Footer() {
  return (
    <Box
      bg="black"
      w="100%"
      minHeight="48vh"
      h="max-content"
      pb="10px"
      mt="40vh"
    >
      <Flex justifyContent="space-between" px={110} py={10}>
        <Heading>
          <Link
            href="/"
            _hover={{
              textDecoration: 'none',
            }}
            _focus={{
              outline: 'none',
            }}
            color="white"
            fontFamily={'logo_font'}
            fontWeight={'bold'}
            textDecoration="none"
          >
            Blog
          </Link>
          <List fontSize={14} marginBlock="20px" color="white">
            <ListItem mt={2}>
              <FooterItem title="Blog Listing" href="/blogs" />
            </ListItem>
            <ListItem mt={2}>
              <FooterItem title="Bookmarks" href="/bookmarks" />
            </ListItem>
          </List>
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
              maxHeight={110}
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

const FooterItem = ({ title, href }) => {
  return (
    <Link
      href={href}
      _hover={{
        textDecoration: 'none',
        color: 'gray.300',
      }}
      fontWeight="light"
      _focus={{ outline: 'none' }}
    >
      {title}
    </Link>
  );
};
