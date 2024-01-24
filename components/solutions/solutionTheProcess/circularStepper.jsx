import React from "react";
import { ImageCustom } from "@/components/ui/imageCustom";

const CircularStepper = ({ activeIndex, totalSteps, circleWidth }) => {
  const radius = 195;
  const percentage = (activeIndex / (totalSteps)) * 100;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;
  return (
    <div className="circularStepper" >
      <svg
        width={circleWidth}
        height={circleWidth}
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
      >
        <defs>
          <linearGradient
            id="progressGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" style={{ stopColor: "#1E8AF2" }} />
            <stop offset="100%" style={{ stopColor: "#05BED7" }} />
          </linearGradient>
          
        </defs>
        
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="10px"
          r={radius}
          className="circle-background"
          filter="url(#inset-shadow)"
        />
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="10px"
          r={radius}
          className="circle-progress"
          style={{
            stroke: "url(#progressGradient)",
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
          transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
        />
        
      </svg>

      <div className="stepperImg">
        <ImageCustom
          src="/images/shield.png"
          width={200}
          height={200}
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
