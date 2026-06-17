"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaYoutube } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";
import { IconMenu2, IconX, IconCode } from "@tabler/icons-react";

const navLinks = [
  {
    label: "Articles",
    href: "/articles",
    icon: <IoNewspaperOutline className="text-base" />,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: <IconCode className="h-4 w-4" />,
  },
  {
    label: "YouTube",
    href: "/youtube",
    icon: <FaYoutube className="text-base text-red-500" />,
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black shadow-[0_4px_24px_rgba(99,102,241,0.25)]">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-white font-bold text-base tracking-tight hover:text-gray-300 transition-colors"
        >
          lassiecoder
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href, icon }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 ${
                  active ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {icon}
                {label}
                {active && (
                  <motion.span
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-px "
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <IconX className="h-5 w-5" />
          ) : (
            <IconMenu2 className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-black/95 border-t border-indigo-500/30"
          >
            <div className="flex flex-col px-6 py-4 gap-5">
              {navLinks.map(({ label, href, icon }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                    pathname === href
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {icon}
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
