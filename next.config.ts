import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Exportação estática: o site pode ser alojado em qualquer lado
  // (Vercel, Netlify, Cloudflare Pages, ou até num alojamento partilhado).
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
