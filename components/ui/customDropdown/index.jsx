"use client";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import React, { useContext } from "react";
import Select, { components } from "react-select";

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
const { ValueContainer, Placeholder } = components;
const CustomValueContainer = ({ children, ...props }) => {
  return (
    <ValueContainer {...props}>
      <Placeholder {...props} isFocused={props.isFocused}>
        {props.selectProps.placeholder}
      </Placeholder>
      {React.Children.map(children, (child) =>
        child && child.type !== Placeholder ? child : null
      )}
    </ValueContainer>
  );
};

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
      top: "-5px",
    }),
    indicatorSeparator: () => ({ display: "none" }),
    valueContainer: (provided) => ({
      ...provided,
      overflow: "visible",
      top: 0,
      position: "relative",
      left: 10,
    }),
    placeholder: (provided, state) => ({
      ...provided,
      position: "absolute",
      top: state.hasValue || state.selectProps.inputValue ? 0 : "0",
      left: -2,
      transition: "top 0.1s, font-size 0.1s",
      fontSize: (state.hasValue || state.selectProps.inputValue) && 13,
    }),
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
        inputError && "custom-dropdown-style",
        theme && dropdownStyle.darkThemeStyle,
        theme && "dark-theme-style"
      )}
    >
      <Select
        onChange={onChange}
        options={options}
        classNamePrefix="react-select"
        styles={controlStyle || styles}
        isSearchable={false}
        placeholder={placeholder}
        components={{
          ValueContainer: CustomValueContainer,
        }}
      />
    </div>
  );
};

export default CustomDropdown;
