"use client";
import React, { useState } from "react";
import ChatboxBody from "./chatBoxBody/ChatboxBody";
import styles from "./chatBoxBody/style.module.scss";

const ChatBotContainer = () => {
  const [hidden, sethidden] = useState(true);
  const [clearConversation, setclearConversation] = useState(true);
  return (
    <section className={styles.chatboxpage}>
      {clearConversation ? (
        <></>
      ) : (
        <ChatboxBody
          sethidden={sethidden}
          hidden={hidden}
          setclearConversation={setclearConversation}
        />
      )}
      {  hidden || clearConversation?
            <div
            className={styles.chatopencont}
            onClick={() => {
              sethidden(false);
              setclearConversation(false);
            }}
          >
            chat
          </div>
          :<></>

      }
    </section>
  );
};

export default ChatBotContainer;
