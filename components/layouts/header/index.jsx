"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { Button } from "@/components/ui/button";
import { ImageCustom } from "@/components/ui/imageCustom";
import { Icons } from "@/components/icons";
import styles from "./style.module.scss";
import { cn } from "@/lib/utils";

const Header = () => {
  const { theme, setTheme } = useContext(MyContext);
  const pathname = usePathname();
  const [dropChoice, setDropChoice] = useState("technology");
  const [viewDescription, setViewDescription] = useState(null);
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };

  const renderTechnologyMenu = () => {
    const multiRedirection = [
      {
        id: "1",
        title: "CMS",
        href: "#",
        para: "Be a partner for industry verticals on the inevitable journey towards enterprise.",
      },
      {
        id: "2",
        title: "Commerce",
        href: "#",
        para: "Be a partner for industry verticals on the inevitable journey towards enterprise.",
      },
      {
        id: "3",
        title: "Microservices",
        href: "#",
        para: "Be a partner for industry verticals on the inevitable journey towards enterprise.",
      },
      {
        id: "4",
        title: "Cloud & DevSecOps",
        href: "#",
        para: "Be a partner for industry verticals on the inevitable journey towards enterprise.",
      },
      {
        id: "5",
        title: "Data Intelligence",
        href: "#",
        para: "Be a partner for industry verticals on the inevitable journey towards enterprise.",
      },
      {
        id: "6",
        title: "Custom Development",
        href: "#",
        para: "Be a partner for industry verticals on the inevitable journey towards enterprise.",
      },
      {
        id: "7",
        title: "Analytics Automation",
        href: "",
        para: "Be a partner for industry verticals on the inevitable journey towards enterprise.",
      },
    ];
    const multiMoreRedirection = [
      {
        title: "Careers",
        href: "#",
      },
      {
        title: "Insights",
        href: "#",
      },
      {
        title: "Center of Excellence",
        href: "#",
      },
      {
        title: "Accelerators",
        href: "#",
      },
    ];
    return (
      <>
        <section className={styles.subsection}>
          <div
            className={
              dropChoice === "technology"
                ? `${styles.latestTech}`
                : `${styles.latestTechMore}`
            }
          >
            <h1>Latest from technology</h1>
            <div className={styles.imageTech}>
              <div className={styles.imgBox}>
                <ImageCustom
                  src="/images/img/nav-img.png"
                  width={300}
                  height={300}
                  alt="nav-image"
                />
              </div>
              <div className={styles.updateDiv}>
                <div>
                  <p className={styles.updatePara}>
                    Learn more about the latest Drupal Updates
                  </p>
                </div>
                <div>
                  <Icons.ArrowRight size={18} />
                </div>
              </div>
            </div>
            <div className={styles.nextHref}>
              <div>
                <p className={styles.updatePara1}>
                  CMS has been the game changer of 2023 website trends
                </p>
              </div>
              <div>
                <Icons.ArrowRight size={18} />
              </div>
            </div>
          </div>

          <div
            className={
              dropChoice === "technology"
                ? `${styles.overviewTech}`
                : `${styles.overviewTechMore}`
            }
          >
            {dropChoice === "technology" && (
              <div className={styles.overviewFlex}>
                <div className={styles.overviewSubFlex}>
                  <div>
                    <Icons.Performance width={56} height={56} />
                  </div>
                  <div className={styles.overviewTitle}>
                    <h1>Technology Overview</h1>
                    <p>
                      Be a partner for industry verticals on the inevitable
                      <br />
                      journey towards enterprise.
                    </p>
                  </div>
                </div>
                <div className={styles.overviewBtn}>
                  <Button variant="outline" size="sm">
                    Overview <Icons.ArrowRight size={18} />
                  </Button>
                </div>
              </div>
            )}
            <div
              className={cn(
                "row",
                dropChoice === "technology"
                  ? styles.multiHrefs
                  : styles.multiMoreHrefs
              )}
            >
              {dropChoice === "technology" &&
                multiRedirection.map((value, index) => {
                  return (
                    <div
                      className={cn(styles.hrefsFlex, "col-sm-6")}
                      onMouseOver={() => setViewDescription(index)}
                      onMouseOut={() => setViewDescription(null)}
                      key={value.id}
                    >
                      <div className={styles.hrefInnerFlex}>
                        <div className={styles.head}>
                          <h1>{value.title}</h1>
                          <Icons.ArrowForward />
                        </div>

                        <p className={styles.excepPara}>{value.para}</p>
                      </div>
                    </div>
                  );
                })}
              {dropChoice === "MoreOptions" &&
                multiMoreRedirection.map((key) => {
                  return (
                    <>
                      <div className={styles.hrefsFlex}>
                        <div className={styles.hrefInnerFlex}>
                          <h1>{key.title}</h1>
                          <Icons.ArrowForward />
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
          </div>
        </section>
      </>
    );
  };

  return (
    <header
      className={`${styles.headerMain} ${theme ? styles.headerDarkStyle : ""}`}
    >
      <div className={cn(styles.headerContainer, "primary-container")}>
        <div className={styles.logo}>
          <Link href="/" className={styles.lightLogo}>
            <ImageCustom
              src="/images/logo.svg"
              width={153}
              height={40}
              alt=""
            />
          </Link>
          <Link href="/" className={styles.darkLogo}>
            <ImageCustom
              src="/images/white-logo.svg"
              width={153}
              height={40}
              alt=""
            />
          </Link>
        </div>
        <nav className={isActive ? styles.showNav : null}>
          <ul>
            <li>
              <Link
                href="/about"
                className={pathname == "/about" ? styles.active : ""}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/solutions"
                className={pathname == "/solutions" ? styles.active : ""}
              >
                Solutions
              </Link>
            </li>
            <li
              className={styles.dropDown}
              onMouseEnter={() => {
                setDropChoice("technology");
              }}
            >
              <Link
                href="/technology"
                className={pathname == "/technology" ? styles.active : ""}
              >
                Technology <div className={styles.arrow} />
              </Link>
              <ul className={styles.subMenu}>{renderTechnologyMenu()}</ul>
            </li>
            <li>
              <Link
                href="/portfolio"
                className={pathname == "/portfolio" ? styles.active : ""}
              >
                Portfolio
              </Link>
            </li>
            <li
              className={styles.dropDown}
              onMouseEnter={() => {
                setDropChoice("MoreOptions");
              }}
            >
              <Link href="/">
                <Icons.MoreDotIcon width={4} height={14} /> More
              </Link>
              <ul
                className={
                  dropChoice === "MoreOptions"
                    ? `${styles.subMenuMore}`
                    : `${styles.subMenu}`
                }
              >
                {renderTechnologyMenu()}
              </ul>
            </li>
          </ul>
        </nav>
        <div className={styles.headerRight}>
          <div className={styles.modeBtn}>
            <Button variant="default" onClick={() => setTheme(!theme)}>
              {theme ? (
                <Icons.DarkThemeIcon size={30} />
              ) : (
                <Icons.Moon size={15} />
              )}
            </Button>
          </div>
          <Button variant="blueBtn" className={styles.headerBtn} size="sm">
            Estimate Project
          </Button>

          <div className={isActive ? styles.activeHumburger : null}>
            <Button
              variant="default"
              className={styles.navHamburger}
              onClick={toggleClass}
            >
              <span></span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
