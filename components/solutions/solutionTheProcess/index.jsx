"use client";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { ImageCustom } from "@/components/ui/imageCustom";
import { cn } from "@/lib/utils";
import styles from "./style.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const SolutionTheProcess = () => {
  const { theme, setTheme } = useContext(MyContext);
  const circleWidth=400
  const radius = 195;
  const dashArray = radius * Math.PI * 2;
  const accordionData = [
    {
      title: "Navigating Cloud Integration Complexities",
      description:
        "The push for digital transformation has led many companies to embrace cloud solutions. However, the migration and integration of legacy systems into the cloud often present challenges. ",
    },
    {
      title: "Navigating Cloud Integration Complexities",
      description:
        "The push for digital transformation has led many companies to embrace cloud solutions. However, the migration and integration of legacy systems into the cloud often present challenges. ",
    },
    {
      title: "Navigating Cloud Integration Complexities",
      description:
        "The push for digital transformation has led many companies to embrace cloud solutions. However, the migration and integration of legacy systems into the cloud often present challenges. ",
    },{
      title: "Navigating Cloud Integration Complexities",
      description:
        "The push for digital transformation has led many companies to embrace cloud solutions. However, the migration and integration of legacy systems into the cloud often present challenges. ",
    },{
      title: "Navigating Cloud Integration Complexities",
      description:
        "The push for digital transformation has led many companies to embrace cloud solutions. However, the migration and integration of legacy systems into the cloud often present challenges. ",
    },{
      title: "Navigating Cloud Integration Complexities",
      description:
        "The push for digital transformation has led many companies to embrace cloud solutions. However, the migration and integration of legacy systems into the cloud often present challenges. ",
    },
  ];
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    let ctx = gsap.context(() => 
    {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: `.${styles.headSection}`,
          scrub: 0.5,
          start: "top 11%",
          end:"bottom +=500",
      
          pin: true,
          markers:false,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
      const titles = gsap.utils.toArray(`.${styles.processCard}`)

      titles.forEach((text, i) => {
        

        gsap.to(text, {
          scrollTrigger:{
            trigger: text,
            start: "top 45%",
            end:"center 20%",
            markers: false,
            toggleActions: "play reset play reverse",
          },
          opacity: 1,
        })
        
      });
        
      // const tl_circle = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: `.${styles.processCardSection}`,
      //     scrub: 1,
      //     start: "top 45%",
      //     end:"80% 10%",
      //     markers:true,
      //     invalidateOnRefresh: true,
      //     anticipatePin: 1, 
      //   },
      // });
      // tl_circle.to(".circle-progress", {
      //   strokeDashoffset: 0
      //  })



      titles.forEach((text, i) => {
        

        gsap.to(".circle-progress", {
          scrollTrigger:{
            trigger: text,
            start: "top 45%",
            end:"bottom 20%", 
            markers: false,
            toggleActions: "complete none none none",
        
          },
          strokeDashoffset: dashArray-((dashArray/titles.length)*(i+1))
          
        })
        
      });
     
      
      
    
       
    });
    return () => ctx.revert();
  }, []);
  
  return (
    <section className={`${styles.theProcessStyle} ${theme ? styles.theProcessDark : ""}`}>
      <div className={cn("primary-container", styles.flexContainer)}>
        <div className={styles.headSection}>
          <div>
            <h6 className={styles.heading}>The Process</h6>
            <h3 className={styles.subHeading}>Dive into Our Approach</h3>
          </div>

          <div className={styles.ourNumbersImg}>
          <div className={styles.circularStepperContainer}>
          <div className="circularStepper" >
          </div>
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
            strokeDashoffset: dashArray,
          }}
          transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
        />
        
      </svg>
      {/* <svg width="470" height="510" viewBox="0 0 470 510" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="235" cy="255" r="235" fill="#F1F1F1"/>
<circle cx="235" cy="255" r="230" stroke="#111111" stroke-opacity="0.4" stroke-width="10"/>
<g filter="url(#filter0_i_1035_26193)">
<circle cx="234.5" cy="254.5" r="193.5" fill="white"/>
</g>
<g clip-path="url(#clip0_1035_26193)">
<mask id="mask0_1035_26193" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="106" y="126" width="258" height="258">
<path d="M364 126H106V384H364V126Z" fill="white"/>
</mask>
<g mask="url(#mask0_1035_26193)">
<path d="M234.539 208.652L271.856 222.002V262.336C265.908 280.508 253.668 293.305 235.138 300.727L234.539 300.965L233.939 300.727C215.409 293.305 203.169 280.508 197.221 262.336V222.002L234.539 208.652Z" fill="#111111" fill-opacity="0.2"/>
<path d="M234.586 364.786C279.648 347.165 309.356 316.508 323.741 272.788V176.693L234.585 144.918L145.43 176.693V272.788C159.689 316.125 189.003 346.626 233.401 364.318L233.399 364.317L234.586 364.786Z" stroke="#3F646B" stroke-opacity="0.2"/>
<path d="M233.755 322.087C206.5 311.226 188.501 292.488 179.756 265.872V206.834L234.584 187.295L289.413 206.834V265.872C280.579 292.758 262.303 311.603 234.584 322.414L233.755 322.087Z" stroke="url(#paint0_linear_1035_26193)" stroke-width="2"/>
<path d="M156.361 190.687V190.929" stroke="#9B9B9B" stroke-width="0.5" stroke-dasharray="0.23 0.23 0.23 0.23"/>
<path d="M224.203 273.244C282.851 303.127 335.099 318.119 340.903 306.729C346.707 295.339 303.867 261.88 245.219 231.997C186.571 202.115 134.322 187.124 128.519 198.514C122.715 209.903 165.555 243.361 224.203 273.244Z" stroke="url(#paint1_linear_1035_26193)" stroke-width="1.866" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M262.684 299.767C268.63 299.767 273.451 294.952 273.451 289.012C273.451 283.072 268.63 278.257 262.684 278.257C256.739 278.257 251.918 283.072 251.918 289.012C251.918 294.952 256.739 299.767 262.684 299.767Z" fill="url(#paint2_linear_1035_26193)"/>
<path d="M262.685 291.864C264.262 291.864 265.54 290.588 265.54 289.012C265.54 287.437 264.262 286.16 262.685 286.16C261.108 286.16 259.83 287.437 259.83 289.012C259.83 290.588 261.108 291.864 262.685 291.864Z" fill="#1E1E1E"/>
<path d="M207.327 225.213C213.273 225.213 218.093 220.398 218.093 214.457C218.093 208.517 213.273 203.702 207.327 203.702C201.381 203.702 196.561 208.517 196.561 214.457C196.561 220.398 201.381 225.213 207.327 225.213Z" fill="url(#paint3_linear_1035_26193)"/>
<path d="M207.328 217.31C208.904 217.31 210.183 216.033 210.183 214.457C210.183 212.883 208.904 211.605 207.328 211.605C205.751 211.605 204.473 212.883 204.473 214.457C204.473 216.033 205.751 217.31 207.328 217.31Z" fill="#1E1E1E"/>
</g>
</g>
<path d="M235 20C277.09 20 318.407 31.3043 354.635 52.7316C390.862 74.159 420.67 104.923 440.943 141.809L432.678 146.352C413.218 110.946 384.607 81.4171 349.833 60.8498C315.06 40.2824 275.401 29.4318 235 29.4318V20Z" style={{ strokeDasharray: dashArray,
            strokeDashoffset: 0}} fill="url(#paint4_linear_1035_26193)"/>
            <path d="M235 20C277.09 20 318.407 31.3043 354.635 52.7316C390.862 74.159 420.67 104.923 440.943 141.809L432.678 146.352C413.218 110.946 384.607 81.4171 349.833 60.8498C315.06 40.2824 275.401 29.4318 235 29.4318V20Z" style={{ strokeDasharray: dashArray,
            strokeDashoffset: 0}} fill="url(#paint4_linear_1035_26193)"/>
            <path d="M235 20C277.09 20 318.407 31.3043 354.635 52.7316C390.862 74.159 420.67 104.923 440.943 141.809L432.678 146.352C413.218 110.946 384.607 81.4171 349.833 60.8498C315.06 40.2824 275.401 29.4318 235 29.4318V20Z" style={{ strokeDasharray: dashArray,
            strokeDashoffset: 0}} fill="url(#paint4_linear_1035_26193)"/>
<circle cx="235" cy="20" r="20" fill="white"/>
<circle cx="235" cy="20" r="10" fill="#26A0F8"/>
<circle cx="31" cy="138" r="20" fill="white"/>
<circle cx="31" cy="138" r="10" fill="#26A0F8"/>
<circle cx="31" cy="373" r="20" fill="white"/>
<circle cx="31" cy="373" r="10" fill="#26A0F8"/>
<circle cx="235" cy="490" r="20" fill="white"/>
<circle cx="235" cy="490" r="10" fill="#26A0F8"/>
<circle cx="439" cy="373" r="20" fill="white"/>
<circle cx="439" cy="373" r="10" fill="#26A0F8"/>
<circle cx="439" cy="138" r="19" fill="#26A0F8" stroke="#26A0F8" stroke-width="2"/>
<path d="M426.84 138.68C426.84 137.36 427.06 136.18 427.52 135.14C427.98 134.1 428.64 133.3 429.48 132.74C430.32 132.18 431.28 131.88 432.36 131.88C433.42 131.88 434.36 132.18 435.2 132.74C436.04 133.3 436.68 134.1 437.16 135.14C437.62 136.18 437.86 137.36 437.86 138.68V139.32C437.86 140.72 437.62 141.92 437.16 142.94C436.7 143.98 436.06 144.76 435.22 145.3C434.38 145.86 433.44 146.12 432.36 146.12C431.26 146.12 430.3 145.86 429.46 145.3C428.62 144.76 427.98 143.98 427.52 142.94C427.06 141.92 426.84 140.72 426.84 139.32V138.68ZM434.74 135.14C434.14 134.26 433.36 133.82 432.36 133.82C431.36 133.82 430.56 134.26 429.96 135.14C429.36 136.02 429.06 137.22 429.06 138.76V139.24C429.06 140.8 429.36 142 429.96 142.88C430.56 143.76 431.36 144.18 432.36 144.18C433.36 144.18 434.14 143.76 434.74 142.88C435.34 142 435.64 140.8 435.64 139.24V138.76C435.64 137.22 435.34 136.02 434.74 135.14ZM444.775 139.64C445.495 139.04 446.055 138.48 446.415 137.96C446.775 137.44 446.975 136.88 446.975 136.26C446.975 135.48 446.735 134.86 446.255 134.42C445.775 133.98 445.115 133.76 444.295 133.76C443.495 133.76 442.835 134.02 442.355 134.54C441.875 135.06 441.635 135.74 441.635 136.58V136.84H439.415V136.46C439.415 135.58 439.615 134.8 440.015 134.1C440.415 133.42 440.995 132.86 441.735 132.46C442.455 132.06 443.315 131.86 444.295 131.86C445.855 131.86 447.055 132.26 447.935 133.04C448.795 133.82 449.235 134.86 449.235 136.16C449.235 137.12 448.975 137.94 448.495 138.66C447.995 139.38 447.255 140.14 446.275 140.96L442.555 144.06H449.315V146H439.395V144.22L444.775 139.64Z" fill="white"/>
<defs>
<filter id="filter0_i_1035_26193" x="41" y="61" width="387" height="393" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="6"/>
<feGaussianBlur stdDeviation="6"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.0666667 0 0 0 0 0.0666667 0 0 0 0.12 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_1035_26193"/>
</filter>
<linearGradient id="paint0_linear_1035_26193" x1="181.035" y1="229.182" x2="243.219" y2="255.919" gradientUnits="userSpaceOnUse">
<stop stop-color="#1E8AF2"/>
<stop offset="1" stop-color="#05BED7"/>
</linearGradient>
<linearGradient id="paint1_linear_1035_26193" x1="130.482" y1="230.612" x2="203.917" y2="302.296" gradientUnits="userSpaceOnUse">
<stop stop-color="#1E8AF2"/>
<stop offset="1" stop-color="#05BED7"/>
</linearGradient>
<linearGradient id="paint2_linear_1035_26193" x1="252.169" y1="284.925" x2="263.461" y2="290.914" gradientUnits="userSpaceOnUse">
<stop stop-color="#1E8AF2"/>
<stop offset="1" stop-color="#05BED7"/>
</linearGradient>
<linearGradient id="paint3_linear_1035_26193" x1="196.812" y1="210.37" x2="208.104" y2="216.359" gradientUnits="userSpaceOnUse">
<stop stop-color="#1E8AF2"/>
<stop offset="1" stop-color="#05BED7"/>
</linearGradient>
<linearGradient id="paint4_linear_1035_26193" x1="5.48334" y1="165.7" x2="252.068" y2="296.342" gradientUnits="userSpaceOnUse">
<stop stop-color="#1E8AF2"/>
<stop offset="1" stop-color="#05BED7"/>
</linearGradient>
<clipPath id="clip0_1035_26193">
<rect width="258" height="258" fill="white" transform="translate(106 126)"/>
</clipPath>
</defs>
</svg> */}


      {/* <div className="stepperImg">
        <ImageCustom
          src="/images/shield.png"
          width={200}
          height={200}
          alt="bannerImg"
        />
      </div> */}
      {/* <span className="one">01</span>
      <span className="two">02</span>
      <span className="three">03</span>
      <span className="four">04</span>
      <span className="five">05</span>
      <span className="six">06</span> */}
    </div>
          </div>
        </div>

        <div className={`${styles.processCardSection}`}>
          {accordionData.map((data, index) => (
            <div
              key={index}
              className={`${styles.processCard} ${data.current}`}
            >
              <div className={styles.textGradient}>{index}</div>
              <h4 className={styles.title}>{data.title}</h4>
              <p className={styles.description}>{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionTheProcess;
