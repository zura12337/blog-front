import React, { useState } from "react";
import {
  Box,
  Flex,
  Link,
  Heading,
  Text,
  useColorModeValue,
  InputGroup,
  Input,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";

import { BiSearchAlt } from "react-icons/bi";

export default function NavBar() {
  const [search, setSearch] = useState("");

  const btnBg = useColorModeValue("yellow.300", "yellow.500");
  return (
    <Flex
      w={"100%"}
      px={100}
      py={6}
      justifyContent="space-between"
      alignItems="center"
      borderBottomWidth={"2px"}
      boxShadow="sm"
    >
      <Heading>
        <Link
          href="/"
          _hover={{
            textDecoration: "none",
          }}
          _focus={{
            outline: "none",
          }}
          px={10}
          fontFamily={"logo_font"}
          fontWeight={"bold"}
          textDecoration="none"
        >
          Blog
        </Link>
      </Heading>
      <Flex>
        <Link
          href="/blogs"
          _hover={{ textDecoration: "none" }}
          _focus={{ outline: "none" }}
          px={10}
          alignSelf="center"
          fontSize={12}
          fontFamily={"heading"}
          fontWeight={600}
        >
          Blogs Listing
        </Link>
        <Box py={2} px={10} bg={btnBg} justifySelf="flex-end" borderRadius={5}>
          <Text>
            <Link
              _hover={{
                textDecoration: "none",
              }}
              _focus={{
                outline: "none",
              }}
              href="/bookmarks"
              fontFamily={"heading"}
              fontWeight="bold"
              fontSize={14}
            >
              Bookmarks
            </Link>
          </Text>
        </Box>
        <ColorModeSwitcher />
        <InputGroup>
          <Input
            type="text"
            placeholder="Search Blogs"
            color="gray"
            fontSize={14}
            onChange={(e) => setSearch(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Link href={`/blogs/?search=${search}`}>
              <Button h="1.75rem" size="sm">
                <BiSearchAlt color="gray" size={20} />
              </Button>
            </Link>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Flex>
  );
}
