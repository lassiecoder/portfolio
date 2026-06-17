"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa";

const CHANNEL_HANDLE = "lassiecoder";
const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  viewCount: string;
  publishedAt: string;
}

const YouTubeSection = ({ maxResults = 3 }: { maxResults?: number }) => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const channelRes = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forHandle=${CHANNEL_HANDLE}&key=${API_KEY}`,
        );
        const channelData = await channelRes.json();
        const uploadsPlaylistId =
          channelData.items[0].contentDetails.relatedPlaylists.uploads;

        const playlistRes = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=${maxResults}&key=${API_KEY}`,
        );
        const playlistData = await playlistRes.json();

        const videoIds = playlistData.items
          .map(
            (item: { snippet: { resourceId: { videoId: string } } }) =>
              item.snippet.resourceId.videoId,
          )
          .join(",");

        const statsRes = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=statistics,snippet&id=${videoIds}&key=${API_KEY}`,
        );
        const statsData = await statsRes.json();

        const fetched: YouTubeVideo[] = statsData.items.map(
          (item: {
            id: string;
            snippet: {
              title: string;
              publishedAt: string;
              thumbnails: {
                high?: { url: string };
                default?: { url: string };
              };
            };
            statistics: { viewCount: string };
          }) => ({
            id: item.id,
            title: item.snippet.title,
            thumbnail:
              item.snippet.thumbnails.high?.url ||
              item.snippet.thumbnails.default?.url ||
              "",
            viewCount: parseInt(item.statistics.viewCount).toLocaleString(),
            publishedAt: new Date(item.snippet.publishedAt).toLocaleDateString(
              "en-US",
              { year: "numeric", month: "short", day: "numeric" },
            ),
          }),
        );

        setVideos(fetched);
      } catch (error) {
        console.error("Failed to fetch YouTube videos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [maxResults]);

  return (
    <div className="max-w-7xl mx-auto px-4  mt-20">
      <div className="px-4 mb-10">
        <h2 className="md:text-4xl text-2xl lg:text-4xl font-bold text-left text-white flex items-center gap-3">
          <FaYoutube className="text-red-500" />
          YouTube
        </h2>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="bg-zinc-900 rounded-xl animate-pulse h-64"
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {videos.map((video) => (
            <Link
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-zinc-900 rounded-xl overflow-hidden hover:ring-1 hover:ring-white/20 transition-all duration-300"
            >
              <div className="relative">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  width={480}
                  height={270}
                  className="w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <FaYoutube className="text-white text-5xl opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
                </div>
              </div>
              <div className="p-4">
                <p className="text-white text-sm font-medium line-clamp-2 group-hover:text-gray-200 transition-colors">
                  {video.title}
                </p>
                <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
                  <span>{video.viewCount} views</span>
                  <span>{video.publishedAt}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      <div className="flex justify-center mt-10">
        <Link
          href="https://www.youtube.com/@lassiecoder"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-white/20 text-white text-sm px-6 py-2.5 rounded-full hover:bg-white/5 transition-colors duration-200"
        >
          <FaYoutube className="text-red-500 text-lg" />
          View all on YouTube
        </Link>
      </div>
    </div>
  );
};

export default YouTubeSection;
