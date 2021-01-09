import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

export default function FormTextarea({ name, label, error, onChange }) {
  return (
    <FormControl isInvalid={error}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <FormErrorMessage>{error}</FormErrorMessage>
      <br />
      <br />
    </FormControl>
  );
}
