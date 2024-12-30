"use client";

import React from "react";

interface TooltipProps {
  text: string; // The text to display
  tooltipText: string; // The content of the tooltip
  className?: string; // Optional className for styling the text
}

const Tooltip: React.FC<TooltipProps> = ({ text, tooltipText, className }) => {
  return (
    <span className={`relative group ${className || ""}`}>
      <span className="underline">{text}</span>
      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-purple-600 text-white text-sm font-light rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
        {tooltipText}
      </span>
    </span>
  );
};

export default Tooltip;
