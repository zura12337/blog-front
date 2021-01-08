import { Box, Link, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export default function Topics({ topics }) {
  const backgroundcolor = useColorModeValue("gray.100", "gray.700");
  const borderColor = useColorModeValue("black", "white");
  const topicBackground = useColorModeValue("white", "gray.800");

  return (
    <Box
      w={"70%"}
      borderRadius={10}
      px={"35px"}
      py={15}
      backgroundColor={backgroundcolor}
      minHeight={200}
      h={"max-content"}
    >
      <Text textTransform="uppercase" letterSpacing={-0.5} fontSize={14}>
        Discover More
      </Text>
      <Box>
        {topics.map((topic) => (
          <Link
            key={topic.id}
            _hover={{
              textDecoration: "none",
            }}
            href={`/topic/${topic.name}`}
            m="1.5px"
            display="inline-block"
            borderWidth="1px"
            borderRadius={2}
            backgroundColor={topicBackground}
            borderColor={borderColor}
            p={1}
            w={"max-content"}
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
