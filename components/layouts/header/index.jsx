import React from 'react';
import styles from "./style.module.scss";
import Link from 'next/link';
import { Button } from 'bootstrap';

const Header = () => {
  return (
    <header className={styles.headerMain}>
      <div className={styles.logo}></div>
      <nav>
        <ul>
          <li><Link href="/">About Us</Link></li>
          <li><Link href="/">Solutions</Link></li>
          <li><Link href="/">Technology</Link></li>
          <li><Link href="/">Portfolio</Link></li>
          <li><Link href="/">More</Link></li>
        </ul>
      </nav>
      <div className={styles.headerRight}>
        <div className={styles.modeBtn}></div>
        <Button variant="blueBtn" size="md">Estimate Project</Button>
      </div>
    </header>
  )
}

export default Header