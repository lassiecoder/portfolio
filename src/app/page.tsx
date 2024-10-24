"use client";

import HomeScreen from "@/app/pages/homescreen";
import { Article } from "@/app/pages/articles";
import ThreeDCard from "@/app/pages/projects";
import About from "@/app/pages/about";
import ContactForm from "./pages/contact";
// import Navbar from "@/components/navbar";

import ReactGA from "react-ga4";
import { useEffect } from "react";
import { Experience } from "./pages/experience";

export default function Home() {
  useEffect(() => {
    // if (T_ID !== '') {
    ReactGA.initialize("G-PYQ50G2GWN");
    // }
  }, []);

  return (
    <div className="font-sans">
      <HomeScreen />
      <About />
      <Experience />
      <ThreeDCard />
      <Article />
      <ContactForm />
    </div>
  );
}
