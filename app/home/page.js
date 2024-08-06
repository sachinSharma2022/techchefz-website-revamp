"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
export const config = { amp: true };

const HomePage = () => {
  const [date, setDate] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    setDate(currentDate.toISOString());
  }, []);

  return (
    <>
      <Head>
        <script
          async
          key="amp-timeago"
          custom-element="amp-timeago"
          src="https://cdn.ampproject.org/v0/amp-timeago-0.1.js"
        />
      </Head>
      <div className="amp-page">
        {/* <p>Some time: {date}</p> */}
        <amp-timeago
          width="0"
          height="15"
          datetime={date}
          layout="responsive"
        >
          {date}
        </amp-timeago>
      </div>
    </>
  );
};

export default HomePage;
