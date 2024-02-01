import React from 'react'
import { Button } from '../button'
import { Icons } from '@/components/icons'

import styles from "./style.module.scss"

const Cookies = () => {
  return (
    <div className={styles.cookies}>
        <div className={styles.cookiesContent}>
            <Icons.Cookie size={40} />
            <p>We use cookies to enhance your experience on our website. By accepting, you agree to our use of cookies for analytics, personalized content, and ads.  By accepting, you agree to our use of cookies for analytics, personalized content, and ads. </p>
        </div>
        <div className={styles.cookiesButtons}>
        <Button
            variant="lightBlueOutline"
            className={styles.headerBtn}
            size="lg"
          >
            Decline
          </Button>
        <Button
            variant="blueBtnDark"
            className={styles.headerBtn}
            size="lg"
          >
           Accept Cookies
          </Button>
        </div>
    </div>
  )
}

export default Cookies