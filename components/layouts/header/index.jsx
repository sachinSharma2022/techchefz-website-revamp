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

const Header = () => {
  const { theme, setTheme } = useContext(MyContext);

  const pathname = usePathname();

  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };

  const renderTechnologyMenu = () => {
    const multiredirection = [
      {
        title: "CMS",
        href: "#",
      },
      {
        title: "Commerce",
        href: "#",
      },
      {
        title: "Microservices",
        href: "#",
      },
      {
        title: "Cloud & DevSecOps",
        href: "#",
      },
      {
        title: "Data Intelligence",
        href: "#",
      },
      {
        title: "Custom Development",
        href: "#",
      },
      {
        title: "Analytics Automation",
        href: "",
        para: "Be a partner for industry verticals on the inevitable journey towards enterprise.",
      },
    ];
    return (
      <>
        <section className={styles.subsection}>
          <div className={styles.latestTech}>
            <h1>Latest from technology</h1>
            <div className={styles.imageTech}>
              <img src="/images/img/nav-img.png" alt="nav-image" />
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

          <div className={styles.overviewTech}>
            <div className={styles.overviewFlex}>
              <div className={styles.overviewSubFlex}>
                <div>
                  <img src="/images/icons/headerIcon.png" alt="setting-icon" />
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
            <div className={styles.multiHrefs}>
              {multiredirection.map((key) => {
                return (
                  <>
                    <div className={styles.hrefsFlex}>
                      <div className={styles.hrefInnerFlex}>
                        <h1>{key.title}</h1>
                        <Icons.ArrowForward />
                      </div>
                      {key.para && (
                        <p className={styles.excepPara}>{key.para}</p>
                      )}
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

  const renderMoreItemsMenu = () => {
    const multiMoreRedirection = [
      {
        title: "CMS",
        href: "#",
      },
      {
        title: "Commerce",
        href: "#",
      },
      {
        title: "Microservices",
        href: "#",
      },
      {
        title: "Cloud & DevSecOps",
        href: "#",
      },
    ];
    <>
      <section className={styles.subsection}>
        <div className={styles.latestTech}>
          <h1>Latest from technology</h1>
          <div className={styles.imageTech}>
            <img src="/images/img/nav-img.png" alt="nav-image" />
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

        <div className={styles.overviewTech}>
          {multiMoreRedirection.map((key) => {
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
      </section>
    </>;
  };

  return (
    <header
      className={`${styles.headerMain} ${theme ? styles.headerDarkStyle : ""}`}
    >
      <div className={styles.logo}>
        <Link href="/" className={styles.lightlogo}>
          <ImageCustom src="/images/logo.svg" width={153} height={40} alt="" />
        </Link>
        <Link href="/" className={styles.darklogo}>
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
          <li className={styles.dropDown}>
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
          <li className={styles.dropDown}>
            <Link href="/">
              <Icons.Moredot width={4} height={14} /> More
            </Link>
            <ul className={styles.subMenu}>{renderMoreItemsMenu()}</ul>
          </li>
        </ul>
      </nav>
      <div className={styles.headerRight}>
        <div className={styles.modeBtn}>
          <Button variant="default" onClick={() => setTheme(!theme)}>
            {theme ? <Icons.Darkmode size={30} /> : <Icons.moon size={15} />}
          </Button>
        </div>
        <Button variant="blueBtn" className={styles.headerBtn} size="sm">
          Estimate Project
        </Button>

        <div className={isActive ? styles.activeHumburger : null}>
          <Button
            variant="defualt"
            className={styles.navHamburger}
            onClick={toggleClass}
          >
            <span></span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
