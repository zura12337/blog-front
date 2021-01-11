import { Box, Link, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export default function Topics({ topics, ...rest }) {
  const borderColor = useColorModeValue("black", "white");
  const topicBackground = useColorModeValue("white", "gray.800");

  return (
    <Box {...rest}>
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
          maxWidth="260px"
        >
          <Text fontSize={12}>{topic.name}</Text>
        </Link>
      ))}
    </Box>
  );
}
