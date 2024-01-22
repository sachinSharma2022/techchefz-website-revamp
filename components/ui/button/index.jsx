import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils";

import styles from "./style.module.scss";

const buttonVariants = cva(styles.base, {
  variants: {
    variant: {
      default: styles.variant_default,
      blueBtn: styles.variant_blueBtn,
      lightBlueBtn: styles.variant_lightBlueBtn,
      outline: styles.variant_outline,
      lightBlueOutline: styles.variant_lightBlueOutline,
    },
    size: {
      default: styles.size_default,
      md: styles.size_md,
      lg: styles.size_lg,
      sm: styles.size_sm,
      xs: styles.size_xs,
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
