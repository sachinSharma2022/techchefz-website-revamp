"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ImageCustom } from "@/components/ui/imageCustom";
import { Icons } from "@/components/icons";

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
            <Link href="/about" className={styles.active}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/">Solutions</Link>
          </li>
          <li className={styles.dropDown}>
            <Link href="/technology">
              Technology <div className={styles.arrow} />
            </Link>
            <ul className={styles.subMenu}>
              <li>
                <Link href="/technology/cms">CMS</Link>
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
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li className={styles.dropDown}>
            <Link href="/">
              <Icons.moredot width={4} height={14} /> More
            </Link>
            <ul className={styles.subMenu}>
              <li>
                <Link href="/technology/cms">Roadmap</Link>
              </li>
              <li>
                <Link href="/">FAQ</Link>
              </li>
              <li>
                <Link href="/">Release</Link>
              </li>
              <li>
                <Link href="/">Careers</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div className={styles.headerRight}>
        <div className={`${styles.modeBtn} modeBtn`}>
          <Button variant="default">
            <Icons.moon size={15} />
          </Button>
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
