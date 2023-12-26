"use client";

import { Icons } from "@/components/icons";
import { ImageCustom } from "@/components/ui/imageCustom";
import Slider from "react-slick";
import styles from "./style.module.scss";
const Testimonials = () => {
  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const serviceCard = [
    {
      CustomerText:
        "Techchefz Digital demonstrates an excellent understanding of user needs and all of their designs are creative and elegant in their simplicity. They’re very well thought out and have an excellent response to feedback. All of these qualities are why they’re our go-to user experience experts.",
      img: "/images/profile.png",
      CustomerName: "Arjuna Pandean.",
      CustomerRole: "Group Manager, Royal Enfield",
    },
    {
      CustomerText:
        "Techchefz Digital demonstrates an excellent understanding of user needs and all of their designs are creative and elegant in their simplicity. They’re very well thought out and have an excellent response to feedback. All of these qualities are why they’re our go-to user experience experts.",
      img: "/images/profile.png",
      CustomerName: "Arjuna Pandean.",
      CustomerRole: "Group Manager, Royal Enfield",
    },
    {
      CustomerText:
        "Techchefz Digital demonstrates an excellent understanding of user needs and all of their designs are creative and elegant in their simplicity. They’re very well thought out and have an excellent response to feedback. All of these qualities are why they’re our go-to user experience experts.",
      img: "/images/profile.png",
      CustomerName: "Arjuna Pandean.",
      CustomerRole: "Group Manager, Royal Enfield",
    },
  ];
  return (
    <section className={`${styles.digitalStyle}`}>
      <div className={styles.testimonialsLeft}>
        <div className={styles.ProjectHighlight}>Testimonials</div>
        <div className={styles.testimonialsHeading}>
          <h3>Voices of Delightful Experiences.</h3>
        </div>
        <div className={styles.testimonialsText}>
          <p>
            Delve into our case studies to witness firsthand how we&apos;ve
            tackled challenges, delivered solutions, and achieved measurable
            success. Each story is a testament to our commitment, expertise, and
            the transformative impact.
          </p>
        </div>
      </div>

      <div className="testimonials-slider">
        <Slider {...testimonialSettings}>
          {serviceCard.map((data, index) => (
            <div key={index} className={styles.testimonialCardBox}>
              <div className={styles.commaImg}>
                <Icons.Comma width={29} height={24} />
              </div>
              <p className={styles.customerText}>{data.CustomerText}</p>
              <div className={styles.customerProfile}>
                <div className={styles.customerImg}>
                  <ImageCustom
                    src={data.img}
                    width={100}
                    height={100}
                    alt="profileImg"
                  />
                </div>
                <p className={styles.customerName}>{data.CustomerName}</p>
                <p className={styles.customerRole}>{data.CustomerRole}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
