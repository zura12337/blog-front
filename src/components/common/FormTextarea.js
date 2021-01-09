import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/react";
import React from "react";
import CKEditor from "ckeditor4-react";

export default function FormTextarea({
  name,
  label,
  error,
  onChange,
  content,
}) {
  return (
    <FormControl isInvalid={error}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Box borderRadius={10} overflow="hidden">
        <CKEditor content={content} onChange={onChange} />
      </Box>
      <FormErrorMessage>{error}</FormErrorMessage>
      <br />
      <br />
    </FormControl>
  );
}
