import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export default function Loading({ loading }) {
  const backgroundColor = useColorModeValue(
    "rgba(255,255,255,0.8)",
    "rgba(0,0,0,.8)"
  );

  return (
    loading && (
      <Box
        position="fixed"
        top="0"
        left="0"
        backgroundColor={backgroundColor}
        w="100vw"
        h="100vh"
        zIndex="11"
      >
        <Text
          textAlign="center"
          position="fixed"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          fontSize={29}
        >
          Loading...
        </Text>
      </Box>
    )
  );
}
