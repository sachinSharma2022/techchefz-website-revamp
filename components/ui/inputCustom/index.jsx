"use client";

import React from "react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

import styles from "./style.module.scss";

const inputVariants = cva(styles.base, {
  variants: {
    size: { default: "" },
    variant: { default: styles.variant_default },
  },
  defaultVariants: { size: "default", variant: "default" },
});

const Input = React.forwardRef(
  ({ className, variant, size, inputError, label, icon, ...props }, ref) => {
    const { theme } = useContext(MyContext);
    return (
      <div
        className={`${styles.inputContainerStyle} ${
          theme ? styles.inputContainerStyleDark : ""
        }`}
      >
        <div className={cn(styles.inputFloating, "form-floating")}>
          <input
            className={cn(
              styles.floatInput,
              inputVariants({ variant, size, className }),
              inputError && styles.inputErrorStyle,
              "form-control"
            )}
            ref={ref}
            {...props}
          />
          <label className={styles.labelCustom} for="floatingInput">
            {label}
          </label>
          {icon && <div className={styles.iconStyle}>{icon}</div>}
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

const Textarea = React.forwardRef(
  ({ className, rounded, rows = 5, label, ...props }, ref) => {
    const { theme } = useContext(MyContext);

    return (
      <div
        className={`${styles.inputContainerStyle} ${
          theme ? styles.inputContainerStyleDark : ""
        }`}
      >
        <div className={cn(styles.inputFloating, "form-floating")}>
          <textarea
            rows={rows}
            className={cn("form-control", className)}
            ref={ref}
            {...props}
          />
          <label className={styles.labelCustom} for="floatingInput">
            {label}
          </label>
        </div>
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

const Error = ({ className, children }) => (
  <p className={cn(styles.error, className)}>{children}</p>
);

export { Error, Input, Textarea };
