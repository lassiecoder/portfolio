"use client";

import HomeScreen from "@/app/pages/homescreen";
import { Article } from "@/app/pages/articles";
import ThreeDCard from "@/app/pages/projects";
import YouTubeSection from "@/app/pages/youtube";
import Products from "@/app/pages/products";
import About from "@/app/pages/about";
import ContactForm from "./pages/contact";
// import Navbar from "@/components/navbar";

import ReactGA from "react-ga4";
import { useEffect } from "react";
import { Experience } from "./pages/experience";
import Networking from "./pages/networking";

export default function Home() {
  useEffect(() => {
    ReactGA.initialize(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!);
  }, []);

  return (
    <div className="font-sans bg-black">
      <HomeScreen />
      <About />
      <Products />
      <Experience />
      {/* <YouTubeSection /> */}
      {/* <ThreeDCard /> */}
      {/* <Article /> */}
      <Networking />
      <ContactForm />
    </div>
  );
}
