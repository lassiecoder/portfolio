import { StickyBanner } from "../components/ui/sticky-banner";
import { GiWhiteBook } from "react-icons/gi";

export function EbookStickyBanner() {
  return (
    <div className="relative flex w-full flex-col overflow-y-auto">
      <StickyBanner className="bg-gradient-to-r from-blue-800 via-purple-800 to-pink-800">
        <GiWhiteBook className="mr-2 text-yellow-400" />
        <p className="mx-0 max-w-[90%] text-white text-sm xs:text-xs drop-shadow-md">
          Check out my eBook: AI + Gemini for Web Developers - A Beginner&apos;s
          Practical Guide.{" "}
          <a
            href="https://fable.co/book/x-9798231622320"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-200 hover:underline font-semibold"
          >
            Download here
          </a>
        </p>
      </StickyBanner>
    </div>
  );
}
