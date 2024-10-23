"use client";

import React from "react";
import Typewriter from "typewriter-effect";
import { FlipWords } from "../../components/ui/flip-words";

const ContactForm = () => {
  const words = [
    "Opportunities",
    "Suggestions",
    "Collaboration",
    "Feedback",
    "Networking"
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 mt-44 ">
      <div className="px-4">
        <h2 className="md:text-4xl text-2xl lg:text-4xl font-bold text-left pb-12 xl:pl-0 lg:mb-0 sm:mb-0 ">
          {/* Ways to Connect with Me */}
          <div className="flex header-container">
            <div className="title-box">
              <p className="text">I&apos;m open to</p>
            </div>
            <div className="subtitle-box">
              {/* <div className="text"> */}
              <FlipWords words={words} />
              {/* <Typewriter
                  options={{
                    strings: [
                      "Opportunities",
                      "Suggestions",
                      "Collaboration",
                      "Feedback",
                      "Networking"
                    ],
                    autoStart: true,
                    loop: true
                  }}
                /> */}
              {/* </div> */}
            </div>
          </div>
        </h2>
      </div>
      <h3 className="md:text-xl text-sm lg:text-xl font-extralight text-left relative z-20 text-gray-400 max-w-7xl pb-8 lg:mb-4 pl-4">
        <p className="pb-6">
          I appreciate your interest in connecting with me. I&apos;m excited to
          explore{" "}
          <span className="text-white font-medium">new opportunities</span>,{" "}
          <span className="text-white font-medium">receive feedback</span>,{" "}
          <span className="text-white font-medium">
            collaborate on projects
          </span>
          , and broaden my network.
        </p>
        <p className="pb-6">
          For any specific questions or comments, please don&apos;t hesitate to
          contact me directly at
          <a
            className=" bg-gradient-to-r from-purple-600 to-gray-400 text-transparent bg-clip-text font-medium ml-2"
            href="mailto:sharmapriyanka84510@gmail.com"
            target="_blank"
          >
            lassiecoder@gmail.com
          </a>
          . I strive to respond to all messages within{" "}
          <span className="text-white font-medium">24 hours</span>, although it
          may take a bit longer during busy periods.{" "}
        </p>
        If you prefer social media, you can also find me on{" "}
        <span className="text-white font-medium">Instagram</span> at
        <a
          className="bg-gradient-to-r from-pink-500 to-gray-400 text-transparent bg-clip-text font-medium ml-2"
          href="https://instagram.com/lassiecoder"
          target="_blank"
        >
          @lassiecoder
        </a>
        .
      </h3>
      <div className="text-sm pt-60 sm:mt-20 font-extralight text-center relative z-20 text-gray-400 max-w-7xl pb-8">
        Always be caffeinated! | © Priyanka Sharma (lassiecoder)
      </div>
    </div>
  );
};

export default ContactForm;
