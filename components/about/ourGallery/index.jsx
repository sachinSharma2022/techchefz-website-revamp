"use client";
import TextRevel from "@/components/ui/sectionAnimation";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import { useContext, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import styles from "./style.module.scss";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { ImageCustom } from "@/components/ui/imageCustom";
import { Icons } from "@/components/icons";

const OurGallery = ({ props }) => {
  const { theme, setTheme } = useContext(MyContext);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const gallery = [
    {
      imageUrl: "https://swiperjs.com/demos/images/nature-1.jpg",
      description:
        "Changing the way our clients engage today’s connected consumers by creating immersive stories across brand communications",
    },
    {
      imageUrl: "https://swiperjs.com/demos/images/nature-2.jpg",
      description:
        "Changing the way our clients engage today’s connected consumers by creating immersive stories across brand communications",
    },
    {
      imageUrl: "https://swiperjs.com/demos/images/nature-3.jpg",
      description:
        "Changing the way our clients engage today’s connected consumers by creating immersive stories across brand communications",
    },
    {
      imageUrl: "https://swiperjs.com/demos/images/nature-4.jpg",
      description:
        "Changing the way our clients engage today’s connected consumers by creating immersive stories across brand communications",
    },
    {
      imageUrl: "https://swiperjs.com/demos/images/nature-5.jpg",
      description:
        "Changing the way our clients engage today’s connected consumers by creating immersive stories across brand communications",
    },
    {
      imageUrl: "https://swiperjs.com/demos/images/nature-6.jpg",
      description:
        "Changing the way our clients engage today’s connected consumers by creating immersive stories across brand communications",
    },
    {
      imageUrl: "https://swiperjs.com/demos/images/nature-7.jpg",
      description:
        "Changing the way our clients engage today’s connected consumers by creating immersive stories across brand communications",
    },
    {
      imageUrl: "https://swiperjs.com/demos/images/nature-8.jpg",
      description:
        "Changing the way our clients engage today’s connected consumers by creating immersive stories across brand communications",
    },
    {
      imageUrl: "https://swiperjs.com/demos/images/nature-9.jpg",
      description:
        "Changing the way our clients engage today’s connected consumers by creating immersive stories across brand communications",
    },
    {
      imageUrl: "https://swiperjs.com/demos/images/nature-10.jpg",
      description:
        "Changing the way our clients engage today’s connected consumers by creating immersive stories across brand communications",
    },
  ];

  return (
    <section
      className={cn(styles.ourGallery, theme ? styles.ourGalleryDark : "")}
    >
      <div className={cn("primary-container")}>
        <TextRevel>
          <div className={styles.ourTeamHead}>
            <div className={styles.titleWrapper}>
              <h6 className={cn(styles.ourGalleryTitle, "gradient-text")}>
                Our Gallery
              </h6>
              <h3 className={cn(styles.ourGalleryHeading, "gradient-text")}>
                From Vision to Reality
              </h3>
              <p className={styles.ourGalleryText}>
                Our workspace reflects our philosophy: open, collaborative, and
                vibrant. Take a virtual tour of where the magic happens, from
                state-of-the-art labs to cozy brainstorming nooks.
              </p>
            </div>
          </div>
        </TextRevel>

        <div className="about-gallery-section">
          <Swiper
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="gallery-main"
          >
            {gallery.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="main-image-sec">
                  <ImageCustom className="img-style" width={500} height={500} src={item.imageUrl} />
                  <p className="description">{item.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="thumb-section">
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              breakpoints={{
                300: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 5,
                },
                1300: {
                  slidesPerView: 7,
                },
              }}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="gallery-thumb"
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
              pagination={false}
            >
              {gallery.map((item, index) => (
                <SwiperSlide key={index}>
                  <ImageCustom width={300} height={300} src={item.imageUrl} />
                  <Icons.eye />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="slider-arrow gallery-slider-nav">
              <button
                aria-label="Move Left"
                title="Move Left"
                className={cn(styles.button, "arrow-left arrow")}
              >
                <Icons.ArrowLeft />
              </button>
              <button
                aria-label="Move Right"
                title="Move Right"
                className={cn(styles.button, "arrow-right arrow")}
              >
                <Icons.ArrowRight fill="black" stroke="black" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurGallery;
