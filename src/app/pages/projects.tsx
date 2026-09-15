"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FaStar } from "react-icons/fa6";
import { PiGitForkBold } from "react-icons/pi";
import { ButtonsCard } from "@/components/ui/tailwindcss-buttons";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card.tsx";

const GITHUB_USERNAME = "lassiecoder";
const IMAGE_SWITCH_INTERVAL_MS = 3000;

const PLATFORM_STYLES: { [key: string]: string } = {
  "Mobile App": "bg-blue-500/10 text-blue-300 border-blue-400/30",
  "Web App": "bg-emerald-500/10 text-emerald-300 border-emerald-400/30",
  Tool: "bg-gray-500/10 text-gray-300 border-gray-400/30",
};

const ProjectImage = ({ images }: { images: string[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, IMAGE_SWITCH_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative h-40 sm:h-44 md:h-48 w-full overflow-hidden rounded-xl group-hover/card:shadow-xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={images[activeIndex]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <Image
            src={images[activeIndex]}
            height={1000}
            width={1000}
            className="h-full w-full object-cover"
            alt="thumbnail"
            loading="lazy"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const ThreeDCard = () => {
  const [repoStats, setRepoStats] = useState<{
    [key: string]: { stars: number; forks: number };
  }>({});

  useEffect(() => {
    const fetchRepoStats = async () => {
      try {
        const repoData = await Promise.all(
          dummyData.map(async (item) => {
            const response = await fetch(
              `https://api.github.com/repos/${GITHUB_USERNAME}/${item.repo}`,
            );
            const data = await response.json();
            return {
              repo: item.repo,
              stars: data.stargazers_count,
              forks: data.forks_count,
            };
          }),
        );

        const stats = repoData.reduce(
          (acc: { [key: string]: { stars: number; forks: number } }, curr) => {
            acc[curr.repo] = { stars: curr.stars, forks: curr.forks };
            return acc;
          },
          {},
        );

        setRepoStats(stats);
      } catch (error) {
        console.error("Failed to fetch GitHub data", error);
      }
    };

    fetchRepoStats();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 mt-20">
      <div className="px-4">
        <h2 className="md:text-4xl text-2xl lg:text-4xl font-bold text-left pb-12 text-white">
          Projects
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 sm:gap-3">
        {dummyData.map((item, index) => (
          <div key={index}>
            <CardContainer className="inter-var font-medium">
              <CardBody className="bg-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-white/[0.2] w-auto h-[400px] sm:h-[420px] lg:h-[450px] rounded-xl p-6 border flex flex-col justify-between">
                {/* Title */}
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-gray-100 dark:text-white"
                >
                  {item.title}
                </CardItem>

                {/* Platform Tag */}
                <CardItem
                  translateZ="40"
                  className={`inline-block w-fit text-xs font-medium px-2.5 py-1 rounded-full border mt-2 ${PLATFORM_STYLES[item.platform]}`}
                >
                  {item.platform}
                </CardItem>

                {/* Description with Clamp */}
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-gray-400 text-sm mt-2 line-clamp-3 hover:line-clamp-none transition-all duration-300"
                >
                  {item.description}
                </CardItem>

                {/* Image with Fixed Height */}
                <CardItem translateZ="100" className="w-full mt-4">
                  <ProjectImage
                    images={
                      Array.isArray(item.image) ? item.image : [item.image]
                    }
                  />
                </CardItem>

                {/* Stats and Button */}
                <div className="flex justify-between items-center mt-4 text-gray-400 text-sm">
                  {item.projectType !== "work-project" && (
                    <div className="flex gap-4">
                      {repoStats[item.repo]?.stars !== 0 && (
                        <span className="flex items-center gap-1">
                          <FaStar className="text-yellow-400 text-base" />
                          {repoStats[item.repo]?.stars || 0}
                        </span>
                      )}

                      {repoStats[item.repo]?.forks !== 0 && (
                        <span className="flex items-center gap-1">
                          <PiGitForkBold className="text-gray-300 text-base" />
                          {repoStats[item.repo]?.forks || 0}
                        </span>
                      )}
                    </div>
                  )}

                  <Link href={item.link} target="_blank">
                    <ButtonsCard>
                      <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                          View Project →
                        </span>
                      </button>
                    </ButtonsCard>
                  </Link>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreeDCard;

const dummyData = [
  {
    title: "Traya – Hair assessment app",
    description:
      "A React Native app that walks a user through a signup, an 11-question hair-loss assessment, and a generated report/plan with a mini product checkout.",
    image: ["/traya-1.png", "/traya-2.png"],
    link: "https://github.com/lassiecoder/traya-hair-test",
    repo: "traya-hair-test",
    projectType: "Personal Project",
    platform: "Mobile App",
  },
  {
    title: "Wayk – An alarm app",
    description:
      "An alarm app that doesn't let you snooze your way back to sleep. You pick a wake time, a 'mission' you have to complete before the alarm will actually stop.",
    image: ["/wayk-1.png", "/wayk-2.png"],
    link: "https://github.com/lassiecoder/wayk",
    repo: "wayk",
    projectType: "Personal Project",
    platform: "Mobile App",
  },
  {
    title: "Enterprise Dashboard",
    description:
      "A modern enterprise dashboard with analytics, eCommerce management, and interactive data visualizations.",
    image: "/project-0.png",
    link: "https://github.com/lassiecoder/enterprise-dashboard",
    repo: "enterprise-dashboard",
    projectType: "",
    platform: "Web App",
  },
  {
    title: "EduFund - Mutual Funds & SIP",
    description:
      "EduFund, India's leading investment app, helps parents save for their children's education, ensuring a brighter future amid rising education expenses.",
    image: "/project-5.png",
    link: "https://play.google.com/store/apps/details?id=com.educationfund.edufund&hl=en_IN",
    repo: "",
    projectType: "work-project",
    platform: "Mobile App",
  },
  {
    title: "Adecco",
    description:
      "The Adecco mobile app transforms job placement with accuracy, speed, and thorough evaluation. Daily linking over 700,000 individuals to top-tier global opportunities.",
    image: "/project-8.png",
    link: "https://play.google.com/store/apps/details?id=com.adecco.app20&amp;hl=en_IN&amp;gl=US",
    repo: "",
    projectType: "work-project",
    platform: "Mobile App",
  },
  {
    title: "Community Health Files",
    description:
      "The community-health-files package automates the setup and management  for open-source projects, providing a streamlined way to maintain project guidelines and policies.",
    image: "/project-1.png",
    link: "https://github.com/lassiecoder/community-health-files",
    repo: "community-health-files",
    projectType: "",
    platform: "Tool",
  },
  {
    title: "GitHub README",
    description:
      "A dynamic GitHub profile showcasing JavaScript expertise, tech writing, speaking, and community contributions with engaging visuals, stats, and social links.",
    image: "/project-2.png",
    link: "https://github.com/lassiecoder/lassiecoder",
    repo: "lassiecoder",
    projectType: "",
    platform: "Tool",
  },
  {
    title: "npx lassiecoder – in your terminal?",
    description:
      "A personalized command-line business card. This innovative tool allows you to showcase your professional profile, skills, and contact information in the terminal.",
    image: "/project-4.gif",
    link: "https://github.com/lassiecoder/npx-lassiecoder",
    repo: "npx-lassiecoder",
    projectType: "",
    platform: "Tool",
  },
  {
    title: "Torum: Cryptocurrency Social App",
    description:
      "Torum's mobile app fosters a vibrant SocialFi ecosystem, connecting over 230,000 cryptocurrency enthusiasts since its 2018 inception.",
    image: "/project-6.png",
    link: "https://www.pay.torum.com/",
    repo: "",
    projectType: "work-project",
    platform: "Mobile & Web App",
  },
  {
    title: "Shoplane – E-commerce website",
    description:
      "Shoplane's GitHub repository, with 340 stars and 250 forks, is a significant player in open-source e-commerce, influencing the online retail sector's development.",
    image: "/project-3.png",
    link: "https://github.com/lassiecoder/E-CommerceWebsite",
    repo: "E-CommerceWebsite",
    projectType: "",
    platform: "Web App",
  },
  {
    title: "Mutual funding app",
    description:
      "The proof-of-concept app exhibits mutual funds with authentication, presenting a scrollable list of key fund information. Selecting a fund directs users to a detailed product page for additional insights.",
    image: "/project-7.png",
    link: "https://github.com/lassiecoder/mutual-funding-app",
    repo: "mutual-funding-app",
    projectType: "",
    platform: "Mobile App",
  },
];
