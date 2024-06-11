"use client";
import React, { useEffect, useRef, useState } from "react";
import { Icons } from "@/components/icons";
import "./style.css";
import axios from "axios";
import styles from "./style.module.scss"

const ChatboxBody = () => {
  const [chatbotMessages, setchatbotMessages] = useState([
    {
      username: "system",
      message: (
        <>
          <p className="welcome-message">
            Welcome to Y-axis! We&apos;re here to assist you.
          </p>
          <p>
            Could you please tell us which of our services you&apos;re
            interested in?
          </p>
          <div className={styles.choosebtns}>
            <button className="btn2">Migrate</button>
            <button className="btn2">Study</button>
          </div>
        </>
      ),
      time: new Date().toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
        timeZone: "Asia/Kolkata",
      }),
    },
  ]);
  const [showradiobtns, setshowradiobtns] = useState(false);
  const buttonRef = useRef();
  const profession11Ref = useRef();
  const profession12Ref = useRef();
  const profession2Ref = useRef();
  const profession3Ref = useRef();
  const profession4Ref = useRef();
  const selectCountry = useRef("");
  const [queryCount, setqueryCount] = useState(0);
  const userinfo = useRef("");
  const [FeatureType, setFeatureType] = useState("Y-Axis");
  const messagesEndRef = useRef();
  const [loadershow, setloadershow] = useState(false);
  const [conversation_id, setconversation_id] = useState("");
  const migrate_FAQS = [
    {
      messageType: "name",
      message:
        "Welcome to Migration services of Y-Axis. Please provide your details",
    },
    { messageType: "name", message: "Please provide your name" },
    { messageType: "countryinfo", message: "select" },
    {
      messageType: "phonenumber",
      message: "Please provide your contact number",
    },
    { messageType: "email", message: "Please provide your email address" },
    {
      messageType: "Information recieved",
      message: (
        <>
          <p>Thank you for getting in touch!</p>
        </>
      ),
    },
  ];
  const study_FAQs = [
    {
      messageType: "introduction",
      message:
        "Welcome to Study services of Y-Axis. Please provide your details",
    },
    { messageType: "professions", message: "You are a" },
    { messageType: "countryinfo", message: "select" },
    { messageType: "name", message: "Please provide your name" },
    {
      messageType: "phonenumber",
      message: "Please provide your contact number",
    },
    { messageType: "email", message: "Please provide your email address" },
    {
      messageType: "Information recieved",
      message: (
        <>
          <p>Thank you for getting in touch!</p>
        </>
      ),
    },
  ];

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [chatbotMessages]);

  const conversationId_generation = async () => {
    const data = { user_phone: "9434259663", source: FeatureType };
    await axios
      .post("http://122.176.75.250:4530/create_conversation", data)
      .then((response) => {
        console.log(response);
        setconversation_id(response.data.convo_id);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const migrateFeatureAdd = () => {
    setFeatureType("migrate");
    setchatbotMessages([
      {
        username: "system",
        message: <>{migrate_FAQS[0].message}</>,
        time: new Date().toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
          timeZone: "Asia/Kolkata",
        }),
      },
      {
        username: "system",
        message: <>{migrate_FAQS[1].message}</>,
        time: new Date().toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
          timeZone: "Asia/Kolkata",
        }),
      },
    ]);
    conversationId_generation();
    setqueryCount(2);
  };

  const studyFeatureAdd = () => {
    setFeatureType("study");
    setchatbotMessages([
      {
        username: "system",
        message: <>{study_FAQs[0].message}</>,
        time: new Date().toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
          timeZone: "Asia/Kolkata",
        }),
      },
      {
        username: "system",
        message: <>{study_FAQs[1].message}</>,
        time: new Date().toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
          timeZone: "Asia/Kolkata",
        }),
      },
    ]);
    conversationId_generation();
    setqueryCount(2);
  };

  const sendMessage = async (info) => {
    console.log(info.current.value);
    if (FeatureType === "Y-Axis") {
      const messageInfo = {
        username: "user",
        message: info.current.value,
        time: new Date().toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
          timeZone: "Asia/Kolkata",
        }),
      };
      setchatbotMessages((prevMessages) => [...prevMessages, messageInfo]);
      setTimeout(() => {
        setchatbotMessages((prevMessages) => [
          ...prevMessages,
          {
            username: "system",
            message: (
              <>
                <p>
                  Could you please tell us which of our services you&apos;re
                  interested in?
                </p>
                <div className={styles.choosebtns}>
                  <button className="btn2">Migrate</button>
                  <button onClick={studyFeatureAdd} className="btn2">
                    Study
                  </button>
                </div>
              </>
            ),
            time: new Date().toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
              timeZone: "Asia/Kolkata",
            }),
          },
        ]);
      }, 1000);
    } else {
      let messagetxt = info.current.value;
      let verifymessage = true;
      const messageInfo = {
        username: "user",
        message: <>{messagetxt}</>,
        time: new Date().toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
          timeZone: "Asia/Kolkata",
        }),
      };

      if (
        (FeatureType === "migrate" && queryCount >= migrate_FAQS.length) ||
        (FeatureType === "study" && queryCount >= study_FAQs.length)
      ) {
        const responsebody = {
          source: FeatureType,
          conversation_id: conversation_id,
          user_id: "123",
          input: info.current.value,
        };
        setchatbotMessages((prevMessages) => [...prevMessages, messageInfo]);

        if (selectCountry.current.value !== info.current.value) {
          info.current.value = "";
        }
        setloadershow(true);
        await axios
          .post("http://122.176.75.250:4530/create_message", responsebody)
          .then((response) => {
            console.log(response);
            setTimeout(() => {
              setchatbotMessages((prevMessages) => [
                ...prevMessages,
                {
                  username: "system",
                  message: <>{response.data.content}</>,
                  time: new Date().toLocaleString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                    timeZone: "Asia/Kolkata",
                  }),
                },
              ]);
              setloadershow(false);
            }, 1000);
          })
          .catch((error) => {
            console.log("ERROR: ", error);
          });
      } else {
        if (
          (queryCount >= 1 &&
            queryCount <= study_FAQs.length &&
            study_FAQs[queryCount - 1].messageType === "name" &&
            FeatureType === "study") ||
          (queryCount >= 1 &&
            queryCount <= migrate_FAQS.length &&
            migrate_FAQS[queryCount - 1].messageType === "name" &&
            FeatureType === "migrate")
        ) {
          let name_data = info.current.value;
          if (selectCountry.current.value !== info.current.value) {
            info.current.value = "";
          }
          setloadershow(true);
          await axios
            .post("http://122.176.75.250:4530/verify_details", {
              name: name_data,
            })
            .then((response) => {
              console.log(response.data);
              if (response.data.result === "Incorrect") {
                verifymessage = false;
              }
            })
            .catch((error) => {
              console.error(error);
            });
          setloadershow(false);
        }

        if (!verifymessage) {
          setTimeout(() => {
            setchatbotMessages((prevMessages) => [
              ...prevMessages,
              {
                username: "system",
                message: (
                  <>
                    The details provided are incorrect or incomplete. Please
                    provide the information again?
                  </>
                ),
                time: new Date().toLocaleString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                  timeZone: "Asia/Kolkata",
                }),
              },
            ]);
          }, 1000);
        } else {
          setTimeout(() => {
            setchatbotMessages((prevMessages) => [
              ...prevMessages,
              {
                username: "system",
                message:
                  FeatureType === "migrate"
                    ? migrate_FAQS[queryCount].message
                    : study_FAQs[queryCount].message,
                time: new Date().toLocaleString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                  timeZone: "Asia/Kolkata",
                }),
              },
            ]);
            if (
              (FeatureType === "migrate" &&
                migrate_FAQS.length === queryCount) ||
              (FeatureType === "study" && study_FAQs.length === queryCount)
            ) {
              setqueryCount(queryCount);
            } else {
              setqueryCount((prevQueryCount) => prevQueryCount + 1);
              if (
                (FeatureType === "migrate" &&
                  migrate_FAQS.length - 1 === queryCount) ||
                (FeatureType === "study" &&
                  study_FAQs.length - 1 === queryCount)
              ) {
                setTimeout(() => {
                  setchatbotMessages((prevMessages) => [
                    ...prevMessages,
                    {
                      username: "system",
                      message: (
                        <>
                          An executive from our team will be reaching out to you
                          shortly. In the meantime, if you have any questions or
                          need further assistance, please don&apos;t hesitate to
                          let us know. We&apos;re here to help!
                        </>
                      ),
                      time: new Date().toLocaleString("en-US", {
                        hour: "numeric",
                        minute: "numeric",
                        hour12: true,
                        timeZone: "Asia/Kolkata",
                      }),
                    },
                  ]);
                }, 1000);
              }
            }
          }, 1000);
        }
      }
    }

    if (selectCountry.current.value !== info.current.value) {
      info.current.value = "";
    }
  };

  return (
    <div className={styles.chatboxBody}>
      <div className={styles.chatbotHeader}>
        <p className={styles.chatbotTitle}>
        <span>Logo</span>
          Techchefz Digital Assistant
        </p>

        <div className={styles.actionButton}>
          <button>
            <Icons.RefreshIcon />
          </button>
          <button>
          <Icons.Cross />
          </button>
        </div>
      </div>

      <div className={styles.chatbotTxtbody}>
        {chatbotMessages?.map((items, index) => {
          return (
            <div className="w-[100%]" key={index}>
              {items.username === "system" ? (
                <div className={styles.systemMessage}>
                  <>
                    {(items.message === "select" &&
                      FeatureType === "migrate") ||
                    (items.message === "select" && FeatureType === "study") ? (
                      <div>
                        <p>
                          {FeatureType === "migrate" ? (
                            <>Specify the country you wish to migrate to</>
                          ) : (
                            <>Specify the country for study</>
                          )}
                        </p>
                        <select
                          className="select-country"
                          ref={selectCountry}
                          onChange={() => {
                            sendMessage(selectCountry);
                          }}
                        >
                          <option value="">Select</option>
                          <option value="UK">UK</option>
                          <option value="USA">USA</option>
                          <option value="Australia">Australia</option>
                          <option value="Singapore">Singapore</option>
                          <option value="Germany">Germany</option>
                          <option value="Canada">Canada</option>
                        </select>
                      </div>
                    ) : (
                      <>{items.message}</>
                    )}
                    {index === 1 && FeatureType === "study" ? (
                      <>
                        <div className="choosebtns2">
                          <button
                            value={"School Student"}
                            onClick={() => {
                              setshowradiobtns(!showradiobtns);
                            }}
                            className="btn2"
                          >
                            School Student
                          </button>
                          <button
                            ref={profession2Ref}
                            value={"Graduate"}
                            onClick={() => {
                              setshowradiobtns(false);
                              sendMessage(profession2Ref);
                            }}
                          >
                            Graduate
                          </button>
                        </div>

                        <div
                          className={
                            showradiobtns
                              ? "btnstudyradio btnstudyradioshow"
                              : "btnstudyradio"
                          }
                        >
                          <div>
                            <input
                              type="radio"
                              name="scores"
                              value={"School Student (9-10)"}
                              ref={profession11Ref}
                              onClick={() => {
                                setshowradiobtns(false);
                                sendMessage(profession11Ref);
                              }}
                            />{" "}
                            09 - 10
                          </div>
                          <div>
                            <input
                              type="radio"
                              name="scores"
                              value={"School Student (11-12)"}
                              ref={profession12Ref}
                              onClick={() => {
                                setshowradiobtns(false);
                                sendMessage(profession12Ref);
                              }}
                            />{" "}
                            11 - 12
                          </div>
                        </div>

                        <div className="choosebtns2">
                          <button
                            ref={profession3Ref}
                            value={"Professionals"}
                            onClick={() => {
                              sendMessage(profession3Ref);
                            }}
                            className="btn2"
                          >
                            Professionals
                          </button>
                          <button
                            ref={profession4Ref}
                            value={"Parent"}
                            onClick={() => {
                              sendMessage(profession4Ref);
                            }}
                          >
                            Parent
                          </button>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                  <p className="message-time">{items.time}</p>
                </div>
              ) : (
                <div className={styles.userbox}>
                  <div className={styles.usersMessage}>
                    <p>{items.message}</p>
                    <p className={styles.messageTime}>{items.time}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
        <div className={loadershow ? "loaderbox loadervisible" : "loaderbox"}>
          <div className="loader"></div>
        </div>
        <div ref={messagesEndRef} />
      </div>

      <div className={styles.chatbotSendtxt}>
        <input
          type="text"
          placeholder="Enter Your Massage..."
          ref={userinfo}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              buttonRef.current.click();
            }
          }}
        />
        <button
          ref={buttonRef}
          onClick={() => {
            sendMessage(userinfo);
          }}
        >
          <Icons.SendIcon />
        </button>
      </div>
    </div>
  );
};

export default ChatboxBody;
