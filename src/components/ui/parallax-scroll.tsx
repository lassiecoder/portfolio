"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "../utils/cn";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";

export const ParallaxScroll = ({
  items,
  className,
}: {
  items: { src: string; href: string }[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateFourth = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateFifth = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Adjust the division to create 5 parts instead of 4
  const fifth = Math.ceil(items.length / 5);

  const firstPart = items.slice(0, fifth);
  const secondPart = items.slice(fifth, 2 * fifth);
  const thirdPart = items.slice(2 * fifth, 3 * fifth);
  const fourthPart = items.slice(3 * fifth, 4 * fifth);
  const fifthPart = items.slice(4 * fifth);

  return (
    <div
      className={cn(
        "h-[40rem] items-start overflow-y-auto w-full pb-6",
        className
      )}
      ref={gridRef}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-start max-w-7xl mx-auto gap-10 py-0">
        <div className="grid gap-10">
          {firstPart.map(({ src, href }, idx) => (
            <motion.div style={{ y: translateFirst }} key={"grid-1" + idx}>
              <Link href={href} target="_blank">
                <Image
                  src={src}
                  className="w-full object-contain rounded-lg gap-10 !m-0 !p-0"
                  height="200"
                  width="200"
                  alt="networking"
                  layout="intrinsic"
                  priority
                />
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map(({ src, href }, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <Link href={href} target="_blank">
                <Image
                  src={src}
                  className="w-full object-contain rounded-lg gap-10 !m-0 !p-0"
                  height="200"
                  width="200"
                  alt="networking"
                  layout="intrinsic"
                  priority
                />
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map(({ src, href }, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              <Link href={href} target="_blank">
                <Image
                  src={src}
                  className="w-full object-contain rounded-lg gap-10 !m-0 !p-0"
                  height="200"
                  width="200"
                  alt="networking"
                  layout="intrinsic"
                  priority
                />
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {fourthPart.map(({ src, href }, idx) => (
            <motion.div style={{ y: translateFourth }} key={"grid-4" + idx}>
              <Link href={href} target="_blank">
                <Image
                  src={src}
                  className="w-full object-contain rounded-lg gap-10 !m-0 !p-0"
                  height="200"
                  width="200"
                  alt="networking"
                  layout="intrinsic"
                  priority
                />
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {fifthPart.map(({ src, href }, idx) => (
            <motion.div style={{ y: translateFifth }} key={"grid-5" + idx}>
              <Link href={href} target="_blank">
                <Image
                  src={src}
                  className="w-full object-contain rounded-lg gap-10 !m-0 !p-0"
                  height="200"
                  width="200"
                  alt="networking"
                  layout="intrinsic"
                  priority
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
