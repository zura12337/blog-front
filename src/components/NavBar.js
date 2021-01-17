import React, { useState } from "react";
import {
  Box,
  Flex,
  Link,
  Heading,
  useColorModeValue,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Stack,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { getUser } from "../services/index";

import { BiSearchAlt } from "react-icons/bi";

export default function NavBar() {
  const [search, setSearch] = useState("");
  const [searchWidth, setSearchWidth] = useState("30%");
  const auth = getUser();

  const changeSearchWidth = () => {
    if (searchWidth === "30%") {
      setSearchWidth("40%");
    } else {
      setSearchWidth("30%");
    }
  };

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
      <Stack spacing={5} isInline>
        <NavLink withBg={false} title="Blogs Listing" href="/blogs" />
        <NavLink title="Bookmarks" href="/bookmarks" />
        <InputGroup
          transition="ease"
          transitionDuration="200ms"
          onBlur={() => changeSearchWidth()}
          onFocus={() => changeSearchWidth()}
          w={searchWidth}
        >
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
        {auth && (
          <>
            <NavLink title="Add Content" href="/admin/add-blog" />
            <NavLink title="Logout" href="/logout" />
          </>
        )}
        <ColorModeSwitcher />
      </Stack>
    </Flex>
  );
}

const NavLink = ({ title, href, withBg = true }) => {
  const btnBg = useColorModeValue("yellow.300", "yellow.500");
  return (
    <Box
      py={"8px"}
      h="max-content"
      px={5}
      bg={withBg ? btnBg : "transparent"}
      justifySelf="flex-end"
      borderRadius={5}
      minWidth={"max-content"}
    >
      <Link
        _hover={{
          textDecoration: "none",
        }}
        _focus={{
          outline: "none",
        }}
        href={href}
        fontFamily={"heading"}
        fontWeight="bold"
        fontSize={14}
      >
        {title}
      </Link>
    </Box>
  );
};
