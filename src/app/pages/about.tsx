"use client";

import Tooltip from "@/components/Tooltip";
import Link from "next/link";
import React from "react";
import { HiMiniBellAlert } from "react-icons/hi2";
import { IoGitNetworkOutline } from "react-icons/io5";
import { FaAws } from "react-icons/fa";

const About = () => {
  return (
    <div className=" max-w-7xl mx-auto px-4">
      <div className="px-4">
        <h2 className="md:text-4xl text-2xl lg:text-4xl font-bold text-left pb-12 xl:pl-0 lg:mb-0 sm:mb-0 text-white">
          About me
        </h2>
      </div>
      <h3 className="md:text-xl text-sm lg:text-xl font-medium text-left relative z-20 text-gray-400 max-w-7xl pb-8 lg:mb-4 pl-4 pr-4">
        <p>
          Hello, I&apos;m Priyanka Sharma, also known as{" "}
          <span className="text-white">lassiecoder</span> in the tech community.
        </p>
        <p className="mt-6">
          With <span className="text-white">4 years </span>
          of experience as a <span className="text-white"></span>
          <span className="text-white">Software Developer</span>, I specialize
          in <span className="text-white"></span>mobile and web app development.
        </p>
        <p className="mt-6">
          My technical expertise includes –{" "}
          <span className="text-white">JavaScript</span>,{" "}
          <span className="text-white">TypeScript</span>, and{" "}
          {/* <span className="text-white">React ecosystems</span> */}
          <Tooltip
            text="React ecosystems"
            tooltipText="React Native, ReactJS, NextJS, Storybook, Expo"
            className="text-white"
          />
          , along with{" "}
          {/* <span className="text-white">backend technologies</span> */}
          <Tooltip
            text="backend technologies"
            tooltipText="NodeJS, ExpressJS, MongoDB Atlas"
            className="text-white"
          />
          ,{/* <span className="text-white">cloud deployment</span> */}{" "}
          <Tooltip
            text="cloud deployment"
            tooltipText="AWS, Vercel, Netlify, Heroku, Fastlane"
            className="text-white"
          />
          ,{/* <span className="text-white">state management</span> */}{" "}
          <Tooltip
            text="state management"
            tooltipText="Redux, Rematch, React Query"
            className="text-white"
          />
          ,{/* <span className="text-white">real-time communication</span> */}{" "}
          <Tooltip
            text="real-time communication"
            tooltipText="Websocket"
            className="text-white"
          />
          , and {/* <span className="text-white">UI development</span> */}
          <Tooltip
            text="UI development"
            tooltipText="Figma, Adobe XD"
            className="text-white"
          />{" "}
          and {/* <span className="text-white">testing</span> */}
          <Tooltip text="testing" tooltipText="Jest" className="text-white" />.
        </p>
        <p className="mt-6">
          Currently, I&apos;m contributing my skills to{" "}
          <span className="text-white">The Adecco Group</span>, a leading{" "}
          <span className="text-white">Swiss company</span> known for innovative
          solutions.
        </p>
        <p className="mt-6">
          I&apos;m passionate about pushing technological boundaries and
          delivering impactful solutions that drive success. My commitment to
          innovation and excellence defines every project I undertake.
        </p>
        <p className="mt-6">
          I was also selected for the{" "}
          <span className="bg-gradient-to-r from-purple-600 to-gray-400 text-transparent bg-clip-text">
            <FaAws className="inline text-2xl lg:text-3xl text-purple-600" />{" "}
            re:Invent All Builders Welcome Grant 2025
          </span>
          , a global program that recognizes and supports promising builders in
          the tech community.
        </p>
      </h3>

      <div className="flex justify-center items-center space-x-3 max-[478px]:flex-col max-[478px]:space-x-0 max-[478px]:space-y-3">
        <Link
          href={"https://techscoop.hashnode.dev/newsletter"}
          target="_blank"
        >
          <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              &nbsp; Subscribe to my newsletter &nbsp;
              <HiMiniBellAlert className="mr-2 text-xl" />
            </span>
          </button>
        </Link>

        <Link
          href={"https://forms.gle/udY3jQDBETu81BNf9"}
          target="_blank"
          className="block md:hidden"
        >
          <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              &nbsp; Work with me &nbsp;
              <IoGitNetworkOutline className="mr-2 text-xl" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
