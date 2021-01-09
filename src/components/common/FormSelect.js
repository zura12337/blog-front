import { FormControl, FormLabel, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Select from "react-select";

export default function FormSelect({ label, items, multiple, onChange }) {
  const backgroundColor = useColorModeValue("white", "#1A202C");
  const buttonColor = useColorModeValue("gray", "#394a6b");

  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      backgroundColor,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor,
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      backgroundColor,
    }),
    multiValueLabel: (provided, state) => ({
      ...provided,
      color: !buttonColor,
    }),
    multiValue: (provided, state) => ({
      ...provided,
      backgroundColor: buttonColor,
      color: !buttonColor,
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      backgroundColor: buttonColor,
    }),
    clearIndicator: (provided, state) => ({
      ...provided,
      color: !buttonColor,
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: !buttonColor,
    }),
  };

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      {items && (
        <Select
          getStyles={{ backgroundColor: "black" }}
          options={items}
          isMulti={multiple}
          styles={customStyles}
          onChange={onChange}
        />
      )}
      <br />
      <br />
    </FormControl>
  );
}
