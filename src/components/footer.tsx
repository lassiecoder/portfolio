import ReactGA from "react-ga4";
import Image from "next/image";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaMailBulk
} from "react-icons/fa";
import Link from "next/link";
import { HiMiniBellAlert } from "react-icons/hi2";

export default function Footer() {
  const trackSponsorClick = () => {
    ReactGA.event("sponsorship_click_header", {
      category: "Sponsorship",
      label: "GitHub Sponsor Button"
    });
  };

  return (
    <div className="flex bg-black w-full items-center xl:px-8 lg:px-8 md:px-8 px-4 pt-6">
      {/* Container that changes between centered/between based on screen size */}
      <div className="w-full flex justify-between items-center">
        {/* Left Side - Both Links */}
        <div className="flex items-center space-x-3">
          <Link
            href={"https://github.com/sponsors/lassiecoder"}
            className="inline-flex items-center mr-2 w-[100px] h-[40px]"
            onClick={trackSponsorClick}
          >
            <Image
              src="/sponsor-icon.png"
              alt="Sponsor lassiecoder on GitHub"
              className="h-8 w-auto rounded-lg"
              width={100}
              height={10}
              style={{ width: "100%", height: "auto" }}
            />
          </Link>

          <div className="flex justify-center items-center">
            {/* <Link
              href={"https://forms.gle/MLcypaSbFCefBdza7"}
              target="_blank"
              className="flex items-center space-x-1 border-[0.8px] border-[#2c98e7] rounded-full px-4 py-1.5 text-xs text-white transition-all duration-300 hover:scale-105 hover:border-[#a855f7] hover:shadow-[0_0_8px_#9333ea]"
            >
              <div className="blob"></div>
              <span className="text-xs">Work with me</span>
            </Link> */}
            <Link
              href={"https://forms.gle/MLcypaSbFCefBdza7"}
              target="_blank"
              className="hidden md:flex items-center space-x-1 border-[0.8px] border-[#2c98e7] rounded-full px-4 py-1.5 text-xs text-white transition-all duration-300 hover:scale-105 hover:border-[#a855f7] hover:shadow-[0_0_8px_#9333ea]"
            >
              <div className="blob"></div>
              <span className="text-xs">Work with me</span>
            </Link>
          </div>
        </div>

        {/* Right Side - Social Icons */}
        <div className="flex space-x-5 md:space-x-8 items-center">
          <SocialLink
            href="https://github.com/lassiecoder"
            icon={FaGithub}
            label="GitHub"
          />
          <SocialLink
            href="https://www.linkedin.com/in/priyanka-s-b79401142/"
            icon={FaLinkedinIn}
            label="LinkedIn"
          />
          <SocialLink
            href="https://techscoop.hashnode.dev"
            icon={IoNewspaperOutline}
            label="Newsletter"
          />
          <SocialLink
            href="https://twitter.com/lassiecoder"
            icon={FaSquareXTwitter}
            label="Twitter"
          />
          <SocialLink
            href="https://instagram.com/lassiecoder"
            icon={FaInstagram}
            label="Instagram"
          />
          <SocialLink
            href="mailto:lassiecoder@gmail.com"
            icon={FaMailBulk}
            label="Mail"
          />
        </div>
      </div>
    </div>
  );
}

interface SocialLinkProps {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon: Icon, label }) => {
  return (
    <div className="relative group">
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <Icon className="text-white hover:text-gray-300 transition-colors duration-200 sm:text-xl lg:text-2xl" />
        <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-black text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {label}
        </span>
      </Link>
    </div>
  );
};
