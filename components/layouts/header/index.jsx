
import React from 'react';
import Link from 'next/link';
import styles from "./style.module.scss";
import { Button } from '@/components/ui/button';
import { ImageCustom } from '@/components/ui/imageCustom';

const Header = () => {
  return (
    <header className={styles.headerMain}>
      <div className={styles.logo}>
        <ImageCustom src="/images/logo.svg" width={100} height={100} alt="" />
      </div>
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
        <Button variant="blueBtn" size="sm">Estimate Project</Button>
      </div>
    </header>
  )
}

export default Header