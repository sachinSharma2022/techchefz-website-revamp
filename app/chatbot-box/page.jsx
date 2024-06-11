import React from "react";
import ChatboxBody from "@/components/Chatboxbody/ChatboxBody";
import styles from "./style.module.scss"
const page = () => {
  return (
    <section className={styles.chatboxpage}>
      <ChatboxBody />
    </section>
  );
};

export default page;
