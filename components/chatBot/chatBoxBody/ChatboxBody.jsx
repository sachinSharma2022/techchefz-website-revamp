"use client";
import React, { useEffect, useRef, useState } from "react";
import { Icons } from "@/components/icons";
import styles from "./style.module.scss";
import axios from "axios";

const ChatboxBody = ({ sethidden, hidden, setclearConversation }) => {
  const buttonRef = useRef();
  const userinfo = useRef("");
  const messagesEndRef = useRef();
  const [userEmail, setuserEmail] = useState("");
  const [userName, setuserName] = useState("");
  const [loadershow, setloadershow] = useState(false);
  const [conversationID, setconversationID] = useState("");
  const [textvalue, settextValue] = useState("");
  const chatbody = useRef("");
  const chatfooter = useRef("");
  const [department, setdepartment] = useState("");
  const [service, setservice] = useState("");
  const [serviceActionCount, setserviceActionCount] = useState(0);
  // const [uploadResumeAction, setuploadResumeAction] = useState(false);
  const [phoneNumber, setphoneNumber] = useState('');
  const resumeRef = useRef();

  const [chatbotMessages, setchatbotMessages] = useState([
    {
      username: "system",
      messageType: "Department",
      message: (
        <>
          <p>
          Hello! Welcome to Techchefz. How can we assist you today? Please choose one of the following options:
          </p>
          <div className={styles.choosebtns}>
            <button
              className="btn2"
              onClick={() => {
                departmentSelection("Hiring");
              }}
            >
              Resource Hiring/Job Application
            </button>
            <button
              className="btn2"
              onClick={() => {
                departmentSelection("Partner Collaboration");
              }}
            >
              Partner Collaboration
            </button>
            <button
              className="btn2"
              onClick={() => {
                departmentSelection("Services");
              }}
            >
              Services
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

  const serviceSelection = async (serviceName, departmentName,servicemessage) => {
    setservice(serviceName);
    sendMessage({
      current: {
        value: servicemessage,
        service: serviceName,
        department: departmentName,
      },
    });
  };

  const departmentSelection = async (departmentName) => {
    try {
      setdepartment((prev) => departmentName);
      if (departmentName === "Hiring") {
        setchatbotMessages([
          {
            username: "system",
            messageType: "service",
            message: (
              <div>
                <p>
                Welcome to the Techchefz HR department. How can we assist you today?
                </p>
                <div className={styles.choosebtns}>
                  <button
                    className="btn2"
                    onClick={() => {
                      serviceSelection("hiring1", departmentName,"I am interested in applying for a job at Techchefz.");
                    }}
                  >
                    Apply for a Job
                  </button>
                  <button
                    className="btn2"
                    onClick={() => {
                      serviceSelection("hiring2", departmentName,"I am interested in applying for a job at Techchefz.");
                    }}
                  >
                     Hire a Resource
                  </button>
                </div>
              </div>
            ),
            time: new Date().toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
              timeZone: "Asia/Kolkata",
            }),
          },
        ]);
      } else if (departmentName === "Partner Collaboration") {
        setchatbotMessages([
          {
            username: "system",
            messageType: "service",
            message: (
              <div>
                <p>
                Hello! Welcome to Techchefz. Are you looking to collaborate with us? Please choose from the following options:
                </p>
                <div className={styles.choosebtns}>
                  <button
                    className="btn2"
                    onClick={() => {
                      serviceSelection("Technology Partnership", departmentName,"I am interested in collaborating as a Technology Partner with Techchefz.");
                    }}
                  >
                    Technology Partnership
                  </button>
                  <button
                    className="btn2"
                    onClick={() => {
                      serviceSelection("Marketing Partnership", departmentName,"I am interested in collaborating as a Marketing Partner with Techchefz.");
                    }}
                  >
                    Marketing Partnership
                  </button>
                  <button
                    className="btn2"
                    onClick={() => {
                      serviceSelection("Other Collaborations", departmentName,"I am interested in collaborating as a Other Collaborations with Techchefz.");
                    }}
                  >
                    Other Collaborations
                  </button>
                </div>
              </div>
            ),
            time: new Date().toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
              timeZone: "Asia/Kolkata",
            }),
          },
        ]);
      } else if (departmentName === "Services") {
        setchatbotMessages([
          {
            username: "system",
            messageType: "service",
            message: (
              <div>
                <p>
                We offer a wide range of services to meet your needs. Please choose from the following:
                </p>
                <div className={styles.choosebtns}>
                  <button
                    className="btn2"
                    onClick={() => {
                      serviceSelection("Website Development", departmentName,"Excellent choice! Please share your details with us to schedule a free consultation.");
                    }}
                  >
                     Website Development
                  </button>
                  <button
                    className="btn2"
                    onClick={() => {
                      serviceSelection("Digital Transformation", departmentName,"Excellent choice! Please share your details with us to schedule a free consultation.");
                    }}
                  >
                    Digital Transformation
                  </button>
                  <button
                    className="btn2"
                    onClick={() => {
                      serviceSelection("SEO Services", departmentName,"Excellent choice! Please share your details with us to schedule a free consultation.");
                    }}
                  >
                    SEO Services
                  </button>
                  <button
                    className="btn2"
                    onClick={() => {
                      serviceSelection("Other Services", departmentName,"Excellent choice! Please share your details with us to schedule a free consultation.");
                    }}
                  >
                    Other Services
                  </button>
                </div>
              </div>
            ),
            time: new Date().toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
              timeZone: "Asia/Kolkata",
            }),
          },
        ]);
      }
    } catch (error) {
      console.error("Error setting department:", error);
    }
  };

  // const handleKeyPress = (event) => {
  //   if (event.key === "Enter") {
  //     event.preventDefault(); // Prevents the default behavior of moving to the next line
  //     sendMessage(info);
  //   }
  // };

  const handleKeyPressResume = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevents the default behavior of moving to the next line
      sendMessage({current:{value:"file uploaded",resume_stats:"uploaded"}});
    }
  };

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [chatbotMessages, department, service]);
  useEffect(() => {
    if (userinfo.current && chatbody.current && chatfooter.current) {
      userinfo.current.style.height = "auto";
      userinfo.current.style.height = `${userinfo.current.scrollHeight}px`;
      if (userinfo.current.scrollHeight < 200) {
        userinfo.current.style.overflowY = "hidden";
        userinfo.current.style.paddingRight = "45px";
      } else {
        userinfo.current.style.overflowY = "auto";
        userinfo.current.style.paddingRight = "30px";
      }
      chatfooter.current.style.height = `${userinfo.current.scrollHeight}px`;
      chatbody.current.style.height = `${
        580 - (userinfo.current.scrollHeight - 44)
      }px`;
    }
  }, [textvalue]);

  const handleChange = (e) => {
    settextValue(e.target.value);
  };

  const IntroMessage = {
    username: "system",
    messageType: "conversation",
    message:
      "Ask me anything about TechChefz services and features or choose a sample question below to start a conversation.",
    time: new Date().toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZone: "Asia/Kolkata",
    }),
  };
  const validateEmail = (email) => {
    // Simple regex pattern for basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const sendMessage = async (info) => {
    try {
      if (department !== "" || info?.current?.department !== undefined) {
        const userQuery = info.current.value;
        const resume_stats = info.current.resume_stats;
        if(info?.current?.value !== "file uploaded"){
          info.current.value = "";
          userinfo.current.value = "";
          settextValue("");
          const messageInfo = {
            username: "user",
            message: userQuery,
            messageType: "conversation",
            time: new Date().toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
              timeZone: "Asia/Kolkata",
            }),
          }
          setchatbotMessages((prevMessages) => [...prevMessages, messageInfo]);
        }
        setloadershow(true);
       if (
          (service !== "" || info?.current?.service !== "")
        ) {
          if (serviceActionCount === 0) {
            setTimeout(() => {
              setloadershow(false);
              setchatbotMessages((prevMessages) => [
                ...prevMessages,
                {
                  username: "system",
                  messageType: "userName",
                  message: (
                    <>
                      <div>
                      {department === "Services" || info?.current?.department === "Services"
                      ? "Please provide your name."
                      : department === "Hiring"|| info?.current?.department === "Hiring"
                      ? "That's great! Could you please provide your name."
                      :"Thank you for your interest in partnering with us! Could you provide your company name."}
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
            setserviceActionCount(1);
          }  else if (serviceActionCount === 1) {
            setuserName(userQuery);
            setTimeout(() => {
              setchatbotMessages((prevMessages) => [
                ...prevMessages,
                {
                  username: "system",
                  messageType: "email",
                  message: (
                    <>
                      <div>
                        <p className="email">
                          Please provide your phone number.
                        </p>
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
              setloadershow(false);
            }, 1000);
            setserviceActionCount(2);
          } 
          else if (serviceActionCount === 2) {
            setphoneNumber(userQuery);
            setTimeout(() => {
              setchatbotMessages((prevMessages) => [
                ...prevMessages,
                {
                  username: "system",
                  messageType: "email",
                  message: (
                    <>
                      <div>
                        <p className="email">
                          Please provide your email address.
                        </p>
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
              setloadershow(false);
            }, 1000);
            setserviceActionCount(3);
          } 
          else if (serviceActionCount === 3) {
            console.log(userQuery);
            if(resume_stats !== "uploaded"){
              if (validateEmail(userQuery)) {
                const response = await axios.post(
                  `${process.env.NEXT_PUBLIC_BACKEND_URI}/create_conversation`,
                  {
                    user_email: userQuery,
                    source: "web design",
                  }
                );
                setuserEmail(userQuery);
                setconversationID(response?.data?.convo_id);
                if(department!=="Hiring"){
                  setTimeout(() => {
                    setloadershow(false);
                    setchatbotMessages((prevMessages) => [
                      ...prevMessages,
                      {
                        username: "system",
                        messageType: "system",
                        message: (
                          <>
                            <div>
                              <p>
                                {department === "Services" || info?.current?.department === "Services"
                                ? `  Thank you, ${userName}. Your consultation for ${service} is booked. You will receive an email confirmation shortly.`
                                : department === "Hiring"|| info?.current?.department === "Hiring"
                                ? `Thank you, ${userName}! Our HR team will review your application and get in touch with you shortly. Have a great day!`
                                :`Thank you! Our team will contact you shortly to discuss partnership opportunities. Have a great day!`}
                              </p>
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
                      {
                        username: "system",
                        messageType: "system",
                        message: (
                          <>
                            <div>
                              <p>
                              If you have any specific questions, feel free to ask!
                              </p>
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
                }
                else{
                  setTimeout(() => {
                    setloadershow(false);
                    setchatbotMessages((prevMessages) => [
                      ...prevMessages,
                      {
                        username: "system",
                        messageType: "system",
                        message: (
                          <>
                            <div>
                              <p>
                                Please attach your resume.
                              </p>
                              <input
                              type="file"
                              placeholder="attach"
                              className={styles.emailinput}
                              ref={resumeRef}
                              onKeyDown={handleKeyPressResume}
                            />
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
                }
                setserviceActionCount(4);
              }
              else{
                setTimeout(() => {
                  setchatbotMessages((prevMessages) => [
                    ...prevMessages,
                    {
                      username: "system",
                      messageType: "email",
                      message: (
                        <>
                          <div>
                            <p className="email">
                              Please provide a valid email address.
                            </p>
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
                  setloadershow(false);
                }, 1000);
              }
            }
            else{
              setTimeout(() => {
                setloadershow(false);
                setchatbotMessages((prevMessages) => [
                  ...prevMessages,
                  {
                    username: "system",
                    messageType: "system",
                    message: (
                      <>
                        <div>
                          <p>
                          Thank you for your application! To explore more job opportunities, please visit our <a href="https://www.techchefz.digital/careers" target="_blank">Careers Page</a>.  
                          </p>
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
                  {
                    username: "system",
                    messageType: "system",
                    message: (
                      <>
                        <div>
                          <p>
                          If you have any specific questions, don&apos;t hesitate to ask!
                          </p>
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
              setserviceActionCount(4);
            }
          } 
          else {
            const queryResponse = await axios.post(
              `${process.env.NEXT_PUBLIC_BACKEND_URI}/create_message`,
              {
                user_email: userEmail,
                conversation_id: conversationID,
                input: userQuery,
                source: "web design",
              }
            );
            setloadershow(false);
            const content_check =
              queryResponse?.data?.content !==
              "Sorry, I am not able to understand your question fully. Could you please provide more details or clarify your query?"
                ? true
                : false;
            const uniqueSources = queryResponse?.data?.sources_list?.reduce(
              (acc, current) => {
                const x = acc.find((item) => item?.url === current?.url);
                if (!x) {
                  return acc.concat([current]);
                } else {
                  return acc;
                }
              },
              []
            );
            const SystemInfo = {
              username: "system",
              message: (
                <div>
                  <div>{queryResponse?.data?.content}</div>
                  <div>
                    {uniqueSources.length > 0 && content_check ? (
                      <>
                        <h6 className={styles.sourcesbox}>Sources</h6>
                        {uniqueSources?.map((items, index) => {
                          return (
                            <div key={index} className={styles.sourcecont}>
                              <p className={styles.sourcescount}>
                                [{index + 1}]
                              </p>{" "}
                              <a
                                href={items?.url}
                                className={styles.sourcelist}
                                target="_blank"
                              >
                                {items?.title}
                              </a>
                            </div>
                          );
                        })}
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              ),
              messageType: "conversation",
              time: new Date().toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
                timeZone: "Asia/Kolkata",
              }),
            };
            info.current.value = "";
            setchatbotMessages((prevMessages) => [...prevMessages, SystemInfo]);
          }
        }
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const clearConversation = async () => {
    setclearConversation(true);
  };

  const minimiseConversation = () => {
    sethidden(true);
  };

  return (
    <section className={hidden ? styles.chatboxBodyhidden : styles.chatboxBody}>
      <div className={styles.chatbotHeader}>
        <p className={styles.chatbotTitle}>Techchefz Digital Assistant</p>
        <div className={styles.headbtn}>
          <button onClick={minimiseConversation} className={styles.minimise}>
            -
          </button>
          <button onClick={clearConversation}>X</button>
        </div>
      </div>

      <div className={styles.chatbotTxtbody} ref={chatbody}>
        {chatbotMessages?.map((items, index) => (
          <div className="w-[100%]" key={index}>
            {items.username === "system" ? (
              <div className={styles.systemMessage}>
                <div>{items.message}</div>
                <div className={styles.messageTime}>{items.time}</div>
              </div>
            ) : (
              <div className={styles.userbox}>
                <div className={styles.usersMessage}>
                  <div>{items.message}</div>
                  <div className={styles.messageTime}>{items.time}</div>
                </div>
              </div>
            )}
          </div>
        ))}
        <div
          className={loadershow ? styles.loadervisible : styles.loaderhidden}
        >
          <div className={styles.loader}></div>
        </div>
        <div ref={messagesEndRef} />
      </div>

      <div className={styles.chatbotSendtxt} ref={chatfooter}>
        <textarea
          placeholder="Ask me anything about Techchefz"
          ref={userinfo}
          value={textvalue}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              buttonRef.current.click();
            }
          }}
          onChange={handleChange}
          style={{
            resize: "none",
            maxHeight: "200px",
          }}
          rows="1"
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
    </section>
  );
};

export default ChatboxBody;
