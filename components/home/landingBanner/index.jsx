"use client";
import React, { useEffect, useState, useRef } from "react";
import ReactTextTransition from "react-text-transition";
// import { Button } from "../../ui/button";
import { Icons } from "@/components/icons";
import styles from "./style.module.scss";
import styled, { keyframes } from "styled-components";

const texts = ["Through Data", "Through Connectivity", "Through Data2"];
const explodeAnimation = keyframes`
0% {
  width: 0px;
  height: 0px;
  margin-left: 0px;
  margin-top: 0px;
  background-color: rgba(42, 53, 80,0.2);
}
100% {
  width: 400px;
  height: 400px;
  margin-left: -200px;
  margin-top: -200px;
  background-color: #26A0F8;
}
`;

const desplodeAnimation = keyframes`
0% {
  width: 400px;
  height: 400px;
  margin-left: -200px;
  margin-top: -200px;
  background-color: #26A0F8;
}
100% {
  width: 0px;
  height: 0px;
  margin-left: 10px;
  margin-top: 10px;
  background-color: #26A0F8;
}
`;

export const ButtonSu = styled.div`
  overflow: hidden;
  position: relative;
  display: inline-block;
  border-radius: 0.75rem;
  margin-bottom: 30px;
`;

export const SuButtonCircle = styled.span`
  background-color: red;
  border-radius: 0.75rem;
  position: absolute;
  left: 0;
  top: 0;
  width: 0px;
  height: 0px;
  pointer-events: none;
  animation: ${({ explode }) =>
      explode ? explodeAnimation : desplodeAnimation}
    0.6s forwards;
`;

export const ButtonSuInner = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #06c;
  color: #fff;
  font-size: 1.25rem;
  font-weight: 500;
  width: 100%;
  text-align: center;
  transition: 400ms;
  text-decoration: none;
  z-index: 100000;
  height: 3.75rem;
  padding: 0px 2rem;
  border-radius: 0.75rem;
`;

export const ButtonTextContainer = styled.span`
  position: relative;
  z-index: 10000;
`;
const LandingBanner = () => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const [explode, setExplode] = useState(false);
  const [circlePosition, setCirclePosition] = useState({ left: 0, top: 0 });

  const handleMouseEnter = () => {
    setExplode(true);
  };

  const handleMouseLeave = () => {
    setExplode(false);
  };

  const handleMouseMove = (e) => {
    const parentOffset = e.currentTarget.getBoundingClientRect();
    const relX = e.clientX - parentOffset.left;
    const relY = e.clientY - parentOffset.top;

    setCirclePosition({ left: relX, top: relY });
  };
  return (
    <section className={`${styles.landingBannerStyle}`}>
      <div>
        <h1 className={styles.title}>
          Humanizing <div /> Digital Experience <div />

          <div className={styles.slider}>
            <div className={styles.text1}>THROUGH DATA</div>
            <div class="text2">THROUGH CONNECTIVITY</div>
            <div class="text3">THROUGH WORK</div>
          </div>

        </h1>
      </div>

      <div>
        <ButtonSu>
          <SuButtonCircle
            explode={explode}
            style={{ left: circlePosition.left, top: circlePosition.top }}
          ></SuButtonCircle>
          <ButtonSuInner
            href="#"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
          >
            <ButtonTextContainer>
              Let’s Work Together <Icons.ArrowRight size={18} />
            </ButtonTextContainer>
          </ButtonSuInner>
        </ButtonSu>
      </div>
    </section>
  );
};

export default LandingBanner;
