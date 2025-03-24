import Footer from "@/components/footer";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2
} from "@tabler/icons-react";
import Image from "next/image";
import { FlipWords } from "@/components/ui/flip-words";
import { SparklesCore } from "@/components/ui/sparkles";

export default function HomeScreen() {
  const words = ["Hi! I'm Priyanka Sharma"];
  return (
    <div className="h-screen ">
      {/* home screen */}
      <Footer />
      <div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden">
        <h1 className="md:text-5xl text-2xl lg:text-6xl font-bold text-center text-white relative z-20 mt-30">
          <div className="flex header-container">
            <div className="subtitle-box ">
              <FlipWords duration={3000} words={words} />
            </div>
          </div>
        </h1>
        <h3 className="md:text-xl text-sm lg:text-xl font-medium text-center relative z-20 text-gray-400 mt-10 max-w-7xl mb-2 lg:mb-4 pl-8 pr-8">
          <p className="leading-relaxed">
            A <span className="text-white font-medium">Software Developer</span>{" "}
            specializing in <span className="text-white">frontend</span> and{" "}
            <span className="text-white">mobile app</span> development.
          </p>
          <p className="leading-relaxed">
            I thrive on challenges, passionate about{" "}
            <span className="text-white">learning new skills</span>,{/* </p> */}
            {/* <p className="leading-relaxed"> */} and{" "}
            <span className="text-white">dedicated to writing clean</span>,{" "}
            <span className="text-white">professional code</span>.
          </p>
        </h3>

        <div className="w-full h-40 relative">
          {/* Gradients */}
          <div className="absolute left-1/2 transform -translate-x-1/2 inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute left-1/2 transform -translate-x-1/2 inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute left-1/2 transform -translate-x-1/2 inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute left-1/2 transform -translate-x-1/2 inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.1}
            maxSize={1}
            particleDensity={2000}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
    </div>
  );
}

const links = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#"
  },

  {
    title: "Products",
    icon: (
      <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#"
  },
  {
    title: "Components",
    icon: (
      <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#"
  },
  {
    title: "Aceternity UI",
    icon: (
      <Image
        src="https://assets.aceternity.com/logo-dark.png"
        width={20}
        height={20}
        alt="Aceternity Logo"
      />
    ),
    href: "#"
  },
  {
    title: "Changelog",
    icon: (
      <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#"
  },

  {
    title: "Twitter",
    icon: (
      <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#"
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#"
  }
];
