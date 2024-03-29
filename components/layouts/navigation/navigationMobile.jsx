"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { base_Uri } from "@/lib/constants";

import styles from "./style.module.scss";
import AnimatedLogo from "@/components/common/animatedLogo";

const NavigationMobile = ({ props, featureArticle }) => {
  const pathname = usePathname();
  const [mobileMenuShow, setMobileMenuShow] = useState(false);
  const [isTechMenu, setTechMenu] = useState(null);
  const [isMoreMenu, setMoreMenu] = useState(null);

  const { theme, setTheme } = useContext(MyContext);
  const [isScrolled, setIsScrolled] = useState(false);

  const feartureTech = featureArticle.filter(
    (data) => data?.attributes?.InsightOverview[0]?.TechMenuFeatured == true
  );

  const feartureMore = featureArticle.filter(
    (data) => data?.attributes?.InsightOverview[0]?.MoreMenuFeatured == true
  );

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

  function EstimateSection() {
    return (
      <div className={styles.estimateSection}>
        <p className={styles.description}>
          {props[5]?.DropDown[0]?.Description}
        </p>
        <Link href={props[5]?.Link}>
          <Button
            variant={theme ? "blueBtnDark" : "blueBtn"}
            className={styles.headerBtn}
            onClick={closeMenu}
            size="lg"
          >
            {props[5]?.Title}
          </Button>
        </Link>
      </div>
    );
  }

  const mobileMenuToggle = () => {
    setMobileMenuShow(!mobileMenuShow);
    setTechMenu(null);
    setMoreMenu(null);
  };

  const closeMenu = () => {
    setMobileMenuShow(!mobileMenuShow);
    setTechMenu(false);
    setMoreMenu(false);
  };
  const onlycloseMenu = () => {
    setMobileMenuShow(!mobileMenuShow);
  };
  const onlycloseTechMenu = () => {
    setMobileMenuShow(!mobileMenuShow);
    setTechMenu(false);
  };
  const onlycloseMoreMenu = () => {
    setMobileMenuShow(!mobileMenuShow);
    setMoreMenu(false);
  };

  const technologyToggle = () => {
    setTechMenu(true);
  };
  function LatestTech(feartureArray) {
    return (
      <div className={cn(styles.latestTech)}>
        <h1>{props[2]?.DropDown[8]?.Title}</h1>
        <div className={styles.latestTechCard}>
          <Link
            href={`/insights/${feartureArray[0].id}`}
            className={styles.imageTech}
            onClick={closeMenu}
          >
            <div className={styles.imgBox}>
              <ImageCustom
                src={
                  feartureArray[0]?.attributes?.InsightOverview[0]?.Image?.data
                    ?.attributes?.url
                    ? `${base_Uri}${feartureArray[0]?.attributes?.InsightOverview[0]?.Image?.data?.attributes?.url}`
                    : `${base_Uri}/`
                }
                width={300}
                height={300}
                alt="nav-image"
              />
            </div>
            <div className={styles.infoBox}>
              <p className={styles.description}>
                {feartureArray[0]?.attributes?.InsightOverview[0].Title}
              </p>
              <Icons.ArrowRight size={16} />
            </div>
          </Link>
          <Link href={`/insights/${feartureArray[1].id}`} onClick={closeMenu}>
            <div className={styles.imageTech}>
              <div className={styles.infoBox}>
                <p className={styles.description}>
                  {feartureArray[1]?.attributes?.InsightOverview[0].Title}
                </p>
                <Icons.ArrowRight size={16} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }

  function OverTech() {
    return (
      <div className={styles.overviewFlex}>
        <div className={styles.overviewSubFlex}>
          <div>
            <ImageCustom
              src={
                props[2]?.DropDown[0]?.Image?.data?.attributes?.url
                  ? `${base_Uri}${props[2]?.DropDown[0]?.Image?.data?.attributes?.url}`
                  : `${base_Uri}/`
              }
              width={56}
              height={56}
              alt="nav-image"
            />
          </div>
          <div className={styles.overviewTitle}>
            <h1>{props[2]?.DropDown[0]?.Title}</h1>
            <p
              dangerouslySetInnerHTML={{
                __html: `${props[2]?.DropDown[0]?.Description}`,
              }}
            ></p>
          </div>
        </div>
        <div className={styles.overviewBtn}>
          <Link href={props[2]?.DropDown[0]?.Links}>
            <Button onClick={closeMenu} variant="outline" size="sm">
              Overview <Icons.ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  console.log(mobileMenuShow, "mobileMenuShow");
  return (
    <header
      className={cn(
        styles.headerMain,
        styles.headerMobile,
        theme ? styles.headerDarkStyle : "",
        theme
          ? isScrolled && styles.headerDark
          : isScrolled && styles.headerLight
      )}
    >
      <div
        data-lenis-prevent
        className={cn(styles.headerContainer, "primary-container")}
      >
        <AnimatedLogo />
        <nav className={mobileMenuShow ? styles.showNav : styles.hideNav}>
          <h4 className={styles.mobileTitle}>Menu</h4>
          <ul>
            <li className={styles.menuItem}>
              <Link
                href={props[0]?.Link}
                onClick={onlycloseMenu}
                className={pathname == "/about" ? styles.active : ""}
              >
                {props[0]?.Title}
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link
                href={props[1]?.Link}
                onClick={onlycloseMenu}
                className={pathname == "/solutions" ? styles.active : ""}
              >
                {props[1]?.Title}
              </Link>
            </li>
            <li className={styles.dropDown}>
              <button
                className={cn(styles.linkButton)}
                onClick={technologyToggle}
              >
                {props[2]?.Title} <div className={styles.arrow} />
              </button>

              <ul
                className={cn(
                  styles.subMenu,
                  isTechMenu === true
                    ? styles.slideIn
                    : isTechMenu != null
                    ? styles.slideOut
                    : ""
                )}
              >
                <section className={styles.subsection}>
                  <button
                    className={styles.backButton}
                    onClick={() => setTechMenu(false)}
                  >
                    <Icons.ArrowLeft />
                    Go Back
                  </button>
                  <div className={cn(styles.overviewTech)}>
                    {OverTech()}
                    <div className={cn(styles.multiHrefs)}>
                      <div className="row">
                        <div className="col-sm-6">
                          <Link
                            href={props[2]?.DropDown[1]?.Links}
                            onClick={onlycloseTechMenu}
                            className={cn(styles.hrefInnerFlex)}
                          >
                            <div className={styles.head}>
                              <h4 className={styles.linkTitle}>
                                {props[2]?.DropDown[1]?.Title}
                              </h4>
                              <Icons.ArrowForward />
                            </div>
                            <p className={styles.excepPara}>
                              {props[2]?.DropDown[1]?.Description}
                            </p>
                          </Link>
                          <Link
                            href={props[2]?.DropDown[2]?.Links}
                            onClick={onlycloseTechMenu}
                            className={cn(styles.hrefInnerFlex)}
                          >
                            <div className={styles.head}>
                              <h4 className={styles.linkTitle}>
                                {props[2]?.DropDown[2]?.Title}
                              </h4>
                              <Icons.ArrowForward />
                            </div>
                            <p className={styles.excepPara}>
                              {props[2]?.DropDown[2]?.Description}
                            </p>
                          </Link>
                          <Link
                            href={props[2]?.DropDown[3]?.Links}
                            onClick={onlycloseTechMenu}
                            className={cn(styles.hrefInnerFlex)}
                          >
                            <div className={styles.head}>
                              <h4 className={styles.linkTitle}>
                                {props[2]?.DropDown[3]?.Title}
                              </h4>
                              <Icons.ArrowForward />
                            </div>
                            <p className={styles.excepPara}>
                              {props[2]?.DropDown[3]?.Description}
                            </p>
                          </Link>
                          <Link
                            href={props[2]?.DropDown[4]?.Links}
                            onClick={onlycloseTechMenu}
                            className={cn(styles.hrefInnerFlex)}
                          >
                            <div className={styles.head}>
                              <h4 className={styles.linkTitle}>
                                {props[2]?.DropDown[4]?.Title}
                              </h4>
                              <Icons.ArrowForward />
                            </div>
                            <p className={styles.excepPara}>
                              {props[2]?.DropDown[4]?.Description}
                            </p>
                          </Link>
                        </div>

                        <div className="col-sm-6">
                          <Link
                            href={props[2]?.DropDown[5]?.Links}
                            className={cn(styles.hrefInnerFlex)}
                            onClick={onlycloseTechMenu}
                          >
                            <div className={styles.head}>
                              <h4 className={styles.linkTitle}>
                                {props[2]?.DropDown[5]?.Title}
                              </h4>
                              <Icons.ArrowForward />
                            </div>
                            <p className={styles.excepPara}>
                              {props[2]?.DropDown[5]?.Description}
                            </p>
                          </Link>
                          <Link
                            href={props[2]?.DropDown[6]?.Links}
                            className={cn(styles.hrefInnerFlex)}
                            onClick={onlycloseTechMenu}
                          >
                            <div className={styles.head}>
                              <h4 className={styles.linkTitle}>
                                {props[2]?.DropDown[6]?.Title}
                              </h4>
                              <Icons.ArrowForward />
                            </div>
                            <p className={styles.excepPara}>
                              {props[2]?.DropDown[6]?.Description}
                            </p>
                          </Link>
                          <Link
                            href={props[2]?.DropDown[7]?.Links}
                            className={cn(styles.hrefInnerFlex)}
                            onClick={onlycloseTechMenu}
                          >
                            <div className={styles.head}>
                              <h4 className={styles.linkTitle}>
                                {props[2]?.DropDown[7]?.Title}
                              </h4>
                              <Icons.ArrowForward />
                            </div>
                            <p className={styles.excepPara}>
                              {props[2]?.DropDown[7]?.Description}
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {LatestTech(feartureTech)}
                </section>
              </ul>
            </li>
            <li className={styles.menuItem}>
              <Link
                href={props[3].Link}
                onClick={onlycloseMenu}
                className={pathname == "/portfolio" ? styles.active : ""}
              >
                {props[3].Title}
              </Link>
            </li>
            <li className={styles.dropDown}>
              <button
                className={styles.linkButton}
                onClick={() => setMoreMenu(true)}
              >
                <Icons.MoreDotIcon
                  className={styles.dotIcon}
                  width={4}
                  height={14}
                />
                {props[4]?.Title}
                <div className={cn(styles.arrow, styles.hideDesktopIcon)} />
              </button>

              <ul
                className={cn(
                  styles.subMenu,
                  isMoreMenu === true
                    ? styles.slideIn
                    : isMoreMenu != null
                    ? styles.slideOut
                    : ""
                )}
              >
                <div className={styles.subsection}>
                  <button
                    className={styles.backButton}
                    onClick={() => setMoreMenu(false)}
                  >
                    <Icons.ArrowLeft />
                    Go Back
                  </button>

                  <div className={cn(styles.overviewTech)}>
                    <div className={cn(styles.multiHrefs)}>
                      <div className="row">
                        <div className="col-sm-12">
                          <Link
                            href={props[4]?.DropDown[0]?.Links}
                            onClick={onlycloseMoreMenu}
                            className={cn(styles.hrefInnerFlex)}
                          >
                            <div className={styles.head}>
                              <h4 className={styles.linkTitle}>
                                {props[4]?.DropDown[0]?.Title}
                              </h4>
                              <Icons.ArrowForward />
                            </div>
                            <p className={styles.excepPara}>
                              {props[4]?.DropDown[0]?.Description}
                            </p>
                          </Link>
                          <Link
                            href={props[4]?.DropDown[1]?.Links}
                            onClick={onlycloseMoreMenu}
                            className={cn(styles.hrefInnerFlex)}
                          >
                            <div className={styles.head}>
                              <h4 className={styles.linkTitle}>
                                {props[4]?.DropDown[1]?.Title}
                              </h4>
                              <Icons.ArrowForward />
                            </div>
                            <p className={styles.excepPara}>
                              {props[4]?.DropDown[1]?.Description}
                            </p>
                          </Link>
                          <Link
                            href={props[4]?.DropDown[2]?.Links}
                            onClick={onlycloseMoreMenu}
                            className={cn(styles.hrefInnerFlex)}
                          >
                            <div className={styles.head}>
                              <h4 className={styles.linkTitle}>
                                {props[4]?.DropDown[2]?.Title}
                              </h4>
                              <Icons.ArrowForward />
                            </div>
                            <p className={styles.excepPara}>
                              {props[4]?.DropDown[2]?.Description}
                            </p>
                          </Link>
                          <Link
                            href={props[4]?.DropDown[4]?.Links}
                            onClick={onlycloseMoreMenu}
                            className={cn(styles.hrefInnerFlex)}
                          >
                            <div className={styles.head}>
                              <h4 className={styles.linkTitle}>
                                {" "}
                                {props[4]?.DropDown[4]?.Title}
                              </h4>
                              <Icons.ArrowForward />
                            </div>
                            <p className={styles.excepPara}>
                              {props[4]?.DropDown[4]?.Description}
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {LatestTech(feartureMore)}
                </div>
              </ul>
            </li>
          </ul>

          <div>{EstimateSection()}</div>
        </nav>
        <div className={styles.headerRight}>
          <div className={styles.modeBtn}>
            <button
              variant="default"
              onClick={() => setTheme(!theme)}
              aria-label="Switch Theme"
              title="Switch Theme"
            >
              {theme ? (
                <Icons.DarkThemeIcon size={30} />
              ) : (
                <Icons.Moon size={15} />
              )}
            </button>
          </div>

          <Link href={props[5]?.Link}>
            <Button
              variant={theme ? "blueBtnDark" : "blueBtn"}
              className={styles.headerBtn}
              size="sm"
            >
              {props[5]?.Title}
            </Button>
          </Link>

          <button
            className={cn(
              styles.navHamburger,
              mobileMenuShow ? styles.toggleActive : ""
            )}
            aria-label="menu"
            title="menu"
            onClick={mobileMenuToggle}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavigationMobile;
