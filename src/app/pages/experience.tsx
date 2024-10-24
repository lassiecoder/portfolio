import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Timeline } from "@/components/ui/timeline";

export function Experience() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 770);
    };

    // Check screen size on initial render
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const data = [
    {
      title: (
        <Image
          src="https://github.com/user-attachments/assets/c83b3c79-2f5f-45cb-8d48-012b9b8e5135"
          alt="adecco-logo"
          width={200}
          height={60}
        />
      ),
      duration: "2023 – Present",
      smallScreenLogo: (
        <Image
          src="https://github.com/user-attachments/assets/6ae8d39c-889f-4152-8bf8-1c006c2f0047"
          alt="adecco-logo"
          width={50}
          height={50}
        />
      ),
      content: (
        <div className="max-w-4xl mx-auto">
          <div>
            <h1 className="text-3xl text-white mb-6">
              <p className="font-bold flex text-xl md:text-xl lg:text-2xl">
                Software Developer
              </p>

              {/* Show only if screen size is <= 770px */}
              {isSmallScreen && (
                <p className="font-light flex text-xs mt-2">
                  <span className="font-medium mr-2">The Adecco Group </span>
                  (May 2023 – Present)
                </p>
              )}

              {/* Show only if screen size is > 770px */}
              {!isSmallScreen && (
                <p className="text-gray-400 text-base md:text-sm mt-2 block italic">
                  (May 2023 – Present)
                </p>
              )}
            </h1>

            <div className=" text-gray-400 font-medium text-sm">
              <span className="text-white ">The Adecco Group</span> is a global{" "}
              <span className=" text-white">HR solutions company</span> that
              provides <span className=" text-white">workforce solutions</span>,
              including <span className=" text-white">recruitment</span>,{" "}
              <span className=" text-white">temporary staffing</span>,{" "}
              <span className=" text-white">career transition</span>,{" "}
              <span className=" text-white">talent development</span>, and{" "}
              <span className=" text-white">outsourcing services</span> to
              businesses across various industries.
            </div>
            <div className="text-sm text-gray-400 mt-8 font-medium">
              <p>
                At <span className="text-white ">Adecco Group</span>, I
                contribute to the development of the{" "}
                <span className=" text-white">Adecco India app</span>, which is
                utilized by top companies for staffing solutions.
                <p className="mt-2">
                  I also work on the{" "}
                  <span className=" text-white">global web app</span>, ensuring
                  it meets diverse needs across various regions. My expertise
                  includes using{" "}
                  <span className=" text-white">React Native</span> and{" "}
                  <span className=" text-white">React.js</span> to build
                  efficient, user-friendly applications.
                </p>
              </p>
              <p className="mt-2">
                Additionally, I have developed a{" "}
                <span className=" text-white">white-label solution</span>{" "}
                designed to streamline the candidate onboarding process,
                enhancing user experience and operational efficiency. This
                experience has honed my skills in creating scalable applications
                that facilitate better hiring and onboarding practices globally.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: (
        <Image
          src="https://github.com/user-attachments/assets/e84b5090-32a6-4287-8588-5f4cc9b40e3d"
          alt="torum-logo"
          width={120}
          height={40}
        />
      ),
      duration: "2023 – Present",
      smallScreenLogo: (
        <Image
          src="https://github.com/user-attachments/assets/a663c1b2-6887-4007-ba3d-4f07fc17d2c2"
          alt="torum-logo"
          width={60}
          height={60}
        />
      ),
      content: (
        <div className="max-w-4xl mx-auto">
          <div>
            <h1 className="text-3xl text-white mb-6">
              <p className="font-bold flex text-xl md:text-xl lg:text-2xl">
                Mobile Application Developer
              </p>
              {/* <p className="text-gray-400 text-base md:text-sm mt-2 block italic">
                (May 2022 – May 2023)
              </p> */}
              {isSmallScreen && (
                <p className="font-light flex text-xs mt-2">
                  <span className="font-medium mr-2">Torum</span>
                  (May 2022 – May 2023)
                </p>
              )}

              {/* Show only if screen size is > 770px */}
              {!isSmallScreen && (
                <p className="text-gray-400 text-base md:text-sm mt-2 block italic">
                  (May 2022 – May 2023)
                </p>
              )}
            </h1>

            <div className="text-sm text-gray-400 font-medium">
              <span className="text-white ">Torum</span> is a
              cryptocurrency-focused{" "}
              <span className=" text-white">social media platform</span> that
              connects <span className=" text-white">enthusiasts</span>,{" "}
              <span className=" text-white">investors</span>, and{" "}
              <span className=" text-white">developers</span>, allowing them to
              share <span className=" text-white">insights</span>, build{" "}
              <span className=" text-white">communities</span>, and earn{" "}
              <span className=" text-white">rewards</span> through content
              creation. It also includes features like a{" "}
              <span className=" text-white">marketplace</span> for buying and
              selling crypto and{" "}
              <span className=" text-white">educational resources</span>.
            </div>
            <div className="text-sm text-gray-400 mt-8 font-medium">
              <p>
                At <span className="text-white ">Torum</span>, I significantly
                enhanced user engagement by implementing effective
                <span className="text-white "> in-app </span> and{" "}
                <span className="text-white ">push notifications</span>,
                utilizing <span className="text-white "> deep linking </span>{" "}
                for smooth user redirection. I designed robust and user-friendly
                components, rigorously testing them to ensure scalability for
                future feature expansions.
              </p>
              <p className="mt-2">
                I also established streamlined{" "}
                <span className="text-white "> deployment processes </span>
                through the{" "}
                <span className=" text-white">Google Play Console</span>,
                facilitating seamless alpha and beta app distribution.
              </p>{" "}
              <p className="mt-2">
                To further{" "}
                <span className="text-white ">
                  optimize mobile app performance
                </span>{" "}
                and address slowness issues, I implemented several strategies. I
                improved the app&apos;s responsiveness by utilizing{" "}
                <span className="text-white ">lazy loading techniques</span> to
                load components only when needed, reducing initial load time. I
                also optimized images and other assets for{" "}
                <span className="text-white ">faster rendering</span>, ensuring
                that they are appropriately compressed and sized for mobile
                devices.
              </p>
              <p className="mt-2">
                Additionally, I created <span className="text-white "></span>
                comprehensive guidelines for mobile app{" "}
                <span className="text-white ">version control</span>,{" "}
                <span className="text-white ">commits</span>, and{" "}
                <span className="text-white ">pull request procedures</span>,
                providing essential support to my fellow developers. This
                approach not only{" "}
                <span className="text-white ">
                  improved operational efficiency
                </span>{" "}
                but also fostered a collaborative development environment.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: (
        <Image
          src="https://github.com/user-attachments/assets/2c438a5f-e9e4-4708-b711-aad7d4ef77e2"
          alt="edufund-logo"
          width={200}
          height={60}
        />
      ),
      smallScreenLogo: (
        <Image
          src="https://github.com/user-attachments/assets/8b07a22d-239e-4839-a559-a153fb01e1c3"
          alt="edufund-logo"
          width={300}
          height={80}
        />
      ),
      content: (
        <div className="max-w-4xl mx-auto">
          <div>
            <h1 className="text-3xl text-white mb-6">
              <p className="font-bold flex text-xl md:text-xl lg:text-2xl">
                Product Engineer
              </p>
              {/* <p className="text-gray-400 text-base md:text-sm mt-2 block italic">
                (Aug 2020 - May 2022)
              </p> */}
              {isSmallScreen && (
                <p className="font-light flex text-xs mt-2">
                  <span className="font-medium mr-2">EduFund</span>
                  (Aug 2020 - May 2022)
                </p>
              )}

              {/* Show only if screen size is > 770px */}
              {!isSmallScreen && (
                <p className="text-gray-400 text-base md:text-sm mt-2 block italic">
                  (Aug 2020 - May 2022)
                </p>
              )}
            </h1>

            <div className="text-sm text-gray-400 font-medium">
              <span className="text-white ">EduFund</span> is India&apos;s first
              dedicated{" "}
              <span className=" text-white">education savings platform</span>,
              helping parents plan financially for their children&apos;s higher
              education through <span className=" text-white">investment</span>,{" "}
              <span className=" text-white">cost discovery</span>, and{" "}
              <span className=" text-white">academic counseling</span>.
              <p className="mt-2">
                The app offers tools to estimate future college expenses, invest
                in various asset classes, secure education loans, and access
                academic guidance.
              </p>
            </div>

            <div className="text-sm text-gray-400 mt-8 font-medium">
              At <span className="text-white ">EduFund</span>, I led the
              implementation of{" "}
              <span className="text-white ">KYC verification processes</span>{" "}
              for investment account creation in{" "}
              <span className="text-white ">India</span> and the{" "}
              <span className="text-white ">United States</span>, streamlining
              the onboarding experience for non-KYC users. By leveraging
              third-party tools, I ensured secure data access through advanced
              biometric features such as{" "}
              <span className="text-white ">facial recognition</span> and{" "}
              <span className="text-white ">fingerprint scanning</span>.
              <p className="mt-2">
                To optimize user tracking and enhance marketing strategies, I
                integrated <span className="text-white ">Firebase</span> for
                comprehensive monitoring of user activities, allowing us to
                refine targeted marketing efforts based on demographic data.
                This integration of{" "}
                <span className="text-white ">push notifications</span> resulted
                in a remarkable <span className="text-white ">47%</span>{" "}
                increase in new user engagement.
              </p>
              <p className="mt-2">
                I also streamlined app building and deployment workflows by
                seamlessly integrating{" "}
                <span className="text-white ">Fastlane</span>, a third-party
                tool that automated our deployment processes. Additionally, I
                played a pivotal role in developing a{" "}
                <span className="text-white ">white-label solution</span> for{" "}
                <span className="text-white ">ICICI Bank</span>, leveraging{" "}
                <span className="text-white ">Next.js</span> technology to
                enhance our offerings. This multifaceted approach not only
                improved operational efficiency but also contributed to the
                overall growth of the platform.
              </p>
            </div>
          </div>
        </div>
      )
    }
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 mt-20 ">
      <div className="px-4">
        <h2 className="md:text-4xl text-2xl lg:text-4xl font-bold text-left pb-12 xl:pl-0 lg:mb-0 sm:mb-0 ">
          Experience
        </h2>
      </div>
      <Timeline data={data} />
    </div>
  );
}
