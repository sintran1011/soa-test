"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { ReactNode, useEffect } from "react";

const LenisLayout = ({ children }: { children: ReactNode }) => {
  const lenis = new Lenis();

  useEffect(() => {
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // Convert time from seconds to milliseconds
    });
    gsap.ticker.lagSmoothing(0);
  }, []);

  return { children };
};

export default LenisLayout;
