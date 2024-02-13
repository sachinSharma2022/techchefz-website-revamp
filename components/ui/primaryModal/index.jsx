"use client";

import { Icons } from "@/components/icons";
import { MyContext } from "@/context/theme";
import { Dialog } from "@headlessui/react";
import { useContext } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import styles from "./style.module.scss";

const PrimaryModal = (props) => {
  const { theme } = useContext(MyContext);
  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <div className={styles.primaryOverlayStyle} />
      <Dialog.Panel
        className={cn(
          styles.primaryModal,
          theme ? styles.primaryModalDarkStyle : "",
          props.className
        )}
      >
        <Button
          variant="default"
          onClick={props.onClose}
          className={styles.buttonStyle}
        >
          <Icons.ModalCross width={32} height={32} />
        </Button>
        {props.children}
      </Dialog.Panel>
    </Dialog>
  );
};

export default PrimaryModal;
