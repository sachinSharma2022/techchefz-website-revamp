"use client";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Icons } from "../icons";
import ChatBoxBody from "./chatBoxBody/ChatboxBody";
import styles from "./chatBoxBody/style.module.scss";
import { cn } from "@/lib/utils";

const ChatBotContainer = () => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1190px)" });
  const [hidden, sethidden] = useState(true);
  const [clearConversation, setclearConversation] = useState(true);
  return (
    <div className={cn(styles.chatBoxPage)}>
      {!hidden && (
        <>
          {clearConversation ? (
            <></>
          ) : (
            <ChatBoxBody
              sethidden={sethidden}
              hidden={hidden}
              setclearConversation={setclearConversation}
            />
          )}
        </>
      )}
      <button
        className={styles.chatOpenCont}
        onClick={() => {
          sethidden(isBigScreen ? !hidden : false);
          setclearConversation(false);
        }}
        role="button"
        title="TechChefz  Digital Assistant"
      >
        {hidden || clearConversation ? <Icons.ChatbotIcon className={styles.chatIcon} /> : <Icons.ArrowDown />}
      </button>
    </div>
  );
};

export default ChatBotContainer;
