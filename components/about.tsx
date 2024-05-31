"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export function useAbout() {
  return useSectionInView("About");
}

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
       Hi, I'm Sagar Sahane.A Entry-level web developer adept at crafting scalable web solutions with Node.js, Express, and React. Skilled in developing reusable components for enterprise-level web applications and building robust, secure web services
      </p>
  
    </motion.section>
  );
}
