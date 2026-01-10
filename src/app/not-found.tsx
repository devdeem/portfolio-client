import NotFoundExport from "@/components/layout/NotFoundExport";
import { DOMAIN_BASE_URL } from "@/utils/constants";
import { siteConfig } from "@/utils/siteConfig";

import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
	applicationName: siteConfig.applicationName,
	title: "Alexandr Virgovič ~ Requested page was not found",
	description: "The page you are looking for does not exist, or has been moved. Please check the requested URL and try again.",
	generator: "Next.js",
	twitter: {
		card: "summary",
		title: "Alexandr Virgovič ~ Requested page was not found",
		description: "The page you are looking for does not exist, or has been moved. Please check the requested URL and try again.",
		images: `${DOMAIN_BASE_URL}/Logo-White-Metadata.png`,
	},
	appleWebApp: {
		title: "Alexandr Virgovič ~ Requested page was not found",
		statusBarStyle: "black-translucent",
	},
	openGraph: {
		siteName: siteConfig.applicationName,
		title: "Alexandr Virgovič ~ Requested page was not found",
		description: "The page you are looking for does not exist, or has been moved. Please check the requested URL and try again.",
		type: "website",
		locale: "en",
		images: [
			{
				url: `${DOMAIN_BASE_URL}/Logo-White-Metadata.png`,
				width: 512,
				height: 512,
				alt: "AV",
				type: "image/png",
			},
		],
	},
	publisher: "Alexandr Virgovič",
	category: "Portfolio",
	authors: [
		{
			name: "Alexandr Virgovič",
			url: "https://www.deemdev.com",
		},
	],
	creator: "Alexandr Virgovič",
};

export const viewport: Viewport = {
	initialScale: 1,
	minimumScale: 1,
	width: "device-width",
	themeColor: "#fafafa",
};

export default function NotFound() {
	return <NotFoundExport />;
}
