"use client";

import Testimonials from "@/components/common/testimonials";
import useLazyLoad from "@/lib/useLazyLoad";

const HomeTestimonials = ({ testimonials, className }) => {
  const { targetRef, isVisible } = useLazyLoad();
  return (
    <div ref={targetRef}>
      {isVisible && <Testimonials className={className} props={testimonials} />}
    </div>
  );
};

export default HomeTestimonials;
