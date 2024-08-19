"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import { Icons } from "@/components/icons";
import { ImageCustom } from "@/components/ui/imageCustom";

export const ConvertUserMessageToHTML = ({ text }) => {
  const lines = text.split('\n');
  
  return (
    <div>
      {lines.map((line, index) => (
        line.trim() ? <p key={index}>{line.trim()}</p> : <br key={index} />
      ))}
    </div>
  );
};

const ChatBoxBody = ({ sethidden, hidden, setclearConversation }) => {
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
  const [phoneNumber, setphoneNumber] = useState("");
  const resumeRef = useRef();
  const [jobRole, setjobRole] = useState("");
  const [jobExperience, setjobExperience] = useState("");
  const [jobType, setjobType] = useState("");
  const [budget, setbudget] = useState("");

  const [chatbotMessages, setchatbotMessages] = useState([
    {
      username: "system",
      messageType: "Department",
      message: (
        <>
          <div>
            Hello! Welcome to Techchefz. How can we assist you today? Please
            choose one of the following options:
          </div>
          <div className={styles.choosebtns}>
            <button
              className={styles.choosebtn}
              onClick={() => {
                departmentSelection(
                  "Hiring",
                  [
                    {
                      serviceName: "Apply for a Job",
                      serviceSelectReply:
                        "I am interested in applying for a job at Techchefz.",
                    },
                    {
                      serviceName: "Hire a Resource",
                      serviceSelectReply:
                        "I am interested in hiring a resource at Techchefz.",
                    },
                  ],
                  "Welcome to the Techchefz HR department. How can we assist youtoday?"
                );
              }}
            >
              Resource Hiring/Job Application
            </button>
            <button
              className={styles.choosebtn}
              onClick={() => {
                departmentSelection(
                  "Partner Collaboration",
                  [
                    {
                      serviceName: "Technology Partnership",
                      serviceSelectReply:
                        "I am interested in collaborating as a Technology Partner with Techchefz.",
                    },
                    {
                      serviceName: "Marketing Partnership",
                      serviceSelectReply:
                        "I am interested in collaborating as a Marketing Partner with Techchefz.",
                    },
                    {
                      serviceName: "Other Collaborations",
                      serviceSelectReply:
                        "I am interested in collaborating as a Other Collaborations with Techchefz.",
                    },
                  ],
                  "Hello! Welcome to Techchefz. Are you looking to collaborate with us? Please choose from the following options:"
                );
              }}
            >
              Partner Collaboration
            </button>
            <button
              className={styles.choosebtn}
              onClick={() => {
                departmentSelection(
                  "Services",
                  [
                    {
                      serviceName: "Website Development",
                      serviceSelectReply:
                        "Excellent choice! Please share your details with us to schedule a free consultation.",
                    },
                    {
                      serviceName: "Digital Transformation",
                      serviceSelectReply:
                        "Excellent choice! Please share your details with us to schedule a free consultation.",
                    },
                    {
                      serviceName: "SEO Services",
                      serviceSelectReply:
                        "Excellent choice! Please share your details with us to schedule a free consultation.",
                    },
                    {
                      serviceName: "Other Services",
                      serviceSelectReply:
                        "Excellent choice! Please share your details with us to schedule a free consultation.",
                    },
                  ],
                  "We offer a wide range of services to meet your needs. Please choose from the following:"
                );
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

  const serviceSelection = async (
    serviceName,
    departmentName,
    servicemessage
  ) => {
    setservice(serviceName);
    sendMessage({
      current: {
        value: servicemessage,
        service: serviceName,
        department: departmentName,
      },
    });
  };

  const departmentSelection = async (
    departmentName,
    serviceData,
    serviceSelectMessage
  ) => {
    try {
      setdepartment((prev) => departmentName);
      setchatbotMessages([
        {
          username: "system",
          messageType: "service",
          message: (
            <div>
              <div>{serviceSelectMessage}</div>
              <div className={styles.choosebtns}>
                {serviceData.map((data, index) => {
                  return (
                    <>
                      <button
                        key={index}
                        className={styles.choosebtn}
                        onClick={() => {
                          serviceSelection(
                            data.serviceName,
                            departmentName,
                            data.serviceSelectReply
                          );
                        }}
                      >
                        {data.serviceName}
                      </button>
                    </>
                  );
                })}
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
    } catch (error) {
      console.error("Error setting department:", error);
    }
  };

  // const handleKeyPressResume = (event) => {
  //   console.log("Rohit")
  //   console.log(event);
  //   event.preventDefault(); // Prevents the default behavior of moving to the next line
  //   sendMessage({
  //       current: { value: "file uploaded", resume_stats: "uploaded" },
  //   });
  // };
  const handleKeyPressResume = (event) => {
    const file = event.target.files[0]; // Access the uploaded file
    if (file) {
        console.log("Rohit");
        console.log(file);
        event.preventDefault();
        sendMessage({
            current: { value: "file uploaded", resume_stats: "uploaded" },
        });
    } else {
        console.log("No file selected");
    }
};


  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [chatbotMessages, department, service]);
  useEffect(() => {
    if (userinfo.current && chatbody.current && chatfooter.current) {
      userinfo.current.style.height = "auto";
      userinfo.current.style.height = `${userinfo.current.scrollHeight}px`;
      if (userinfo.current.scrollHeight < 120) {
        userinfo.current.style.overflowY = "hidden";
        userinfo.current.style.paddingRight = "45px";
      } else {
        userinfo.current.style.overflowY = "auto";
        userinfo.current.style.paddingRight = "30px";
      }
      chatfooter.current.style.height = `${userinfo.current.scrollHeight}px`;
      chatbody.current.style.height = `${
        500 - (userinfo.current.scrollHeight - 44)
      }px`;
    }
  }, [textvalue]);

  const handleChange = (e) => {
    const spaceRemovedcharacters = e.target.value.replace(/\s+/g, "");
    if (spaceRemovedcharacters.length <= 500) {
      settextValue(e.target.value);
    }
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const pattern = /^\d{10}$/;
    return pattern.test(phoneNumber);
  };

  const validateName = (name) => {
    const cleanedName = name.replace(/\s+/g, "");
    const isValid = cleanedName.length >= 4 && cleanedName.length <= 250;
    return isValid;
  };

  const detailsCapture = async (userEmail, userData) => {
    let formData = new FormData();
    formData.append("input", userData);
    formData.append("file", resumeRef);

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/upload_leads`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/create_conversation`, {
      method: "POST",
      body: JSON.stringify({
        user_email: userEmail,
        source: "web design",
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((createConversationId) => {
        console.log(createConversationId?.convo_id);
        setconversationID(createConversationId?.convo_id);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const sendMessage = async (info) => {
    try {
      if (info?.current?.value !== "" && !loadershow) {
        if (
          (department !== "" || info?.current?.department !== undefined) &&
          (service !== "" || info?.current?.service !== undefined)
        ) {
          const userQuery = info.current.value;
          const resume_stats = info.current.resume_stats;
          if (info?.current?.value !== "file uploaded") {
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
            };
            setchatbotMessages((prevMessages) => [
              ...prevMessages,
              messageInfo,
            ]);
          }
          setloadershow(true);
          if (service !== "" || info?.current?.service !== "") {
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
                          {department === "Services" ||
                          info?.current?.department === "Services"
                            ? "Please provide your name."
                            : department === "Hiring" ||
                              info?.current?.department === "Hiring"
                            ? service === "Hire a Resource" ||
                              info.current.service === "Hire a Resource"
                              ? "Hello! Welcome to Techchefz. I’m here to help you find the perfect resource for your needs. May I know your name, please?"
                              : "That's great! Could you please provide your name."
                            : "Thank you for your interest in partnering with us! Could you provide your company name."}
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
            } else if (serviceActionCount === 1) {
              if (validateName(userQuery)) {
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
              } else {
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
                              Name must be between 4 to 250 characters.
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
            } else if (serviceActionCount === 2) {
              if (validatePhoneNumber(userQuery)) {
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
              } else {
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
                              Please enter a valid phone number(10 Digits).
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
            } else if (serviceActionCount === 3) {
              if (resume_stats !== "uploaded") {
                if (validateEmail(userQuery)) {
                  if (service !== "Apply for a Job") {
                    const userDataInfo = {
                      userName: userName,
                      userEmail: userQuery,
                      userPhone: phoneNumber,
                      department: department,
                      services: service,
                    };
                    detailsCapture(userQuery, JSON.stringify(userDataInfo));
                  }
                  setuserEmail(userQuery);
                  if (department !== "Hiring") {
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
                                <div>
                                  {department === "Services" ||
                                  info?.current?.department === "Services"
                                    ? `  Thank you, ${userName}. Your consultation for ${service} is booked. You will receive an email confirmation shortly.`
                                    : department === "Hiring" ||
                                      info?.current?.department === "Hiring"
                                    ? `Thank you, ${userName}! Our HR team will review your application and get in touch with you shortly. Have a great day!`
                                    : `Thank you! Our team will contact you shortly to discuss partnership opportunities. Have a great day!`}
                                </div>
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
                                <div>
                                  If you have any specific questions, feel free
                                  to ask!
                                </div>
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
                    if (
                      service === "Hire a Resource" ||
                      userQuery?.current?.service === "Hire a Resource"
                    ) {
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
                                  <div>
                                    Which position or role are you looking to
                                    fill?
                                  </div>
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
                                  <div>Please attach your resume.</div>
                                  <input
                                    type="file"
                                    placeholder="attach"
                                    className={styles.emailinput}
                                    ref={resumeRef}
                                    onChange={handleKeyPressResume}
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
                  }
                  setserviceActionCount(4);
                } else {
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
              } else {
                const userDataInfo = {
                  userName: userName,
                  userEmail: userEmail,
                  userPhone: phoneNumber,
                  department: department,
                  services: service,
                };
                detailsCapture(userEmail, JSON.stringify(userDataInfo));
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
                            <div>
                              Thank you for your application! To explore more
                              job opportunities, please visit our{" "}
                              <a
                                href="https://www.techchefz.digital/careers"
                                target="_blank"
                                className={styles.careerslink}
                              >
                                Careers Page
                              </a>
                              .
                            </div>
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
                            <div>
                              If you have any specific questions, don&apos;t
                              hesitate to ask!
                            </div>
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
            } else if (
              serviceActionCount === 4 &&
              service === "Hire a Resource"
            ) {
              setjobRole(userQuery);
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
                          <div>
                            How many years of experience should the candidate
                            have in this field?
                          </div>
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
              setserviceActionCount(5);
            } else if (
              serviceActionCount === 5 &&
              service === "Hire a Resource"
            ) {
              setjobExperience(userQuery);
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
                          <div>
                            What type of work arrangement are you offering?
                            (e.g., full-time, part-time, remote, on-site)
                          </div>
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
              setserviceActionCount(6);
            } else if (
              serviceActionCount === 6 &&
              service === "Hire a Resource"
            ) {
              setjobType(userQuery);
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
                          <div>
                            What is your budget for this role? (Please specify
                            if it is hourly, monthly, or project-based)
                          </div>
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
              setserviceActionCount(7);
            } else if (
              serviceActionCount === 7 &&
              service === "Hire a Resource"
            ) {
              const userDataInfo = {
                userName: userName,
                userEmail: userQuery,
                userPhone: phoneNumber,
                jobRole: jobRole,
                jobExperience: jobExperience,
                jobType: jobType,
                Budget: userQuery,
                department: department,
                services: service,
              };
              detailsCapture(userQuery, JSON.stringify(userDataInfo));
              setbudget(userQuery);
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
                          <div>
                            Thank you for providing your details. Someone from
                            our team will reach out to you. Meanwhile, feel free
                            to ask any questions you may have!
                          </div>
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
              setserviceActionCount(8);
            } else {
              fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/create_message`, {
                method: "POST",
                body: JSON.stringify({
                  user_email: userEmail,
                  conversation_id: conversationID,
                  input: userQuery,
                  source: "web design",
                }),
                headers: {
                  "Content-type": "application/json",
                },
              })
                .then((response) => response.json())
                .then((queryResponse) => {
                  console.log(queryResponse);
                  setloadershow(false);
                  const content_check =
                    queryResponse?.content !==
                    "Sorry, I am not able to understand your question fully. Could you please provide more details or clarify your query?"
                      ? true
                      : false;
                  const uniqueSources = queryResponse?.sources_list?.reduce(
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
                        <div cleanedName={styles.userMessageText}><ConvertUserMessageToHTML text={queryResponse?.content}/></div>
                        <div>
                          {uniqueSources.length > 0 && content_check ? (
                            <>
                              <h6 className={styles.sourcesbox}>Sources</h6>
                              {uniqueSources?.map((items, index) => {
                                return (
                                  <div
                                    key={index}
                                    className={styles.sourcecont}
                                  >
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
                  setchatbotMessages((prevMessages) => [
                    ...prevMessages,
                    SystemInfo,
                  ]);
                });
            }
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
    <div className={hidden ? styles.chatboxBodyhidden : styles.chatboxBody}>
      <div className={styles.chatbotHeader}>
        <div className={styles.chatbotTitle}>
          <ImageCustom
            src="/images/logo-icon.svg"
            width={24}
            height={32}
            alt="header-logo"
            className={styles.iconStyle}
          />
          <p>Techchefz Digital Assistant</p>
        </div>
        <div className={styles.headbtn}>
          <button onClick={minimiseConversation} className={styles.minimise}>
            -
          </button>
          <button onClick={clearConversation}>
            <Icons.Close />
          </button>
        </div>
      </div>

      <div
        className={styles.chatbotTxtbody}
        ref={chatbody}
        style={{ minHeight: "390px" }}
      >
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
                  <div className={styles.userMessageText}>{items.message}</div>
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
            maxHeight: "120px",
          }}
          rows="1"
        />
        <button
          className={styles.sendbtn}
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

export default ChatBoxBody;
