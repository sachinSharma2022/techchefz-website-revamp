"use client";
import { useState } from "react";
import { Icons } from "../icons";
import {ChatBoxBody} from "@/chatBoxBody/ChatBoxBody";
import {styles} from "@/chatBoxBody/style.module.scss";

const ChatBotContainer = () => {
  const [hidden, sethidden] = useState(true);
  const [clearConversation, setclearConversation] = useState(true);
  return (
    <section className={styles.chatBoxPage}>
      {clearConversation ? (
        <></>
      ) : (
        <ChatBoxBody
          sethidden={sethidden}
          hidden={hidden}
          setclearConversation={setclearConversation}
        />
      )}
      {hidden || clearConversation ? (
        <div
          className={styles.chatOpenCont}
          onClick={() => {
            sethidden(false);
            setclearConversation(false);
          }}
        >
         <Icons.Chats/>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
};

export default ChatBotContainer;
