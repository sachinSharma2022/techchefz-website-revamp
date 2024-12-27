"use client";

import AnimatedLogo from "@/components/common/animatedLogo";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ImageCustom } from "@/components/ui/imageCustom";
import { MyContext } from "@/context/theme";
import { base_Uri } from "@/lib/constants";
import { cn, generateSlug } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import styles from "./style.module.scss";

const NavigationDesktop = ({ props, featureArticle }) => {
  const pathname = usePathname();
  const { theme, setTheme } = useContext(MyContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuShow, setMobileMenuShow] = useState(false);
  const [isSubMenu, setisSubhMenu] = useState(true);

  const feartureTech = featureArticle.filter(
    (data) => data?.attributes?.InsightOverview[0]?.TechMenuFeatured == true
  );

  const feartureMore = featureArticle.filter(
    (data) => data?.attributes?.InsightOverview[0]?.MoreMenuFeatured == true
  );

  const solutionMore = featureArticle.filter(
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

  const closeMenu = () => {
    setMobileMenuShow(!mobileMenuShow);

    setisSubhMenu(false);
  };
  const openMenu = () => {
    setMobileMenuShow(!mobileMenuShow);

    setisSubhMenu(true);
  };

  function LatestTech(feartureArray) {
    return (
      <>
        <div className={cn(styles.latestTech)}>
          <h3 className={styles.title}>{props[2]?.DropDown[8]?.Title}</h3>
          <Link
            href={`/insights/${generateSlug(
              feartureArray[0]?.attributes?.InsightOverview[0].Title
            )}`}
            className={styles.imageTech}
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
                alt={
                  feartureArray[0]?.attributes?.InsightOverview[0]?.Image?.data
                    ?.attributes?.alternativeText
                }
              />
            </div>
            <div className={styles.infoBox}>
              <p className={styles.description}>
                {feartureArray[0]?.attributes?.InsightOverview[0].Title}
              </p>
              <Icons.ArrowRight size={16} />
            </div>
          </Link>
          <Link
            href={`/insights/${generateSlug(
              feartureArray[1]?.attributes?.InsightOverview[0].Title
            )}`}
          >
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
      </>
    );
  }

  function SolutionTech(feartureArray) {
    return (
      <>
        <div className={cn(styles.latestTech)}>
          <h3 className={styles.title}>{props[2]?.DropDown[8]?.Title}</h3>
          <Link
            href={`/insights/${generateSlug(
              feartureArray[0]?.attributes?.InsightOverview[0].Title
            )}`}
            className={styles.imageTech}
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
                alt={
                  feartureArray[0]?.attributes?.InsightOverview[0]?.Image?.data
                    ?.attributes?.alternativeText
                }
              />
            </div>
            <div className={styles.infoBox}>
              {feartureArray[0]?.attributes?.InsightOverview[0].Title}
              <Icons.ArrowRight size={16} />
            </div>
          </Link>
          <Link
            href={`/insights/${generateSlug(
              feartureArray[1]?.attributes?.InsightOverview[0].Title
            )}`}
          >
            <div className={styles.imageTech}>
              <div className={styles.infoBox}>
                <p className={styles.description}>
                  {" "}
                  {feartureArray[1]?.attributes?.InsightOverview[0].Title}
                </p>
                <Icons.ArrowRight size={16} />
              </div>
            </div>
          </Link>
        </div>
      </>
    );
  }

  function AboutTech(feartureArray) {
    return (
      <>
        <div className={cn(styles.latestTech)}>
          <h3 className={styles.title}>{props[2]?.DropDown[8]?.Title}</h3>
          <Link
            href={`/insights/${generateSlug(
              feartureArray[0]?.attributes?.InsightOverview[0].Title
            )}`}
            className={styles.imageTech}
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
                alt={
                  feartureArray[0]?.attributes?.InsightOverview[0]?.Image?.data
                    ?.attributes?.alternativeText
                }
              />
            </div>
            <div className={styles.infoBox}>
              {feartureArray[0]?.attributes?.InsightOverview[0].Title}
              <Icons.ArrowRight size={16} />
            </div>
          </Link>
        </div>
      </>
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
              alt={
                props[2]?.DropDown[0]?.Image?.data?.attributes?.alternativeText
              }
            />
          </div>
          <div className={styles.overviewTitle}>
            <h3 className={styles.title}>{props[2]?.DropDown[0]?.Title}</h3>
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
        <AnimatedLogo />
        <nav>
          <ul>
            <li className={styles.dropDown} onMouseEnter={openMenu}>
              <Link
                href={props[0].Link}
                className={pathname == "/about" ? styles.active : ""}
              >
                {props[0].Title} <div className={styles.arrow} />
              </Link>

              <ul
                className={cn(
                  styles.subMenu,
                  styles.singleLayout,
                  !isSubMenu && styles.subMenuHide
                )}
              >
                <div className={cn(styles.subsection, styles.solutionSection)}>
                  {AboutTech(solutionMore)}
                  <div className={cn(styles.overviewTech, styles.aboutTech)}>
                    <div className={cn(styles.multiHrefs)}>
                      <div className="row">
                        <div className="col-sm-12">
                          <Link
                            href="/leadership"
                            // href={props[1]?.DropDown[0]?.Links}
                            className={cn(styles.hrefInnerFlex)}
                            onClick={closeMenu}
                          >
                            <div className={styles.head}>
                              <h4 className={styles.linkTitle}>
                                Leadership
                                {/* {props[1]?.DropDown[0]?.Title} */}
                              </h4>
                              <Icons.ArrowForward />
                            </div>
                            <p className={styles.excepPara}>
                              {props[1]?.DropDown[0]?.Description}
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ul>
            </li>

            <li className={styles.dropDown} onMouseEnter={openMenu}>
              <Link
                href={props[1].Link}
                className={pathname == "/solutions" ? styles.active : ""}
              >
                {props[1].Title} <div className={styles.arrow} />
              </Link>

              <ul
                className={cn(
                  styles.subMenu,
                  styles.singleLayout,
                  !isSubMenu && styles.subMenuHide
                )}
              >
                <div className={cn(styles.subsection, styles.solutionSection)}>
                  {SolutionTech(solutionMore)}
                  <div className={cn(styles.overviewTech, styles.solutionTech)}>
                    <div className={cn(styles.multiHrefs)}>
                      <div className="row">
                        <div className="col-sm-12">
                          <Link
                            href={props[1]?.DropDown[0]?.Links}
                            className={cn(styles.hrefInnerFlex)}
                            onClick={closeMenu}
                          >
                            <div className={styles.head}>
                              <h4 className={styles.linkTitle}>
                                {props[1]?.DropDown[0]?.Title}
                              </h4>
                              <Icons.ArrowForward />
                            </div>
                            <p className={styles.excepPara}>
                              {props[1]?.DropDown[0]?.Description}
                            </p>
                          </Link>
                          <Link
                            href={props[1]?.DropDown[1]?.Links}
                            className={cn(styles.hrefInnerFlex)}
                            onClick={closeMenu}
                          >
                            <div className={styles.head}>
                              <h4 className={styles.linkTitle}>
                                {props[1]?.DropDown[1]?.Title}
                              </h4>
                              <Icons.ArrowForward />
                            </div>
                            <p className={styles.excepPara}>
                              {props[1]?.DropDown[1]?.Description}
                            </p>
                          </Link>
                          <Link
                            href={props[1]?.DropDown[2]?.Links}
                            className={cn(styles.hrefInnerFlex)}
                            onClick={closeMenu}
                          >
                            <div className={styles.head}>
                              <h4 className={styles.linkTitle}>
                                {props[1]?.DropDown[2]?.Title}
                              </h4>
                              <Icons.ArrowForward />
                            </div>
                            <p className={styles.excepPara}>
                              {props[1]?.DropDown[2]?.Description}
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ul>
            </li>

            <li className={styles.dropDown} onMouseEnter={openMenu}>
              <Link
                href={props[2].Link}
                className={pathname == "/technology" ? styles.active : ""}
              >
                {props[2].Title} <div className={styles.arrow} />
              </Link>
              <ul
                className={cn(styles.subMenu, !isSubMenu && styles.subMenuHide)}
              >
                <div className={styles.subsection}>
                  {LatestTech(feartureTech)}

                  <div className={cn(styles.overviewTech)}>
                    {OverTech()}
                    <div className={cn(styles.multiHrefs)}>
                      <div className="row">
                        <div className="col-sm-6">
                          <Link
                            href={props[2]?.DropDown[1]?.Links}
                            className={cn(styles.hrefInnerFlex)}
                            onClick={closeMenu}
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
                            className={cn(styles.hrefInnerFlex)}
                            onClick={closeMenu}
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
                            className={cn(styles.hrefInnerFlex)}
                            onClick={closeMenu}
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
                            className={cn(styles.hrefInnerFlex)}
                            onClick={closeMenu}
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
                            onClick={closeMenu}
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
                            onClick={closeMenu}
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
                          {/* <Link
                            href={props[2]?.DropDown[7]?.Links}
                            className={cn(styles.hrefInnerFlex)}
                            onClick={closeMenu}
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
                          </Link> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ul>
            </li>

            <li className={styles.menuItem}>
              <Link
                href={props[3]?.Link}
                className={pathname == "/portfolio" ? styles.active : ""}
              >
                {props[3]?.Title}
              </Link>
            </li>

            <li className={styles.dropDown} onMouseEnter={openMenu}>
              <button>
                <Icons.MoreDotIcon
                  className={styles.dotIcon}
                  width={4}
                  height={14}
                />
                {props[4].Title}
              </button>
              <div className={cn(styles.arrow, styles.hideDesktopIcon)} />

              <ul
                className={cn(
                  styles.subMenu,
                  styles.singleLayout,
                  !isSubMenu && styles.subMenuHide
                )}
              >
                <div className={styles.subsection}>
                  {LatestTech(feartureMore)}
                  <div className={cn(styles.overviewTech, styles.moreTech)}>
                    <div className={cn(styles.multiHrefs)}>
                      <div className="row">
                        <div className="col-sm-12">
                          <Link
                            href={props[4]?.DropDown[0]?.Links}
                            className={cn(styles.hrefInnerFlex)}
                            onClick={closeMenu}
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
                            className={cn(styles.hrefInnerFlex)}
                            onClick={closeMenu}
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
                            className={cn(styles.hrefInnerFlex)}
                            onClick={closeMenu}
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
                          {/* <Link
                            href={props[4]?.DropDown[3]?.Links}
                            className={cn(styles.hrefInnerFlex)}
                            onClick={closeMenu}
                          >
                            <div className={styles.head}>
                              <h4 className={styles.linkTitle}>
                                {props[4]?.DropDown[3]?.Title}
                              </h4>
                              <Icons.ArrowForward />
                            </div>
                            <p className={styles.excepPara}>
                              {props[4]?.DropDown[3]?.Description}
                            </p>
                          </Link> */}
                          <Link
                            href={props[4]?.DropDown[4]?.Links}
                            className={cn(styles.hrefInnerFlex)}
                            onClick={closeMenu}
                          >
                            <div className={styles.head}>
                              <h4 className={styles.linkTitle}>
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
                </div>
              </ul>
            </li>
          </ul>
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
        </div>
      </div>
    </header>
  );
};

export default NavigationDesktop;
