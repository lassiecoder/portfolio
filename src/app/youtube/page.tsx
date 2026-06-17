"use client";

import YouTubeSection from "@/app/pages/youtube";

export default function YouTubePage() {
  return (
    <main className="bg-black min-h-screen pb-10">
      <YouTubeSection maxResults={9} />

      <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md py-3 text-center text-xs text-gray-500">
        Always be caffeinated! | © Priyanka Sharma (lassiecoder)
      </div>
    </main>
  );
}
