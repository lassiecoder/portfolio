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
          src="./us-based-startup.png"
          alt="adecco-logo"
          width={200}
          height={60}
          loading="lazy"
        />
      ),
      duration: "2025 – Present",
      smallScreenLogo: (
        <Image
          src="./us-based-startup-small.png"
          alt="adecco-logo"
          width={80}
          height={80}
          loading="lazy"
        />
      ),
      content: (
        <div className="max-w-4xl mx-auto">
          <div>
            <h1 className="text-3xl text-white mb-6">
              <p className="font-bold flex text-xl md:text-xl lg:text-2xl">
                SDE2
              </p>

              {/* Show only if screen size is <= 770px */}
              {isSmallScreen && (
                <p className="font-light flex text-xs mt-2">
                  <span className="font-medium mr-2">US-based Startup</span>
                  (Nov 2025 – Present)
                </p>
              )}

              {/* Show only if screen size is > 770px */}
              {!isSmallScreen && (
                <p className="text-gray-400 text-base md:text-sm mt-2 block italic">
                  (Nov 2025 – Present)
                </p>
              )}
            </h1>

            <div className="text-sm text-gray-400 mt-8 font-medium">
              <p>
                I work as a{" "}
                <span className="text-white ">full-stack engineer</span> across{" "}
                <span className="text-white ">web and mobile products</span>,
                building and shipping features end-to-end on{" "}
                <span className="text-white ">Next.js</span> and{" "}
                <span className="text-white ">Astro</span> for multiple client
                engagements.<br></br>
                <br></br> Engineered a complete{" "}
                <span className="text-white ">Stripe payment flow</span>{" "}
                covering the full transaction lifecycle, from checkout through{" "}
                <span className="text-white ">webhook-driven confirmation</span>
                . <br></br>
                <br></br>Managing backend infrastructure using{" "}
                <span className="text-white ">Appwrite</span>, spanning{" "}
                <span className="text-white ">database design</span>,{" "}
                <span className="text-white ">authentication</span>, and{" "}
                <span className="text-white ">serverless functions</span>, while
                leveraging <span className="text-white ">Cloudflare</span> for
                edge delivery, security, and performance optimization across
                production deployments.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: (
        <Image
          src="https://github.com/user-attachments/assets/c83b3c79-2f5f-45cb-8d48-012b9b8e5135"
          alt="adecco-logo"
          width={200}
          height={60}
          loading="lazy"
        />
      ),
      duration: "2023 – Present",
      smallScreenLogo: (
        <Image
          src="https://github.com/user-attachments/assets/6ae8d39c-889f-4152-8bf8-1c006c2f0047"
          alt="adecco-logo"
          width={50}
          height={50}
          loading="lazy"
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
                  (May 2023 – Nov 2025)
                </p>
              )}

              {/* Show only if screen size is > 770px */}
              {!isSmallScreen && (
                <p className="text-gray-400 text-base md:text-sm mt-2 block italic">
                  (May 2023 – Nov 2025)
                </p>
              )}
            </h1>

            <div className="text-sm text-gray-400 mt-8 font-medium">
              <p>
                At <span className="text-white ">Adecco Group</span>, I led a
                comprehensive{" "}
                <span className="text-white ">frontend refactor</span> to
                eliminate flawed data handling patterns, significantly improving
                application correctness and reducing technical debt. <br></br>
                <br></br>Overhauled{" "}
                <span className="text-white ">authentication flows</span> across{" "}
                <span className="text-white ">
                  candidate, associate, and client portals
                </span>
                , re-engineering{" "}
                <span className="text-white ">sign-in/sign-up screens</span> for
                measurably better performance and long-term maintainability.{" "}
                <br></br>
                <br></br>
                Architected a{" "}
                <span className="text-white ">
                  dual-track deployment pipeline
                </span>
                , automating mobile releases via{" "}
                <span className="text-white ">Fastlane</span> and standardizing
                web delivery through{" "}
                <span className="text-white ">GitOps workflows</span>, enabling
                consistent, repeatable deployments across environments.{" "}
                <br></br>
                <br></br> Extended the platform&apos;s feature surface by
                shipping{" "}
                <span className="text-white ">
                  push and in-app notification systems
                </span>{" "}
                alongside a{" "}
                <span className="text-white ">health insurance module</span>.{" "}
                <br></br>
                <br></br>Additionally, produced comprehensive{" "}
                <span className="text-white ">technical documentation</span> for
                two core product codebases, establishing clear reference
                material to accelerate onboarding and sustain maintainability at
                scale.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: (
        <Image
          src="https://github.com/user-attachments/assets/e84b5090-32a6-4287-8588-5f4cc9b40e3d"
          alt="torum-logo"
          width={120}
          height={40}
          loading="lazy"
        />
      ),
      duration: "2023 – Present",
      smallScreenLogo: (
        <Image
          src="https://github.com/user-attachments/assets/a663c1b2-6887-4007-ba3d-4f07fc17d2c2"
          alt="torum-logo"
          width={60}
          height={60}
          loading="lazy"
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

            <div className="text-sm text-gray-400 mt-8 font-medium">
              <p>
                At <span className="text-white ">Torum</span>, I elevated user
                engagement by engineering an{" "}
                <span className="text-white ">
                  in-app and push notification system
                </span>{" "}
                with{" "}
                <span className="text-white ">deep linking capabilities</span>,
                enabling contextual navigation directly to target screens from
                notification events. <br></br>
                <br></br>
                Designed and delivered scalable, user-friendly{" "}
                <span className="text-white ">UI components</span> backed by
                thorough testing strategies, ensuring the architecture could
                accommodate future feature expansion without regression risk.
                <br></br>
                <br></br>
                Established structured release distribution channels on the{" "}
                <span className="text-white ">Google Play Console</span>,
                configuring{" "}
                <span className="text-white ">alpha and beta tracks</span> to
                support staged rollouts and controlled QA cycles.<br></br>
                <br></br> Improved runtime performance and resolved persistent
                data consistency issues by migrating state management from{" "}
                <span className="text-white ">React Query</span> to{" "}
                <span className="text-white ">Redux</span>, rationalizing the
                data layer across the application. <br></br>
                <br></br>Standardized the team&apos;s engineering practices by
                authoring internal guidelines governing{" "}
                <span className="text-white ">version control strategies</span>,{" "}
                <span className="text-white ">commit conventions</span>, and{" "}
                <span className="text-white ">pull request procedures</span>,
                reducing review friction and improving collaboration across the
                mobile development team.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: (
        <Image
          src="https://github.com/user-attachments/assets/2c438a5f-e9e4-4708-b711-aad7d4ef77e2"
          alt="edufund-logo"
          width={200}
          height={60}
          loading="lazy"
        />
      ),
      smallScreenLogo: (
        <Image
          src="https://github.com/user-attachments/assets/8b07a22d-239e-4839-a559-a153fb01e1c3"
          alt="edufund-logo"
          width={300}
          height={80}
          loading="lazy"
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
              At <span className="text-white ">EduFund</span>, I delivered
              end-to-end{" "}
              <span className="text-white ">KYC verification flows</span> for
              both{" "}
              <span className="text-white ">
                Indian and US investment account creation
              </span>
              , enabling non-KYC users to complete onboarding seamlessly within
              regulatory compliance boundaries.
              <br></br>
              <br></br>
              Integrated{" "}
              <span className="text-white ">
                biometric authentication capabilities
              </span>
              , including{" "}
              <span className="text-white ">facial recognition</span> and{" "}
              <span className="text-white ">fingerprint scanning</span>, through
              third-party SDKs, strengthening data access security across the
              platform.<br></br>
              <br></br>
              Instrumented{" "}
              <span className="text-white ">Firebase Analytics</span> to capture
              granular user activity signals, enabling the marketing team to
              build precise, age-segmented targeting strategies.<br></br>
              <br></br> Drove a{" "}
              <span className="text-white ">47% increase</span> in new user
              activity by architecting a{" "}
              <span className="text-white ">push notification integration</span>{" "}
              designed around re-engagement triggers and personalized content
              delivery.<br></br>
              <br></br>
              Streamlined build and release workflows using{" "}
              <span className="text-white ">Fastlane</span>, reducing manual
              overhead in the{" "}
              <span className="text-white ">CI/CD pipeline</span> and
              standardizing deployment packaging. <br></br>
              <br></br>Architected and shipped a{" "}
              <span className="text-white ">white-label product variant</span>{" "}
              for <span className="text-white ">ICICI Bank</span>, a strategic
              banking partner, built on{" "}
              <span className="text-white ">NextJS</span>, delivering a fully
              branded, independently deployable experience tailored to their
              customer base.
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 mt-20 ">
      <div className="px-4">
        <h2 className="md:text-4xl text-2xl lg:text-4xl font-bold text-left pb-12 xl:pl-0 lg:mb-0 sm:mb-0 text-white">
          Experience
        </h2>
      </div>
      <Timeline data={data} />
    </div>
  );
}
