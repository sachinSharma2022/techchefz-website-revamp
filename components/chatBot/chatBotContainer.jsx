"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./chatBoxBody/style.module.scss";
import ChatBoxBody from "./chatBoxBody/ChatBoxBody";

const ChatBotContainer = () => {
  const [hidden, sethidden] = useState(true);
  const [clearConversation, setclearConversation] = useState(true);
  return (
    <section className={styles.chatboxpage}>
      {clearConversation ? (
        <></>
      ) : (
        <ChatBoxBody
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
