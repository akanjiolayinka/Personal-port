"use client";

import { useEffect, useState } from "react";
import BootSequence from "@/components/BootSequence";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Leadership from "@/components/Leadership";
import ResumeCTA from "@/components/ResumeCTA";
import Footer from "@/components/Footer";
import { useReducedMotion } from "@/lib/useReducedMotion";

export default function Home() {
  const [booted, setBooted] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) setBooted(true);
  }, [reducedMotion]);

  const showBoot = !reducedMotion && !booted;

  return (
    <>
      {showBoot && <BootSequence onComplete={() => setBooted(true)} />}
      <div style={{ visibility: !booted && !reducedMotion ? "hidden" : "visible" }}>
        <Header />
        <main>
          <Hero />
          <About />
          <Achievements />
          <Skills />
          <Experience />
          <Projects />
          <Leadership />
          <ResumeCTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
