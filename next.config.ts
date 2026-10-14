import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactCompiler: true,
  allowedDevOrigins: [
    "*.run.app",
    "*.asia-southeast1.run.app",
    "*.googleusercontent.com",
    "*.aistudio.google.com",
    "ais-dev-r23obbshpssmr5i4nx5taq-854909306073.asia-southeast1.run.app",
    "ais-pre-r23obbshpssmr5i4nx5taq-854909306073.asia-southeast1.run.app",
  ],
};

export default nextConfig;

