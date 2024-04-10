import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { SparklesCore } from "@/components/ui/sparkles";
import Typewriter from 'typewriter-effect';


export default function HomeScreen() {
  return (
    <div className="h-screen">
   {/* home screen */}
   <Footer />

      <div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1 className="md:text-6xl text-2xl lg:text-6xl font-bold text-center text-white relative z-20 mt-30">
        <div className="flex header-container">
          <div className="mr-4 title-box">
            <p className="text">Hi! I'm </p>
          </div>
          <div className="subtitle-box">
            <p className="text">
              <Typewriter
                options={{
                  strings: ['lassiecoder', 'Priyanka Sharma'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </p>
          </div>
        </div>

        </h1>
        <h3 className="md:text-xl text-sm lg:text-xl font-extralight text-center relative z-20 text-gray-400 mt-10 max-w-7xl mb-2 lg:mb-4 pl-4 pr-4">
          Software Developer, skilled at crafting both mobile and web solutions. <br />
          I thrive on challenges, love learning new skills, and aim to write clean, professional code. <br />
          I constantly seek opportunities to grow as a developer.
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
