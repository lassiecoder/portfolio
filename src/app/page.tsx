// import Navbar from "@/components/navbar";
"use client";

import HomeScreen from "@/app/pages/homescreen";
import { Article } from "@/app/pages/articles";
import ThreeDCard  from "@/app/pages/projects";
import About from "./pages/about";
import ContactForm from "./pages/contact";

import ReactGA from "react-ga4";
import { useEffect } from "react";


export default function Home() {


  useEffect(() => {
		// if (T_ID !== '') {
			ReactGA.initialize("G-PYQ50G2GWN");
		// }
	}, []);

  return (
    <>
      <HomeScreen />
      <About />
      <ThreeDCard />
      <Article />
      <ContactForm />
    </>
  );
}
