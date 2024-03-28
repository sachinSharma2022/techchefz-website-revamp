"use client";
import { cva } from "class-variance-authority";
import gsap from "gsap";
import * as React from "react";
import { useEffect, useRef } from "react";
import { cn } from "../../../lib/utils";

import CircleLoader from "../circleLoader";
import styles from "./style.module.scss";

const buttonVariants = cva(styles.base, {
  variants: {
    variant: {
      default: styles.variant_default,
      blueBtn: styles.variant_blueBtn,
      lightBlueBtn: styles.variant_lightBlueBtn,
      outline: styles.variant_outline,
      circle: styles.variant_circle,
      blueBtnDark: styles.variant_blueBtnDark,
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
  (
    {
      className,
      children,
      variant,
      size,
      asChild = false,
      disabled,
      loader,
      repeatCount,
      dur,
      ariaLabel,
      buttonTitle,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const circle = useRef(null);
    let timeline = useRef(null);
    let timeoutId = null;
    useEffect(() => {
      timeline.current = gsap.timeline({ paused: true });
      timeline.current
        .to(
          circle.current,
          { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
          "enter"
        )
        .to(
          circle.current,
          { top: "-150%", width: "125%", duration: 0.25 },
          "exit"
        );
    }, []);

    const manageMouseEnter = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeline.current.tweenFromTo("enter", "exit");
    };

    const manageMouseLeave = () => {
      timeoutId = setTimeout(() => {
        timeline.current.play();
      }, 300);
    };
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        onMouseEnter={() => {
          manageMouseEnter();
        }}
        onMouseLeave={() => {
          manageMouseLeave();
        }}
        ref={ref}
        {...props}
        disabled={disabled}
        aria-label={ariaLabel}
        title={buttonTitle}
      >
        <div className={cn(styles.btnText, props.pStyle)}>
          {children}
          {loader && <CircleLoader repeatCount={repeatCount} dur={dur} />}
        </div>
        <div ref={circle} className={styles.circle}></div>
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
