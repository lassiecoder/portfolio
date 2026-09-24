// Mirrors the basePath computed in next.config.mjs. next/image doesn't
// auto-prefix raw string `src`s with basePath when images.unoptimized is
// set, so local image paths need this applied manually.
export const withBasePath = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
