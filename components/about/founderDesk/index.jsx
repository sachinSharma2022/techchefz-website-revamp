"use client";

import { Icons } from "@/components/icons";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { useContext } from "react";

import { cn } from "@/lib/utils";
import Link from "next/link";
import styles from "./style.module.scss";

const FounderDesk = () => {
  const { theme } = useContext(MyContext);

  return (
    <section
      className={cn(styles.founderDesk, theme ? styles.founderDeskDark : "")}
    >
      <div className={cn("primary-container")}>
        <div className={cn(styles.flexContainer)}>
          <h6 className={styles.subHeading}>Founder’s desk</h6>
          <h3 className={styles.heading}>
            Founding Inspiration: <span> Mayank Maggon's Journey </span>
            with TechChefz Digital
          </h3>
        </div>

        <div className={styles.contentSec}>
          <div className={styles.teamCards}>
            <div className={styles.teamCardBg}>
              <div className={styles.cardHead}>
                <div>
                  <h6>Mayank Maggon</h6>
                  <p>CEO & CTO</p>
                </div>
              </div>
              <Link
                className={styles.linkedInIcon}
                href="https://www.linkedin.com/"
                target="_blank"
              >
                <Icons.Linkedin width={34} height={34} />
              </Link>
              <div className={styles.teamImg}>
                <ImageCustom
                  src="/images/img/team/team1.png"
                  width={240}
                  height={320}
                  alt="team-member"
                />
              </div>
            </div>
          </div>

          <div className={styles.paraSection}>
            <p className={styles.description}>
              Mayank Maggon, the driving force behind TechChefz Digital, has
              been a passionate tech enthusiast since his early days in BTech.
              His journey in the corporate world began with Infosys, where he
              honed his skills and gained invaluable experience. Over the course
              of 8 years, Mayank navigated through various roles in corporates
              and mid-scale IT service companies, working with esteemed global
              clients such as Cisco, Apple, Sony, Visma, GE, Courts Asia, SITA,
              Diageo, Unilever, Clifford Chance, Arizona University,
              NBCUniversal, and more.
            </p>
            <p className={styles.description}>
              His expertise in Enterprise Applications & Architectures spanned
              roles as a developer, team lead, manager, and architect,
              showcasing his versatility and depth of knowledge. With hands-on
              experience in Java, DOT Net, HTML, JS, CSS, React JS, Node JS,
              Adobe Experience Manager, and other cutting-edge technologies,
              Mayank brings a wealth of technical expertise and industry insight
              to TechChefz Digital. His journey is a testament to his unwavering
              dedication to innovation and excellence in the tech industry.
            </p>
            <p className={styles.description}>
              After a transformative scuba dive in the Maldives, Mayank Maggon
              made a pivotal decision to depart from the corporate ladder in
              December 2016. Fueled by a clear vision to revolutionize the
              digital landscape, Mayank set out to leverage the best technology
              ingredients, crafting custom applications and digital ecosystems
              tailored to clients' specific needs, limitations, and budgets.
            </p>
            <p className={styles.description}>
              However, this solo journey was not without its challenges. Mayank
              had to initiate the revenue engine by offering corporate trainings
              and conducting online batches for tech training across the USA. He
              also undertook small projects and subcontracted modules of larger
              projects for clients in the US, UK, and India. It was only after
              this initial groundwork that Mayank was able to hire a group of
              interns, whom he meticulously trained and groomed to prepare them
              for handling Enterprise Level Applications. This journey reflects
              Mayank's resilience, determination, and entrepreneurial spirit in
              building TechChefz Digital from the ground up. With a passion for
              innovation and a relentless drive for excellence, Mayank has
              steered TechChefz Digital through strategic partnerships,
            </p>
            <p className={styles.description}>
              groundbreaking projects, and exponential growth. His leadership
              has been instrumental in shaping TechChefz Digital into a leading
              force in the digital transformation arena, inspiring a culture of
              innovation and excellence that continues to propel the company
              forward.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderDesk;
