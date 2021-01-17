import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";

export default function FormField({
  name,
  label,
  type,
  onChange,
  error,
  value = "",
}) {
  return (
    <FormControl isInvalid={error}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
      />
      <FormErrorMessage>{error}</FormErrorMessage>
      <br />
      <br />
    </FormControl>
  );
}
