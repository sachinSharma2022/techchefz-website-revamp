"use client";

import React, { useEffect, useState } from "react";
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
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };

  const [header, setHeader] = useState("header");

  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      return setHeader("header-transparent");
    } else if (window.scrollY > 70) {
      return setHeader("header-white");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  // const multiRedirection = [
  //   {
  //     id: "1",
  //     title: "CMS",
  //     href: "#",
  //     para: "Be a partner for industry verticals on the inevitable journey towards enterprise.",
  //   },
  //   {
  //     id: "2",
  //     title: "Commerce",
  //     href: "#",
  //     para: "Be a partner for industry verticals on the inevitable journey towards enterprise.",
  //   },
  //   {
  //     id: "3",
  //     title: "Microservices",
  //     href: "#",
  //     para: "Be a partner for industry verticals on the inevitable journey towards enterprise.",
  //   },
  //   {
  //     id: "4",
  //     title: "Cloud & DevSecOps",
  //     href: "#",
  //     para: "Be a partner for industry verticals on the inevitable journey towards enterprise.",
  //   },
  //   {
  //     id: "5",
  //     title: "Data Intelligence",
  //     href: "#",
  //     para: "Be a partner for industry verticals on the inevitable journey towards enterprise.",
  //   },
  //   {
  //     id: "6",
  //     title: "Custom Development",
  //     href: "#",
  //     para: "Be a partner for industry verticals on the inevitable journey towards enterprise.",
  //   },
  //   {
  //     id: "7",
  //     title: "Analytics Automation",
  //     href: "",
  //     para: "Be a partner for industry verticals on the inevitable journey towards enterprise.",
  //   },
  // ];

  function LatestTech() {
    return (
      <div className={cn(styles.latestTech)}>
        <h1>Latest from technology</h1>
        <Link href="/" className={styles.imageTech}>
          <div className={styles.imgBox}>
            <ImageCustom
              src="/images/img/nav-img.png"
              width={300}
              height={300}
              alt="nav-image"
            />
          </div>
          <div className={styles.infoBox}>
            <p className={styles.description}>
              Learn more about the latest Drupal Updates
            </p>
            <Icons.ArrowRight size={16} />
          </div>
        </Link>
        <div className={styles.imageTech}>
          <div className={styles.infoBox}>
            <p className={styles.description}>
              CMS has been the game changer of 2023 website trends
            </p>
            <Icons.ArrowRight size={16} />
          </div>
        </div>
      </div>
    );
  }

  function OverTech() {
    return (
      <div className={styles.overviewFlex}>
        <div className={styles.overviewSubFlex}>
          <div>
            <Icons.PerformanceIcon width={56} height={56} />
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
    );
  }

  return (
    <header
      className={cn(
        styles.headerMain,
        theme ? styles.headerDarkStyle : "",
        header
      )}
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
            <li className={styles.menuItem}>
              <Link
                href="/about"
                className={pathname == "/about" ? styles.active : ""}
              >
                About Us
              </Link>
            </li>
            <li className={styles.menuItem}>
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
              <ul className={cn(styles.subMenu)}>
                <section className={styles.subsection}>
                  {LatestTech()}

                  <div className={cn(styles.overviewTech)}>
                    {OverTech()}
                    <div className={cn(styles.multiHrefs)}>
                      <div className="row">
                        <div className="col-sm-6">
                          <Link
                            href="/technology/cms"
                            className={cn(styles.hrefInnerFlex)}
                          >
                            <div className={styles.head}>
                              <h4 className={styles.linkTitle}>CMS</h4>
                              <Icons.ArrowForward />
                            </div>
                            <p className={styles.excepPara}>
                              Be a partner for industry verticals on the
                              inevitable journey towards enterprise.
                            </p>
                          </Link>
                          <Link href="/" className={cn(styles.hrefInnerFlex)}>
                            <div className={styles.head}>
                              <h4 className={styles.linkTitle}>Commerce</h4>
                              <Icons.ArrowForward />
                            </div>
                            <p className={styles.excepPara}>
                              Be a partner for industry verticals on the
                              inevitable journey towards enterprise.
                            </p>
                          </Link>
                          <Link href="/" className={cn(styles.hrefInnerFlex)}>
                            <div className={styles.head}>
                              <h4 className={styles.linkTitle}>
                                Microservices
                              </h4>
                              <Icons.ArrowForward />
                            </div>
                            <p className={styles.excepPara}>
                              Be a partner for industry verticals on the
                              inevitable journey towards enterprise.
                            </p>
                          </Link>
                          <Link href="/" className={cn(styles.hrefInnerFlex)}>
                            <div className={styles.head}>
                              <h4 className={styles.linkTitle}>
                                Cloud & DevSecOps
                              </h4>
                              <Icons.ArrowForward />
                            </div>
                            <p className={styles.excepPara}>
                              Be a partner for industry verticals on the
                              inevitable journey towards enterprise.
                            </p>
                          </Link>
                        </div>

                        <div className="col-sm-6">
                          <Link href="/" className={cn(styles.hrefInnerFlex)}>
                            <div className={styles.head}>
                              <h4 className={styles.linkTitle}>
                                Data Intelligence
                              </h4>
                              <Icons.ArrowForward />
                            </div>
                            <p className={styles.excepPara}>
                              Be a partner for industry verticals on the
                              inevitable journey towards enterprise.
                            </p>
                          </Link>
                          <Link href="/" className={cn(styles.hrefInnerFlex)}>
                            <div className={styles.head}>
                              <h4 className={styles.linkTitle}>
                                Custom Development
                              </h4>
                              <Icons.ArrowForward />
                            </div>
                            <p className={styles.excepPara}>
                              Be a partner for industry verticals on the
                              inevitable journey towards enterprise.
                            </p>
                          </Link>
                          <Link href="/" className={cn(styles.hrefInnerFlex)}>
                            <div className={styles.head}>
                              <h4 className={styles.linkTitle}>
                                Analytics Automation
                              </h4>
                              <Icons.ArrowForward />
                            </div>
                            <p className={styles.excepPara}>
                              Be a partner for industry verticals on the
                              inevitable journey towards enterprise.
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </ul>
            </li>
            <li className={styles.menuItem}>
              <Link
                href="/portfolio"
                className={pathname == "/portfolio" ? styles.active : ""}
              >
                Portfolio
              </Link>
            </li>
            <li className={styles.dropDown}>
              <Link href="/">
                <Icons.MoreDotIcon width={4} height={14} /> More
              </Link>
              <ul className={cn(styles.subMenu, styles.singleLayout)}>
                <div className={styles.subsection}>
                  {LatestTech()}
                  <div className={cn(styles.overviewTech)}>
                    <div className={cn(styles.multiHrefs)}>
                      <div className="row">
                        <div className="col-sm-12">
                          <Link
                            href="/careers"
                            className={cn(styles.hrefInnerFlex)}
                          >
                            <div className={styles.head}>
                              <h4 className={styles.linkTitle}>Careers</h4>
                              <Icons.ArrowForward />
                            </div>
                            <p className={styles.excepPara}>
                              Be a partner for industry verticals on the
                              inevitable journey towards enterprise.
                            </p>
                          </Link>
                          <Link
                            href="/insights"
                            className={cn(styles.hrefInnerFlex)}
                          >
                            <div className={styles.head}>
                              <h4 className={styles.linkTitle}>Insights</h4>
                              <Icons.ArrowForward />
                            </div>
                            <p className={styles.excepPara}>
                              Be a partner for industry verticals on the
                              inevitable journey towards enterprise.
                            </p>
                          </Link>
                          <Link
                            href="/coe"
                            className={cn(styles.hrefInnerFlex)}
                          >
                            <div className={styles.head}>
                              <h4 className={styles.linkTitle}>
                                Centre of Excellence
                              </h4>
                              <Icons.ArrowForward />
                            </div>
                            <p className={styles.excepPara}>
                              Be a partner for industry verticals on the
                              inevitable journey towards enterprise.
                            </p>
                          </Link>
                          <Link href="/" className={cn(styles.hrefInnerFlex)}>
                            <div className={styles.head}>
                              <h4 className={styles.linkTitle}>Accelerators</h4>
                              <Icons.ArrowForward />
                            </div>
                            <p className={styles.excepPara}>
                              Be a partner for industry verticals on the
                              inevitable journey towards enterprise.
                            </p>
                          </Link>
                          <Link
                            href="/contact-us"
                            className={cn(styles.hrefInnerFlex)}
                          >
                            <div className={styles.head}>
                              <h4 className={styles.linkTitle}>Contact us</h4>
                              <Icons.ArrowForward />
                            </div>
                            <p className={styles.excepPara}>
                              Be a partner for industry verticals on the
                              inevitable journey towards enterprise.
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
          <Button variant={theme?"blueBtnDark":"blueBtn"} className={styles.headerBtn} size="sm">
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
