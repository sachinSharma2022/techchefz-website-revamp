import { forwardRef } from "react";

import { cn } from "~/lib/utils";

import styles from "./style.module.scss";

const FormLabel = forwardRef(({ children, className, ...props }, ref) => (
  <label ref={ref} className={cn(styles.label, className)} {...props}>
    {children}
  </label>
));

FormLabel.displayName = "FormLabel";

export { FormLabel };
