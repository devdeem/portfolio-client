import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactCompiler: true,
	devIndicators: false,
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "deemdev.com",
				pathname: "/public-assets/**",
			},
		],
	},
};

export default nextConfig;
