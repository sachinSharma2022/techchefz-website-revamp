"use client";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ImageCustom } from "@/components/ui/imageCustom";
import { Input, Error, Success } from "@/components/ui/inputCustom";
import ScrollToTopButton from "@/components/ui/scrollToTopButton";
import { cn } from "@/lib/utils";
import Link from "next/link";
import styles from "./style.module.scss";
import { Form, Formik, useFormik } from "formik";
import { footerValidationSchema } from "@/lib/FormSchema";
import { triggerMail } from "@/lib/triggerMail";
import AnimatedLogo from "@/components/common/animatedLogo";
import { useState } from "react";
import CircleLoader from "@/components/ui/circleLoader";
import AnimatedFooterLogo from "@/components/common/animatedFooterLogo";

const Footer = ({ props, Subscribe, SocialMedia, footerinner, Reserved }) => {
  console.log("ff", Reserved);
  const [inprogress, setinprogress] = useState(false);
  const [success, setsuccess] = useState(false);
  const formInitialSchema = {
    email: "",
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: formInitialSchema,
      validationSchema: footerValidationSchema,
      onSubmit: (values, action) => {
        console.log(values);
        setinprogress(true);
        triggerMail({
          content: JSON.stringify(values),
          formType: "Subscribe",
        });
        setTimeout(() => {
          setsuccess(true);
          action.resetForm();
          setinprogress(false);
        }, 2000);
      },
    });
  return (
    <footer className={styles.footerSection}>
      <div className={cn("primary-container")}>
        <div className={styles.footLogoFlex}>
          <AnimatedFooterLogo />
          <ScrollToTopButton />
        </div>

        <div className="row">
          <div className="col-12 col-lg-6">
            <div className={styles.footLeftPanel}>
              <p className={styles.description}>{props[0]?.Description}</p>

              {/* <Link href="/contact-us" className={styles.partnerCard}>
                <div className={styles.partnerCols}>
                  <Link href="/contact-us">
                    Become our Partner <Icons.ArrowRight size={16} />
                  </Link>
                  <p>Join our partnership network now!</p>
                </div>
                <ImageCustom
                  src="/images/partner.jpg"
                  width={294}
                  height={198}
                  alt="partner-img"
                />
              </Link> */}

              <div className={styles.subscribe}>
                <h4 className="mb-3">{Subscribe[0]?.Title}</h4>
                <Formik>
                  <Form onSubmit={handleSubmit}>
                    <div className={styles.formFlex}>
                      <Input
                        inputFloatingStyle={styles.inputFloatingStyle}
                        inputStyle={styles.inputStyle}
                        placeholder="Business Email Address"
                        id="email"
                        name="email"
                        error={Boolean(touched.email && errors.email)}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      {touched.email && errors.email && (
                        <Error>{errors.email}</Error>
                      )}
                      {success && !errors.email && (
                        <Success>{Subscribe[0]?.Link}</Success>
                      )}

                      <div className="d-flex align-items-center">
                        <Button
                          variant="blueBtnDark"
                          size="lg"
                          disabled={inprogress ? true : false}
                        >
                          {Subscribe[0]?.button}
                          {inprogress ? (
                            <CircleLoader repeatCount={1} />
                          ) : (
                            <Icons.ArrowRight size={18} />
                          )}
                        </Button>
                      </div>
                    </div>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className={styles.footSocial}>
              <h4 className="mb-3">{SocialMedia[0].Title}</h4>
              <div className={styles.footSocialLinks}>
                <Link
                  href={SocialMedia[0]?.SocialMediaInner[0]?.Link}
                  target="_blank"
                >
                  <Icons.linkedin size={16} />{" "}
                  <span>{SocialMedia[0]?.SocialMediaInner[0]?.Title}</span>
                </Link>
                <Link
                  href={SocialMedia[0]?.SocialMediaInner[1]?.Link}
                  target="_blank"
                >
                  <Icons.facebook size={16} />{" "}
                  <span>{SocialMedia[0]?.SocialMediaInner[1]?.Title}</span>
                </Link>
                <Link
                  href={SocialMedia[0]?.SocialMediaInner[2]?.Link}
                  target="_blank"
                >
                  <Icons.twitter size={16} />{" "}
                  <span>{SocialMedia[0]?.SocialMediaInner[2]?.Title}</span>
                </Link>
              </div>
            </div>

            <div className={styles.footerBox}>
              <div className={styles.footerCols}>
                <ul>
                  {footerinner[0]?.menuinner?.map((data, index) => (
                    <li key={index}>
                      <Link href={data.Link}>{data.Title}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.footerCols}>
                <h5>
                  <Link href={footerinner[1]?.Link}>
                    {footerinner[1]?.Heading}
                  </Link>
                </h5>
                <ul className={styles.fadeLink}>
                  {footerinner[1]?.menuinner?.map((data, index) => (
                    <li key={index}>
                      <Link href={data.Link}>{data.Title}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.footerCols}>
                <h5>More</h5>
                <ul className={styles.fadeLink}>
                  {footerinner[2]?.menuinner?.map((data, index) => (
                    <li key={index}>
                      <Link href={data.Link}>{data.Title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footCopyright}>
          <p>{Reserved[0].Title}</p>
          <ul>
            {Reserved[0]?.PrivacyPolicy?.map((data, index) => (
              <li key={index}>
                <Link href={data.Link}>{data.Title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
