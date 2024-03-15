"use client";
import { Button } from "@/components/ui/button";
import { ImageCustom } from "@/components/ui/imageCustom";
import { cn } from "@/lib/utils";
import { Dialog } from "@headlessui/react";
import Link from "next/link";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import styles from "./style.module.scss";

const ConfirmationPopup = (props) => {
  const { theme } = useContext(MyContext);
  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <div className={styles.primaryOverlayStyle} />
      <Dialog.Panel
        className={cn(
          styles.confirmationPopup,
          props.theme ? styles.confirmationPopupDarkStyle : "",
          props.className
        )}
      >
        <div className={`${styles.thankyouCenter} ${theme ? styles.thankyouCenterDark : ""}`}>
          <ImageCustom
            src={"/images/thankyou.svg"}
            width={64}
            height={64}
            alt="thankyou-img"
          />
          <h2 className={styles.title}>Thank you!</h2>
          <p className={styles.subTitle}>
            We have received your query and will get back to you as soon as
            possible.
          </p>

          {/* <Link href="/"> */}
            <Button
              variant={theme ? "blueBtnDark" : "blueBtn"}
              className={styles.thankyouBtn}
              size="md"
              onClick={props.onClose}
            >
              Continue
            </Button>
          {/* </Link> */}
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default ConfirmationPopup;
