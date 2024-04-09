"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card.tsx"
import Link from "next/link";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 ">
        <div className="px-4">
            <h2 className="md:text-4xl text-2xl lg:text-4xl font-bold text-left pb-12 xl:pl-0 lg:mb-0 sm:mb-0 ">About me</h2>
        </div>
        <h3 className="md:text-xl text-sm lg:text-xl font-extralight text-left relative z-20 text-gray-400 max-w-7xl pb-8 lg:mb-4 pl-4">
            Hello, I&apos;m Priyanka Sharma. Also known as <b className="underline decoration-blue-400/60">lassiecoder</b> on various tech platforms, I am a <b>Software Developer</b> with <b className="bg-gradient-to-r from-purple-600 to-gray-400 text-transparent bg-clip-text font-medium">4 years</b> of experience.
            <br /><br />
            I specialize in crafting <b>mobile applications</b> and <b>web development</b>.
            <br /><br />
            <div className="break-words whitespace-normal">
              <text className="whitespace-nowrap">Proficient in</text>&nbsp;
              <text className="whitespace-nowrap bg-gradient-to-r from-blue-400 to-gray-400 text-transparent bg-clip-text font-medium">JavaScript</text>, {' '}
              <text className="whitespace-nowrap bg-gradient-to-r from-blue-400 to-gray-400 text-transparent bg-clip-text font-medium">React Native</text>, {' '} 
              <text className="whitespace-nowrap bg-gradient-to-r from-blue-400 to-gray-400 text-transparent bg-clip-text font-medium">TypeScript</text>, {' '}
              <text className="whitespace-nowrap bg-gradient-to-r from-blue-400 to-gray-400 text-transparent bg-clip-text font-medium">React.js</text>, {' '} 
              <text className="whitespace-nowrap bg-gradient-to-r from-blue-400 to-gray-400 text-transparent bg-clip-text font-medium">Next.js</text>, {' '} 
              <text className="whitespace-nowrap bg-gradient-to-r from-blue-400 to-gray-400 text-transparent bg-clip-text font-medium">Node.js</text>, {' '} 
              <text className="whitespace-nowrap bg-gradient-to-r from-blue-400 to-gray-400 text-transparent bg-clip-text font-medium">MongoDB</text>, {' '} 
              <text className="whitespace-nowrap bg-gradient-to-r from-blue-400 to-gray-400 text-transparent bg-clip-text font-medium">AWS</text>, {' '} 
              <text className="whitespace-nowrap bg-gradient-to-r from-blue-400 to-gray-400 text-transparent bg-clip-text font-medium">Redux</text>, {' '} 
              <text className="whitespace-nowrap bg-gradient-to-r from-blue-400 to-gray-400 text-transparent bg-clip-text font-medium">Rematch</text>, {' '} 
              <text className="whitespace-nowrap bg-gradient-to-r from-blue-400 to-gray-400 text-transparent bg-clip-text font-medium">React Query</text>, {' '}
              <text className="whitespace-nowrap bg-gradient-to-r from-blue-400 to-gray-400 text-transparent bg-clip-text font-medium">Websocket</text>, {' '} 
              <text className="whitespace-nowrap bg-gradient-to-r from-blue-400 to-gray-400 text-transparent bg-clip-text font-medium">Firebase</text>, {' '} 
              <text className="whitespace-nowrap bg-gradient-to-r from-blue-400 to-gray-400 text-transparent bg-clip-text font-medium">Storybook</text>&nbsp;including&nbsp;
              <text className="whitespace-nowrap bg-gradient-to-r from-blue-400 to-gray-400 text-transparent bg-clip-text font-medium">Fastlane</text>&nbsp;for app deployment.
            </div>
             {/*Proficient in <b>JavaScript</b>, <b>React Native</b>, <b>React.js,</b> <b>Next.js</b>, <b>Node.js</b>, <b>MongoDB</b>, <b>AWS</b>, <b>Websocket</b>, <b>Firebase</b>, <b>Storybook</b>, <b>Redux</b>, <b>Rematch</b>, <b>React Query</b> including <b>Fastlane</b> for app deployment. */}
            <br /><br />
            Currently, I am part of the dynamic team at <b>The Adecco Group</b>, a Swiss-based company known for its innovative solutions.
            <br /><br />
            {/* At <b>Torum</b>, I played a pivotal role in enhancing user engagement through strategic implementations, such as in-app and push notifications with deep linking for seamless redirections. Additionally, I focused on developing user-friendly components, establishing deployment processes for efficient app distribution, and optimizing data management by transitioning key features from React Query to Redux.
            <br /><br />
            I&apos;ve made significant contributions at <b>Edufund</b>, including the introduction of KYC verification for account creation and the integration of third-party tools for secure data access. Moreover, I spearheaded initiatives to boost user engagement, streamline app building and deployment workflows, and developed a white-label solution for ICICI, a banking partner, leveraging NextJS technology.
            <br /><br /> */}
            With a passion for innovation and a track record of delivering impactful solutions, I am committed to pushing boundaries and driving success in every project I undertake.
        </h3>
    </div>
  );
};

export default About;

