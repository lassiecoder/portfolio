"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: React.ReactNode;
  content: React.ReactNode;
  smallScreenLogo: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  // const containerRef = useRef<HTMLDivElement>(null);
  // const containerRef = useRef<HTMLDivElement>(
  //   null!
  // ) as React.RefObject<HTMLElement>;
  const containerRef = useRef<HTMLDivElement>(null);

  const [height, setHeight] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 470);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  //   offset: ["start 10%", "end 50%"]
  // });
  const { scrollYProgress } = useScroll({
    target: containerRef as React.RefObject<HTMLElement>, // Ensure compatibility
    offset: ["start 10%", "end 50%"]
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full dark:bg-neutral-950  md:px-10" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto ">
        <>
          {isSmallScreen
            ? // Render SMALL SCREEN layout
              data.map((item, index) => (
                <div key={index} className="flex justify-start md:gap-10 pb-10">
                  {/* Sticky section with 20% width */}
                  <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start w-1/5 max-w-xs lg:max-w-sm md:w-1/5">
                    <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full dark:bg-black flex items-center justify-center">
                      <div className="">{item.smallScreenLogo}</div>
                    </div>
                  </div>

                  {/* Content section with 80% width */}
                  <div className="relative pl-4 pr-4 md:pl-4 w-4/5">
                    {!isSmallScreen && (
                      <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                        {item.title}
                      </h3>
                    )}

                    {item.content}
                  </div>
                </div>
              ))
            : // Render LARGE SCREEN layout
              data.map((item, index) => (
                <div key={index} className="flex justify-start md:gap-10 pb-10">
                  <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                    <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full dark:bg-black flex items-center justify-center">
                      <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-md md:pl-20 font-bold text-neutral-500 dark:text-neutral-500">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div className="relative pl-20 pr-4 md:pl-4 w-full">
                    <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                      {item.title}
                    </h3>
                    {item.content}
                  </div>
                </div>
              ))}
        </>
        {!isSmallScreen && (
          <div
            style={{
              height: height + "px"
            }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform
              }}
              {...{
                className:
                  "absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
