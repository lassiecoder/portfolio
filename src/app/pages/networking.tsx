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
    src: "/networking-1.png",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7306864289519128576"
  },
  {
    src: "/networking-2.png",
    href: "https://www.linkedin.com/posts/priyanka-s-b79401142_keploy-gittogether-opensourcecommunity-activity-7169236453577646080-YoXh?utm_source=share&utm_medium=member_desktop"
  },
  {
    src: "/networking-3.png",
    href: "https://www.linkedin.com/posts/priyanka-s-b79401142_serverlessdays-bangalore-techcommunity-activity-7235735531211345920-RoQg?utm_source=share&utm_medium=member_desktop"
  },
  {
    src: "/networking-4.png",
    href: "https://www.linkedin.com/posts/technexuscommunity_microsoftai-azureopenai-aiinnovation-activity-7302707221094666241-9zWP?utm_source=share&utm_medium=member_desktop&rcm=ACoAACKWXU0BijJEUI16M7ei08EhKNgho2RX3xM"
  },
  {
    src: "/networking-5.png",
    href: "https://www.linkedin.com/posts/priyanka-s-b79401142_thats-a-wrap-for-serverlessdays-bengaluru-activity-7235948907954892802-3tpT?utm_source=share&utm_medium=member_desktop"
  },
  {
    src: "/networking-6.png",
    href: "https://www.linkedin.com/posts/priyanka-s-b79401142_githubconstellation-oss-developercommunity-activity-7206725289031196673-8D-l?utm_source=share&utm_medium=member_desktop"
  },
  {
    src: "/networking-7.png",
    href: "https://x.com/lassiecoder/status/1836049315778678872"
  },
  {
    src: "/networking-8.png",
    href: "https://x.com/lassiecoder/status/1829883911675183349"
  },
  {
    src: "/networking-9.png",
    href: "https://www.linkedin.com/posts/priyanka-s-b79401142_gittogether-gittogetherbengaluru-opensource-activity-7233815879728123904-XVV9?utm_source=share&utm_medium=member_desktop"
  },
  {
    src: "/networking-10.png",
    href: "https://x.com/adityaoberai1/status/1763221813625331791"
  },
  {
    src: "/networking-11.png",
    href: "https://www.linkedin.com/posts/priyanka-s-b79401142_elevatevirtualconference-girlgeekx-networking-activity-7204481662913544193-aFAM?utm_source=share&utm_medium=member_desktop"
  },
  {
    src: "/networking-12.png",
    href: "https://x.com/edjgeek/status/1830168978603282712"
  },
  {
    src: "/networking-13.png",
    href: "https://x.com/lassiecoder/status/1823067516165308606"
  },
  {
    src: "/networking-14.png",
    href: "https://www.linkedin.com/posts/priyanka-s-b79401142_gittogether-opensource-techcommunity-activity-7215039647247159296-g6qD?utm_source=share&utm_medium=member_desktop"
  }
];
