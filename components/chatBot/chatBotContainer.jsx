"use client";
import { useState } from "react";
import { Icons } from "../icons";
import styles from "./chatBoxBody/style.module.scss";
import ChatBoxBody from "./chatBoxBody/ChatboxBody";

const ChatBotContainer = () => {
  const [hidden, sethidden] = useState(true);
  const [clearConversation, setclearConversation] = useState(true);
  return (
    <div className={styles.chatBoxPage}>
      {clearConversation ? (
        <></>
      ) : (
        <ChatBoxBody
          sethidden={sethidden}
          hidden={hidden}
          setclearConversation={setclearConversation}
        />
      )}
      <div
          className={styles.chatOpenCont}
          onClick={() => {
            sethidden(!hidden);
            setclearConversation(false);
          }}
        >
        {hidden || clearConversation ?  <Icons.Chats/> : <Icons.ArrowDown/>}
        </div>
    </div>
  );
};

export default ChatBotContainer;
