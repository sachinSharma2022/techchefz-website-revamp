"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ImageCustom } from "@/components/ui/imageCustom";
import styles from "./style.module.scss";

const Header = () => {
  return (
    <header className={styles.headerMain}>
      <div className={styles.logo}>
        <Link href="/">
          <ImageCustom src="/images/logo.svg" width={153} height={40} alt="" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/">Solutions</Link>
          </li>
          <li>
            <Link href="/">Technology</Link>
          </li>
          <li>
            <Link href="/">Portfolio</Link>
          </li>
          <li>
            <Link href="/">More</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.headerRight}>
        <div className="modeBtn">
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
          </div>
        </div>
        <Button variant="blueBtn" size="sm">
          Estimate Project
        </Button>
      </div>
    </header>
  );
};

export default Header;
