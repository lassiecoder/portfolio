import { FaMedium, FaSquareXTwitter } from "react-icons/fa6";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaDev,
  FaInstagram,
  FaMailBulk
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex bg-black xl:justify-end lg:justify-end md:justify-end xl:pr-8 lg:pr-8 md:pr-8 space-x-8 pt-6 pr-0 justify-center">
      <Link
        href="https://github.com/lassiecoder"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* <FaGithub size="1.5em" /> */}
        <FaGithub className="text-white hover:text-gray-300 transition-colors duration-200 sm:text-xl lg:text-2xl" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/priyanka-s-b79401142/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn className="text-white hover:text-gray-300 transition-colors duration-200 sm:text-xl lg:text-2xl" />
      </Link>
      <Link
        href="https://twitter.com/lassiecoder"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaSquareXTwitter className="text-white hover:text-gray-300 transition-colors duration-200 sm:text-xl lg:text-2xl" />
      </Link>
      <Link
        href="https://medium.com/@sharmapriyanka84510"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaMedium className="text-white hover:text-gray-300 transition-colors duration-200 sm:text-xl lg:text-2xl" />
      </Link>
      <Link
        href="https://dev.to/lassiecoder"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaDev className="text-white hover:text-gray-300 transition-colors duration-200 sm:text-xl lg:text-2xl" />
      </Link>
      <Link
        href="https://instagram.com/lassiecoder"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="text-white hover:text-gray-300 transition-colors duration-200 sm:text-xl lg:text-2xl" />
      </Link>
      <Link href="mailto:sharmapriyanka84510@gmail.com">
        <FaMailBulk className="text-white hover:text-gray-300 transition-colors duration-200 sm:text-xl lg:text-2xl" />
      </Link>
    </div>
  );
}
