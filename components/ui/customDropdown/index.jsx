"use client";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import Select from "react-select";

const CustomDropdown = ({ title, options, onChange, className }) => {
  const { theme } = useContext(MyContext);
  return (
    <div
      className={cn(
        className,
        "custom-dropdown-style",
        theme ? "custom-dropdown-dark-style" : ""
      )}
    >
      <Select onChange={onChange} options={options} placeholder="Select" />
      <label className="custom-label" for="floatingSelect">
        {title}
      </label>
    </div>
  );
};

export default CustomDropdown;
