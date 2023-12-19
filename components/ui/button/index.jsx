import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils";

import styles from "./style.module.scss";

const buttonVariants = cva(styles.base, {
  variants: {
    variant: {
      default: styles.variant_default,
      defaultredbtn: styles.variant_defaultredbtn,
      outline: styles.variant_outline,
    },
    size: {
      default: styles.size_default,
      sm: styles.size_sm,
      md: styles.size_md,
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
