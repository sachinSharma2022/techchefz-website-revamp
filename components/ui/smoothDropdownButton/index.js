import React, { useState } from "react";
import styles from "./style.module.scss";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ImageCustom } from "../imageCustom";

const SmoothDropdown = ({ buttonLabel, options, variant, size }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };
  return (
    <div
      className={styles.dropdownDiv}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Button variant={variant} size={size}>
        {buttonLabel}{" "}
        <span className={styles.iconStyle}>
          <Icons.ArrowSubDown />
        </span>
      </Button>
      {isDropdownOpen && (
        <div className={styles.dropdownContent}>
          {options.map((option, index) => (
            <>
              <a key={index} href={option.link} target="_blank">
                <div className={styles.contentFlex}>
                  <div className={styles.innerIconFlex}>
                    <ImageCustom
                      src={option.icon}
                      alt="drop-icon"
                      width="25"
                      height="25"
                    />
                    {option.label}
                  </div>
                  <div>
                    <Icons.RedirectionIcon />
                  </div>
                </div>
              </a>
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default SmoothDropdown;
