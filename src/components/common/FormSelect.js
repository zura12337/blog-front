import { FormControl, FormLabel } from "@chakra-ui/react";
import React from "react";
import Select from "react-select";

export default function FormSelect({ label, items, multiple, onChange }) {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      {items && (
        <Select
          getStyles={{ backgroundColor: "black" }}
          options={items}
          isMulti={multiple}
          onChange={onChange}
        />
      )}
      <br />
      <br />
    </FormControl>
  );
}
