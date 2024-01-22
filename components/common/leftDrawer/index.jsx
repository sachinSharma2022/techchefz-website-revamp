"use client";

import { Icons } from "@/components/icons";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { Dialog } from "@headlessui/react";
import { useContext } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import styles from "./style.module.scss";

const LeftDrawer = (props) => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <div className={styles.overlayStyle} />
      <Dialog.Panel
        className={cn(
          styles.leftDrawerModal,
          theme ? styles.darkThemeStyle : "",
          props.className
        )}
      >
        <div className={styles.modalTitle}>
          <h5 className={styles.title}>{props.title}</h5>
          <Button variant="default" onClick={props.onClose}>
            <Icons.ModalCross width={32} height={32} />
          </Button>
        </div>
        {props.children}
      </Dialog.Panel>
    </Dialog>
  );
};

export default LeftDrawer;
