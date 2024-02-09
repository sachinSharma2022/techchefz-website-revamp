"use client";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import Select from "react-select";

import dropdownStyle from "./style.module.scss";

// clearIndicator
// container
// control
// dropdownIndicator
// group
// groupHeading
// indicatorsContainer
// indicatorSeparator
// input
// loadingIndicator
// loadingMessage
// menu
// menuList
// menuPortal
// multiValue
// multiValueLabel
// multiValueRemove
// noOptionsMessage
// option
// placeholder
// singleValue
// valueContainer

const CustomDropdown = ({
  options,
  onChange,
  className,
  inputError,
  styles,
  placeholder,
}) => {
  const { theme } = useContext(MyContext);

  const controlStyle = {
    control: (styles) => ({
      ...styles,
      height: 60,
      borderRadius: 12,
      backgroundColor: theme ? "#1F1F1F" : "#F1F1F1",
      borderWidth: "0.14rem",
      borderColor: theme ? "rgba(256,256,256,0.12)" : "rgba(17, 17, 17, 0.12)",
      "&:hover": {
        borderColor: "#05bed7",
      },
      boxShadow: "none",
    }),
    singleValue: () => ({
      color: theme ? "white" : "#111",
    }),
    indicatorSeparator: () => ({ display: "none" }),
    valueContainer: () => ({ top: 12, position: "relative", left: 17 }),
    option: (styles, { isFocused }) => {
      return {
        ...styles,
        backgroundColor: isFocused ? "#0066CC" : null,
        color: isFocused ? "white" : "#111",
        fontSize: "1rem",
        borderColor: isFocused ? "#05bed7" : "#05bed7",
      };
    },
  };

  return (
    <div
      className={cn(
        className,
        dropdownStyle.wrapperStyle,
        inputError && dropdownStyle.inputErrorStyle,
        theme && dropdownStyle.darkThemeStyle,
        theme && "dark-theme-style"
      )}
    >
      <Select
        onChange={onChange}
        options={options}
        classNamePrefix="react-select"
        placeholder={"Select" || placeholder}
        styles={controlStyle || styles}
        isSearchable={false}
      />
    </div>
  );
};

export default CustomDropdown;
