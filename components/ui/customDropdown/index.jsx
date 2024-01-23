"use client";
import { cn } from "@/lib/utils";
import Select from "react-select";

const CustomDropdown = ({ title, options, onChange, className }) => {
  return (
    <div className={cn(className, "custom-dropdown-style")}>
      <Select onChange={onChange} options={options} placeholder="Select" />
      <label className="custom-label" for="floatingSelect">
        {title}
      </label>
    </div>
  );
};

export default CustomDropdown;
