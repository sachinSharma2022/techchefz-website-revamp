"use client";

import Testimonials from "@/components/common/testimonials";

const HomeTestimonials = ({ testimonials, className }) => {
  return <Testimonials className={className} props={testimonials} />;
};

export default HomeTestimonials;
