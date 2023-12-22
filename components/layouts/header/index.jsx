"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ImageCustom } from "@/components/ui/imageCustom";
import styles from "./style.module.scss";

const Header = () => {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <header className={styles.headerMain}>
      <div className={styles.logo}>
        <Link href="/">
          <ImageCustom src="/images/logo.svg" width={153} height={40} alt="" />
        </Link>
      </div>
      <nav className={isActive ? styles.showNav : null}>
        <ul>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/">Solutions</Link>
          </li>
          <li>
            <Link href="/">
              Technology <div className={styles.arrow} />
            </Link>
            <ul className={styles.subMenu}>
              <li>
                <Link href="/">Technology 1</Link>
              </li>
              <li>
                <Link href="/">Technology 2</Link>
              </li>
              <li>
                <Link href="/">Technology 3</Link>
              </li>
              <li>
                <Link href="/">Technology 4</Link>
              </li>
            </ul>
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
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
          </div>
        </div>
        <Button variant="blueBtn" className={styles.headerBtn} size="sm">
          Estimate Project
        </Button>

        <div className={isActive ? styles.activeHumburger : null}>
          <Button
            variant="defualt"
            className={styles.navHamburger}
            onClick={toggleClass}
          >
            <span></span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
