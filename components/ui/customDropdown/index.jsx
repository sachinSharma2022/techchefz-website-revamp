"use client";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import Select from "react-select";

const CustomDropdown = ({
  title,
  options,
  onChange,
  className,
  inputError,
}) => {
  const { theme } = useContext(MyContext);

  const colourStyles = {
    option: (styles, { isFocused }) => {
      return {
        ...styles,
        backgroundColor: isFocused ? "#0066CC" : null,
        color: isFocused ? "white" : "#111",
        fontSize: "1rem",
      };
    },
  };

  return (
    <div
      className={cn(
        className,
        "custom-dropdown-style",
        theme ? "custom-dropdown-dark-style" : "",
        inputError && "input-error-style"
      )}
    >
      <Select
        onChange={onChange}
        options={options}
        placeholder="Select"
        styles={colourStyles}
      />
      <label className="custom-label" for="floatingSelect">
        {title}
      </label>
    </div>
  );
};

export default CustomDropdown;
