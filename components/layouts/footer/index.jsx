import React from "react";
import { ImageCustom } from "@/components/ui/imageCustom";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import InputCustom from "@/components/ui/inputCustom";
import ScrollToTopButton from "@/components/ui/scrollToTopButton";
import styles from "./style.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footLogoFlex}>
        <div className={styles.footlogo}>
          <ImageCustom
            src="/images/logo-white.svg"
            width={143}
            height={48}
            alt=""
          />
        </div>
        <ScrollToTopButton />
      </div>

      <div className="row">
        <div className="col-md-12 col-lg-6">
          <div className={styles.footLeftPanel}>
            <p>
              Stay at the forefront of innovation, trends, and industry insights
              by subscribing to our newsletter.
            </p>

            <div className={styles.partenerCard}>
              <div className={styles.partnerCols}>
                <Link href="/">
                  Become our Partner <Icons.ArrowRight size={16} />
                </Link>
                <p>Join our partnership network now!</p>
              </div>
              <ImageCustom
                src="/images/partner.jpg"
                width={294}
                height={198}
                alt=""
              />
            </div>

            <div className={styles.subscribe}>
              <h4 className="mb-3">Stay Ahead of the Tech Curve</h4>
              <div className={styles.formFlex}>
                <InputCustom placeholder="Business Email Address" />
                <div className="d-flex align-items-center">
                  <Button variant="ligthBlueBtn" size="lg">
                    Subscribe <Icons.ArrowRight size={20} className="ms-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-lg-6">
          <div className={styles.footSocial}>
            <h4 className="mb-3">Follow Us on Social Media</h4>
            <Link href="/">
              <Icons.facebook size={16} /> <span>Linkedin</span>
            </Link>
            <Link href="/">
              <Icons.linkedin size={16} /> <span>Facebook</span>
            </Link>
            <Link href="/">
              <Icons.twitter size={16} /> <span>Twitter</span>
            </Link>
          </div>

          <div className={styles.footerBox}>
            <div className={styles.footerCols}>
              <ul>
                <h5>
                  <Link href="/">About us</Link>
                </h5>
                <h5>
                  <Link href="/">Solutions</Link>
                </h5>
                <h5>
                  <Link href="/">Portfolio</Link>
                </h5>
                <h5>
                  <Link href="/">Contact Us</Link>
                </h5>
              </ul>
            </div>
            <div className={styles.footerCols}>
              <h5>Technology</h5>
              <ul>
                <li>
                  <Link href="/">CMS</Link>
                </li>
                <li>
                  <Link href="/">Commerce</Link>
                </li>
                <li>
                  <Link href="/">Microservices</Link>
                </li>
                <li>
                  <Link href="/">Cloud & DevSecOps</Link>
                </li>
                <li>
                  <Link href="/">Data Intelligence</Link>
                </li>
                <li>
                  <Link href="/">Analysis Automation</Link>
                </li>
              </ul>
            </div>
            <div className={styles.footerCols}>
              <h5>More</h5>
              <ul>
                <li>
                  <Link href="/">Careers</Link>
                </li>
                <li>
                  <Link href="/">Insights</Link>
                </li>
                <li>
                  <Link href="/">Center of Excellence</Link>
                </li>
                <li>
                  <Link href="/">Accelerators</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footCopyright}>
        <p>© 2023 TCZ Digital Pvt. Ltd. All rights reserved.</p>

        <ul>
          <li>
            <Link href="/">Terms of Use</Link>
          </li>
          <li>
            <Link href="/">Security</Link>
          </li>
          <li>
            <Link href="/">Privacy Policy</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
