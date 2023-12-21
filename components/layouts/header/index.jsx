"use client"

import { useState } from "react";
import { Switch } from "@headlessui/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ImageCustom } from "@/components/ui/imageCustom";
import styles from "./style.module.scss";

const Header = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <header className={styles.headerMain}>
      <div className={styles.logo}>
        <ImageCustom src="/images/logo.svg" width={153} height={40} alt="" />
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/">About Us</Link>
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
        <div className={styles.modeBtn}>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${enabled ? "bg-teal-900" : "bg-teal-700"}`}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={`${enabled ? "translate-x-9" : "translate-x-0"}`}
            />
          </Switch>
        </div>
        <Button variant="blueBtn" size="sm">
          Estimate Project
        </Button>
      </div>
    </header>
  );
};

export default Header;
