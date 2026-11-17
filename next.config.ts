import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* lets a phone on the same Wi-Fi open the dev server */
  allowedDevOrigins: ["192.168.*.*", "10.*.*.*", "172.*.*.*"],
};

export default nextConfig;
