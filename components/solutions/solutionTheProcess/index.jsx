"use client";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import { ImageCustom } from "@/components/ui/imageCustom";
import { cn } from "@/lib/utils";
import styles from "./style.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";

const SolutionTheProcess = () => {
  const { theme, setTheme } = useContext(MyContext);
  const radius = 235;
  const dashArray = radius * Math.PI * 2;
  const [dashOffset, setdashOffset] = useState(dashArray);
  const [prevdashOffset, prevsetdashOffset] = useState(dashArray);
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
    const changeDot=(i)=>{
      const ele=document.getElementsByClassName("dot")
      for (let i = 0; i < ele.length; i++) {
        ele[i].style.fill="white";    }
      document.getElementById(i).style.fill="#26A0F8";

    }
    const changeImg=(i)=>{
      const ele=document.getElementsByClassName(styles.stepperImg)
      for (let i = 0; i < ele.length; i++) {
        ele[i].style.display="none"; 
        // ele[i].style.opacity="0";
        // ele[i].style.transition="opacity 0.3s, display 0.3s";  
       }
     
        document.getElementById(`${i}-img`).style.display="block";
        // document.getElementById(`${i}-img`).style.opacity="1";
        // document.getElementById(`${i}-img`).style.transition = 'opacity 0.5s display 0.5s ';

    }
    // console.log(dashOffset,"dasofset")
    // console.log(prevdashOffset,"prevdasofset")
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
          onStart:function(){ 
            setTimeout(() => {
              changeDot(i+1)
              changeImg(i+1)

            }, 100);
            
            setdashOffset((prev)=>{
              prevsetdashOffset(prev)
              return dashArray-((dashArray/titles.length)*(i+1))
          }) },
          scrollTrigger:{
            trigger: text,
            start: "top 45%",
            end:"center 20%",
            markers: true,
            toggleActions: "play reset play reverse",
          },
          opacity: 1,
        })
        
      });
      gsap.fromTo(".circleFil", {
          strokeDashoffset: prevdashOffset,
          duration:3,
          ease: "power1.inOut"
          
        },{ 
       
        strokeDashoffset: dashOffset,
        transition: "stroke-dashoffset 1.6s linear 0s",
        duration:3,
        ease: "power1.inOut"
        })
        });
    return () => ctx.revert();
  }, [dashOffset,prevdashOffset]);
  
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
          <svg width="470" height="510" viewBox="0 0 470 510" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="235" cy="255" r="235" fill="#F1F1F1"/>
<circle cx="235" cy="255" r="230" stroke="#111111" stroke-opacity="0.4" stroke-width="10"/>
<circle className="circleFil" cx="235" cy="255" r="230" stroke="url(#paint4_linear_1035_26193)"  stroke-width="10" style={{ strokeDasharray: dashArray,
            strokeDashoffset: dashArray}} transform={`rotate(-90 ${470 / 2} ${510 / 2})`} />
<g filter="url(#filter0_i_1035_26193)">
<circle cx="234.5" cy="254.5" r="193.5" fill="white" />
</g>
{/* <g clip-path="url(#clip0_1035_26193)">
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
</g> */}
<g>
<circle className="dot" id="6" cx="235" cy="20" r="20" fill="#26A0F8" stroke-width="2" stroke="#26A0F8"/>
<text x="235" y="20" text-anchor="middle" fill="white" alignment-baseline="middle" style={{}}>1</text>
</g>
<g>
<circle className="dot" id="5" cx="31" cy="138" r="20" fill="white" stroke-width="2" stroke="#26A0F8"/>
<text x="31" y="138" text-anchor="middle" fill="white" alignment-baseline="middle" style={{}}>6</text>
</g>
<g>
<circle className="dot" id="4" cx="31" cy="373" r="20" fill="white" stroke-width="2" stroke="#26A0F8"/>
<text x="31" y="373" text-anchor="middle" fill="white" alignment-baseline="middle" style={{}}>5</text>

</g>
<g>
<circle className="dot" id="3" cx="235" cy="490" r="20" fill="white" stroke-width="2" stroke="#26A0F8"/>
<text x="235" y="490" text-anchor="middle" fill="white" alignment-baseline="middle" style={{}}>4</text>
</g>
<g>
<circle className="dot" id="2" cx="439" cy="373" r="20" fill="white" stroke-width="2" stroke="#26A0F8"/>
<text x="439" y="373" text-anchor="middle" fill="white" alignment-baseline="middle" style={{}}>3</text>
</g>
<g>
<circle className="dot" id="1" cx="439" cy="138" r="19" fill="white" stroke-width="2" stroke="#26A0F8"/>
<text x="439" y="138" text-anchor="middle" fill="white" alignment-baseline="middle" style={{}}>2</text>
</g>




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
          </svg>


      <div id="1-img" className={styles.stepperImg}>
        <ImageCustom
          src="/images/shield.png"
          width={258}
          height={258}
          alt="bannerImg"
        />
      </div>
      <div id="2-img" className={styles.stepperImg} style={{display:"none"}}>
        <ImageCustom
          src="/images/contact-us.png"
          width={258}
          height={258}
          alt="bannerImg"
        />
      </div>
      <div id="3-img" className={styles.stepperImg} style={{display:"none"}}>
        <ImageCustom
          src="/images/shield.png"
          width={258}
          height={258}
          alt="bannerImg"
        />
      </div>
      <div id="4-img" className={styles.stepperImg} style={{display:"none"}}>
        <ImageCustom
          src="/images/contact-us.png"
          width={258}
          height={258}
          alt="bannerImg"
        />
      </div>
      <div id="5-img" className={styles.stepperImg} style={{display:"none"}}>
        <ImageCustom
          src="/images/shield.png"
          width={258}
          height={258}
          alt="bannerImg"
        />
      </div>
      <div id="6-img" className={styles.stepperImg} style={{display:"none"}}>
        <ImageCustom
          src="/images/contact-us.png"
          width={258}
          height={258}
          alt="bannerImg"
        />
      </div>
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
