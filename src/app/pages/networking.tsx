"use client";

import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";

const Networking = () => {
  const words = ["Connecting, Learning, and Growing Together"];

  return (
    <div className="max-w-7xl mx-auto px-4 mt-10">
      <h2 className="md:text-4xl text-2xl lg:text-4xl font-bold text-left pb-12 xl:pl-0 lg:mb-0 sm:mb-0 relative z-10 w-[100%]">
        <div className="subtitle-box">
          <FlipWords words={words} duration={1000} />
        </div>
      </h2>
      <h3 className="md:text-xl text-sm lg:text-xl font-medium text-left text-gray-400 max-w-7xl lg:mb-4 pl-0 relative z-0">
        <p className="pb-12">
          Explore my insights and experiences from various{" "}
          <span className="text-white">industry events</span> and{" "}
          <span className="text-white">meetups</span>, where I share{" "}
          <span className="text-white">key takeaways</span>,{" "}
          <span className="text-white">valuable connections</span>, and moments
          that shaped my professional journey.
        </p>
      </h3>
      <button className="relative inline-flex h-200 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl px-4 py-4">
          <ParallaxScroll items={images} />
        </span>
      </button>
    </div>
  );
};

export default Networking;

const images = [
  {
    src: "https://github.com/user-attachments/assets/cd0c78f5-c6ba-4f8e-9837-558418aeb606",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7306864289519128576"
  },
  {
    src: "https://github.com/user-attachments/assets/e6d60bde-990c-4062-bbcd-0715f18455a7",
    href: "https://www.linkedin.com/posts/priyanka-s-b79401142_keploy-gittogether-opensourcecommunity-activity-7169236453577646080-YoXh?utm_source=share&utm_medium=member_desktop"
  },
  {
    src: "https://github.com/user-attachments/assets/5c0b9253-31d6-456e-9a37-4e3e74ea0b54",
    href: "https://www.linkedin.com/posts/priyanka-s-b79401142_serverlessdays-bangalore-techcommunity-activity-7235735531211345920-RoQg?utm_source=share&utm_medium=member_desktop"
  },
  {
    src: "https://github.com/user-attachments/assets/265a5c1f-b721-401e-ae6f-5021f2e05d38",
    href: "https://www.linkedin.com/posts/technexuscommunity_microsoftai-azureopenai-aiinnovation-activity-7302707221094666241-9zWP?utm_source=share&utm_medium=member_desktop&rcm=ACoAACKWXU0BijJEUI16M7ei08EhKNgho2RX3xM"
  },
  {
    src: "https://github.com/user-attachments/assets/b8e71bf6-1002-46c6-a98b-de6cb0934e83",
    href: "https://www.linkedin.com/posts/priyanka-s-b79401142_thats-a-wrap-for-serverlessdays-bengaluru-activity-7235948907954892802-3tpT?utm_source=share&utm_medium=member_desktop"
  },
  {
    src: "https://github.com/user-attachments/assets/343e7f94-00f1-437a-b731-0fc0ff446fad",
    href: "https://www.linkedin.com/posts/priyanka-s-b79401142_githubconstellation-oss-developercommunity-activity-7206725289031196673-8D-l?utm_source=share&utm_medium=member_desktop"
  },
  {
    src: "https://github.com/user-attachments/assets/00047cbc-041d-4b05-b8da-1deb2e3bdc8b",
    href: "https://x.com/lassiecoder/status/1836049315778678872"
  },
  {
    src: "https://github.com/user-attachments/assets/1fdbe030-bce7-48d5-9acf-c65b4e1cc813",
    href: "https://x.com/lassiecoder/status/1829883911675183349"
  },
  {
    src: "https://github.com/user-attachments/assets/de93e7cc-29c6-4dc7-af61-b80fae69e468",
    href: "https://www.linkedin.com/posts/priyanka-s-b79401142_gittogether-gittogetherbengaluru-opensource-activity-7233815879728123904-XVV9?utm_source=share&utm_medium=member_desktop"
  },
  {
    src: "https://github.com/user-attachments/assets/124f00df-f9a8-4258-af12-94354b6e0210",
    href: "https://x.com/adityaoberai1/status/1763221813625331791"
  },
  {
    src: "https://github.com/user-attachments/assets/efdec091-f9ad-426d-a22c-1a3db9ed767e",
    href: "https://www.linkedin.com/posts/priyanka-s-b79401142_elevatevirtualconference-girlgeekx-networking-activity-7204481662913544193-aFAM?utm_source=share&utm_medium=member_desktop"
  },
  {
    src: "https://github.com/user-attachments/assets/d5fd74c5-1cb9-4aa5-8a02-fc7859e15a4d",
    href: "https://x.com/edjgeek/status/1830168978603282712"
  },
  {
    src: "https://github.com/user-attachments/assets/3d613f20-ef91-4757-8e7d-fae26fce626b",
    href: "https://x.com/lassiecoder/status/1823067516165308606"
  },
  {
    src: "https://github.com/user-attachments/assets/13e76eec-4e8b-4b25-9b25-fb9ad4f2e149",
    href: "https://www.linkedin.com/posts/priyanka-s-b79401142_gittogether-opensource-techcommunity-activity-7215039647247159296-g6qD?utm_source=share&utm_medium=member_desktop"
  }
];
