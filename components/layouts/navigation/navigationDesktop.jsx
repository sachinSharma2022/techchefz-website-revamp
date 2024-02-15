"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";

import styles from "./style.module.scss";

const NavigationDesktop = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useContext(MyContext);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
            <Icons.MarketPlace width={56} height={56} />
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
        styles.headerMainDesktop,
        theme ? styles.headerDarkStyle : "",
        theme
          ? isScrolled && styles.headerDark
          : isScrolled && styles.headerLight
      )}
    >
      <div className={cn(styles.headerContainer, "primary-container")}>
        <div className={styles.logo}>
          <Link href="/" className={styles.lightLogo}>
            <ImageCustom
              src="/images/logo.svg"
              width={153}
              height={40}
              alt="header-logo"
            />
          </Link>
          <Link href="/" className={styles.darkLogo}>
            <ImageCustom
              src="/images/white-logo.svg"
              width={153}
              height={40}
              alt="dark-logo"
            />
          </Link>
        </div>
        <nav>
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
                          <Link href="/technology/commerce" className={cn(styles.hrefInnerFlex)}>
                            <div className={styles.head}>
                              <h4 className={styles.linkTitle}>Commerce</h4>
                              <Icons.ArrowForward />
                            </div>
                            <p className={styles.excepPara}>
                              Be a partner for industry verticals on the
                              inevitable journey towards enterprise.
                            </p>
                          </Link>
                          <Link href="/technology/microservices" className={cn(styles.hrefInnerFlex)}>
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
                          <Link href="/technology/cloud-devsec-ops" className={cn(styles.hrefInnerFlex)}>
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
                          <Link href="/technology/data-intelligence" className={cn(styles.hrefInnerFlex)}>
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
                          <Link href="/technology/custom-development" className={cn(styles.hrefInnerFlex)}>
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
                          <Link href="/technology/analytics-automation" className={cn(styles.hrefInnerFlex)}>
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
                <Icons.MoreDotIcon
                  className={styles.dotIcon}
                  width={4}
                  height={14}
                />
                More
                <div className={cn(styles.arrow, styles.hideDesktopIcon)} />
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
                          <Link
                            href="/accelerators"
                            className={cn(styles.hrefInnerFlex)}
                          >
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
            <button variant="default" onClick={() => setTheme(!theme)}>
              {theme ? (
                <Icons.DarkThemeIcon size={30} />
              ) : (
                <Icons.Moon size={15} />
              )}
            </button>
          </div>
          <Link
            href="/contact-us">
            <Button
              variant={theme ? "blueBtnDark" : "blueBtn"}
              className={styles.headerBtn}
              size="sm"
            >
              Estimate Project
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavigationDesktop;
