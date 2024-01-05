import React from 'react'
import { ImageCustom } from '../imageCustom'

import styles from "./style.module.scss"

const PartnerCard = (props) => {
  return (
    <div className={styles.partnerCard}>
        <div className={styles.cardImg}>
        <ImageCustom src={props.imgSrc} width={props.imgWidth} height={props.imgHeight} alt="partner-logo" />
        </div>

        <h6 className={styles.cardTitle}>{props.cardTitle} </h6>
        <p className={styles.cardContent}> {props.cardContent} </p>
    </div>
  )
}

export default PartnerCard