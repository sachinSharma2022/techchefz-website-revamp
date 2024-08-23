"use client";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Icons } from "../icons";
import ChatBoxBody from "./chatBoxBody/ChatboxBody";
import styles from "./chatBoxBody/style.module.scss";

const ChatBotContainer = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1190px)' })
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
            sethidden(isBigScreen ? !hidden : false);
            setclearConversation(false);
          }}
          role="button"
        >
        {hidden || clearConversation ?  <Icons.Chats/> : <Icons.ArrowDown/>}
        </div>
    </div>
  );
};

export default ChatBotContainer;
