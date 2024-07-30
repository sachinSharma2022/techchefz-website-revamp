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
                  <ImageCustom width={500} height={500} src={item.imageUrl} />
                  <p className="description">{item.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={7}
            freeMode={true}
            watchSlidesProgress={true}
            navigation={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="gallery-thumb"
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
          >
            {gallery.map((item, index) => (
              <SwiperSlide key={index}>
                <ImageCustom width={300} height={300} src={item.imageUrl} />
                <Icons.eye/>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OurGallery;
