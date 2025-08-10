import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/goat-demo",
  output: "export", // <=== enables static exports
  reactStrictMode: true,
};

module.exports = nextConfig;
