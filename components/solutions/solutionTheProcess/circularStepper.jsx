import React from "react";
import { ImageCustom } from "@/components/ui/imageCustom";

const CircularStepper = ({ className }) => {
  return (
    <div className="circularStepper">
      <div className="stepperImg">
        <ImageCustom
          src="/images/shield.png"
          width={213}
          height={219}
          alt="bannerImg"
        />
      </div>
      <span className="one">01</span>
      <span className="two">02</span>
      <span className="three">03</span>
      <span className="four">04</span>
      <span className="five">05</span>
      <span className="six">06</span>
    </div>
  );
};

export default CircularStepper;
