import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import ReactLoading from "react-loading";

export default function Loading({ loading }) {
  const backgroundColor = useColorModeValue(
    "rgba(255,255,255,0.8)",
    "rgba(0,0,0,.8)"
  );
  const loadingColor = useColorModeValue("black", "white");

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
        <Box
          position="fixed"
          w="max-content"
          h="max-content"
          top="50%"
          left="50%"
          transform="translate(-50%,-50%)"
        >
          <ReactLoading type="spin" color={loadingColor} />
        </Box>
      </Box>
    )
  );
}
