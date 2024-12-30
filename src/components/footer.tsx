import { FaMedium, FaSquareXTwitter } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaMailBulk
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex bg-black xl:justify-end lg:justify-end md:justify-end xl:pr-8 lg:pr-8 md:pr-8 space-x-8 pt-6 pr-0 justify-center">
      <div className="relative group">
        <Link
          href="https://github.com/lassiecoder"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <FaGithub size="1.5em" /> */}
          <FaGithub className="text-white hover:text-gray-300 transition-colors duration-200 sm:text-xl lg:text-2xl" />
          <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-black text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            GitHub
          </span>
        </Link>
      </div>

      <div className="relative group">
        <Link
          href="https://www.linkedin.com/in/priyanka-s-b79401142/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className="text-white hover:text-gray-300 transition-colors duration-200 sm:text-xl lg:text-2xl" />
          <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-black text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            LinkedIn
          </span>
        </Link>
      </div>

      <div className="relative group">
        <Link
          href="https://techscoop.hashnode.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoNewspaperOutline className="text-white hover:text-gray-300 transition-colors duration-200 sm:text-xl lg:text-2xl" />
          <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-black text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Newsletter
          </span>
        </Link>
      </div>

      <div className="relative group">
        <Link
          href="https://twitter.com/lassiecoder"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter className="text-white hover:text-gray-300 transition-colors duration-200 sm:text-xl lg:text-2xl" />
          <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-black text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Twitter
          </span>
        </Link>
      </div>

      <div className="relative group">
        <Link
          href="https://instagram.com/lassiecoder"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-white hover:text-gray-300 transition-colors duration-200 sm:text-xl lg:text-2xl" />
          <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-black text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Instagram
          </span>
        </Link>
      </div>

      <div className="relative group">
        <Link href="mailto:lassiecoder@gmail.com">
          <FaMailBulk className="text-white hover:text-gray-300 transition-colors duration-200 sm:text-xl lg:text-2xl" />
          <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-black text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Mail
          </span>
        </Link>
      </div>
    </div>
  );
}
