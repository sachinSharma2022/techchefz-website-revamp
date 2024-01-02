import React, { useEffect, useState } from "react";
import { Button } from "../../ui/button";
import { Icons } from "@/components/icons";
import styles from "./style.module.scss";
import gsap from "gsap";



const LandingBanner = () => {
  const [containerSize, setContainerSize] = useState({
    width: 280,
    height: 280,
  });
  const containerId = `${styles.buttonContainer}`;
  console.log('Container ID:', containerId);
  
  useEffect(() => {
    const container = document.getElementById("buttonContainer");
    const circle = document.querySelector(".buttonShape");
    const hamburger = document.querySelector(".buttonContent"); 

    const handleMouseEnter = () => {
      gsap.to(container, 0.3, { height: 300, width: 300 });
      gsap.to(circle, 0.1, { scale: 1  });
    };

    const handleMouseLeave = () => {
      gsap.to(container, 0.3, { height: 280, width: 280 });
      gsap.to([circle, hamburger], 0.1, { scale: 1, x: 0, y: 0 });
    };

    const handleMouseMove = (e) => {
      callParallax(e, ".buttonShape", 10); 
      callParallax(e, ".buttonContent", 30);
    };

    const callParallax = (e, target, movement) => {
      const relX = e.pageX - container.offsetLeft;
      const relY = e.pageY - container.offsetTop;

      const element = document.querySelector(target);
      gsap.to(element, 0.3, {
        x: ((relX - containerSize.width / 2) / containerSize.width) * movement,
        y: ((relY - containerSize.height / 2) / containerSize.height) * movement,
        ease: 'power2.out',
      });
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, [containerSize]);

  return (
    <section className={`${styles.landingBannerStyle}`}>
      <h1 className={styles.title}>
        Humanizing <div /> Digital Experience <div />
        <div className={styles.titleHighlight} id={styles.flip}>
          <div>
            <div className={styles.rollingTitle}>Through Data1.</div>
          </div>
          <div>
            <div className={styles.rollingTitle}>Through Data2.</div>
          </div>
          <div>
            <div className={styles.rollingTitle}>Through Data3.</div>
          </div>
        </div>
      </h1>

      <div id="buttonContainer" style={{ width: containerSize.width, height: containerSize.height }}>
        <div className="buttonShape">
          <Button variant="blueBtn" size="md" className="buttonContent">
            Let’s Work Together <Icons.ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LandingBanner;
