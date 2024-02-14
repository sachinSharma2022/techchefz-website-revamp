"use client";
import { Icons } from "@/components/icons";
import { MyContext } from "@/context/theme";
import { base_Url } from "@/lib/constants";
import { useContext, useRef, useState } from "react";
import Slider from "react-slick";

import PrimaryModal from "@/components/ui/primaryModal";
import { cn } from "@/lib/utils";
import styles from "./style.module.scss";

const TczLife = ({ props }) => {
  console.log("rr", props);
  const [isOpen, setIsOpen] = useState(false);
  const slider = useRef(null);
  const [oldSlide, setOldSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlide2, setActiveSlide2] = useState(0);
  const { theme, setTheme } = useContext(MyContext);

  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      setOldSlide(current);
      setActiveSlide(next);
    },
    afterChange: (current) => setActiveSlide2(current),
    responsive: [
      {
        breakpoint: 3000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 1.6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // const sliderVideo = [
  //   {
  //     video:
  //       "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2ZmaWNlfGVufDB8fDB8fHww",
  //   },
  //   {
  //     video:
  //       "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2ZmaWNlfGVufDB8fDB8fHww",
  //   },
  //   {
  //     video:
  //       "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
  //   },
  //   {
  //     video:
  //       "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
  //   },
  //   {
  //     video:
  //       "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2ZmaWNlfGVufDB8fDB8fHww",
  //   },
  //   {
  //     video:
  //       "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
  //   },
  //   {
  //     video:
  //       "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
  //   },
  // ];
  return (
    <section
      className={`${styles.tczLife} ${theme ? styles.tczLifeDark : ""} `}
    >
      <div className={cn(styles.tczLifeSliderSection, "row")}>
        <div className={cn(styles.tczActionSection, "col-sm-6")}>
          <div>
            <h6
              className={cn(styles.tczLifeTitle, "gradient-text")}
              dangerouslySetInnerHTML={{ __html: `${props?.Title}` }}
            ></h6>
            <h3
              className={cn(styles.tczLifeHeading, "gradient-text")}
              dangerouslySetInnerHTML={{ __html: `${props?.SubTitle}` }}
            ></h3>
          </div>

          <div className={styles.sliderArrow}>
            <button
              className={
                activeSlide === 0 ? styles.arrowDisabled : styles.button
              }
              onClick={() => slider?.current?.slickPrev()}
            >
              <Icons.ArrowLeft />
            </button>
            <button
              className={styles.button}
              onClick={() => slider?.current?.slickNext()}
            >
              <Icons.ArrowRight fill="black" stroke="black" />
            </button>
          </div>
        </div>
        <div className={cn(styles.sliderSection, "col-sm-6 tczLifeSlider")}>
          <Slider {...settings} ref={slider}>
            {props?.VideoSlider?.map((data, index) => (
              <button
                key={index}
                className={styles.videoWhapper}
                onClick={() => setIsOpen(true)}
              >
                <div>
                  <video
                    key={index}
                    width="100"
                    height="100"
                    muted
                    className="video-block"
                  >
                    <source
                      src={
                        data?.Video?.data?.attributes?.url
                          ? `${base_Url}${data.Video.data.attributes.url}`
                          : `${base_Url}/`
                      }
                      type="video/mp4"
                    />
                  </video>
                </div>

                <div className={cn(styles.videoButton)}>
                  <Icons.VideoButton />
                </div>
              </button>
            ))}
          </Slider>
        </div>

        <PrimaryModal open={isOpen} onClose={() => setIsOpen(false)}>
          {props?.VideoSlider?.map((data, index) => (
            <video
              key={index}
              width="100"
              height="100"
              playsInline
              autoPlay
              loop
              className="video-block"
            >
              <source
                src={
                  data?.Video?.data?.attributes?.url
                    ? `${base_Url}${data.Video.data.attributes.url}`
                    : `${base_Url}/`
                }
                type="video/mp4"
              />
            </video>
          ))}
        </PrimaryModal>
      </div>

      <div className={styles.tczLifeContent}>
        <p>{props?.Description}</p>
      </div>
    </section>
  );
};

export default TczLife;
