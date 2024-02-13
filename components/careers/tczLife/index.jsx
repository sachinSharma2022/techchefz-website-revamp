"use client";
import { Icons } from "@/components/icons";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { useContext, useRef, useState } from "react";
import Slider from "react-slick";

import { cn } from "@/lib/utils";
import styles from "./style.module.scss";
import PrimaryModal from "@/components/ui/primaryModal";

const TczLife = () => {
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
    slidesToScroll: 2,
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
          slidesToShow: 3,
          slidesToScroll: 3,
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
        breakpoint: 767,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderVideo = [
    {
      video:
        "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2ZmaWNlfGVufDB8fDB8fHww",
    },
    {
      video:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2ZmaWNlfGVufDB8fDB8fHww",
    },
    {
      video:
        "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      video:
        "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      video:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2ZmaWNlfGVufDB8fDB8fHww",
    },
    {
      video:
        "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      video:
        "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];
  return (
    <section
      className={`${styles.tczLife} ${theme ? styles.tczLifeDark : ""} `}
    >
      <div className={cn(styles.tczLifeSliderSection, "row")}>
        <div className={cn(styles.tczActionSection, "col-sm-6")}>
          <div>
            <h6 className={styles.tczLifeTitle}>Life at techchefz</h6>
            <h3 className={styles.tczLifeHeading}>
              Make an Impact <br /> from <span>Day One.</span>
            </h3>
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
            {sliderVideo.map((data, index) => (
              <button
                key={index}
                className={styles.videoWhapper}
                onClick={() => setIsOpen(true)}
              >
                <ImageCustom src={data.video} width={800} height={800} />
                <button className={cn(styles.videoButton)}>
                  <Icons.VideoButton />
                </button>
              </button>
            ))}
          </Slider>
        </div>

        <PrimaryModal open={isOpen} onClose={() => setIsOpen(false)}>
          <video
            width="100"
            height="100"
            playsInline
            autoPlay
            loop
            className="video-block"
          >
            <source
              src="http://122.176.75.250:4561/uploads/Video2_38a998231a.mp4"
              type="video/mp4"
            />
          </video>
        </PrimaryModal>
      </div>

      <div className={styles.tczLifeContent}>
        <p>
          Techchefz Digital demonstrates an excellent understanding of user
          needs and all of their designs are creative and elegant in their
          simplicity. They’re very well thought out and have an excellent
          response to feedback. All of these qualities are why they’re our go-to
          user experience experts. We demonstrate an excellent understanding of
          user needs and all of their designs are creative and elegant in their
          simplicity. They’re very well thought out and have an excellent
          response to feedback.
        </p>
      </div>
    </section>
  );
};

export default TczLife;
