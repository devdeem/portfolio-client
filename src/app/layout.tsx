import { DOMAIN_BASE_URL } from "@/utils/constants";
import { siteConfig } from "@/utils/siteConfig";
import "@/styles/globals.css";

import {
	OutfitThin,
	OutfitExtraLight,
	OutfitLight,
	OutfitRegular,
	OutfitMedium,
	OutfitSemiBold,
	OutfitBold,
	OutfitExtraBold,
	OutfitBlack,
} from "@/utils/fonts";

import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
	metadataBase: new URL(siteConfig.metadata_base_url),
	applicationName: siteConfig.applicationName,
	title: siteConfig.title,
	description: siteConfig.description,
	keywords: [
		"Alexandr Virgovič",
		"deem",
		"deemdev",
		"deemdev.com",
		"web design",
		"website design",
		"google web designer",
		"website development",
		"responsive web design",
		"responsive design",
		"web designer",
		"web design company",
		"web page design",
		"website design agency",
		"ui developer",
		"website designer near me",
		"best website design",
		"site inspire",
		"portfolio website",
	],
	generator: "Next.js",
	twitter: {
		card: "summary",
		title: siteConfig.title,
		description: siteConfig.description,
		images: `${DOMAIN_BASE_URL}/Logo-White-Metadata.png`,
	},
	appleWebApp: {
		title: siteConfig.title,
		statusBarStyle: "black-translucent",
	},
	openGraph: {
		siteName: siteConfig.applicationName,
		title: siteConfig.title,
		description: siteConfig.description,
		type: "website",
		url: new URL(DOMAIN_BASE_URL),
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
	alternates: {
		canonical: "/",
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
	icons: [
		{
			rel: "icon",
			type: "image/png",
			sizes: "36x36",
			url: "/favicons/android-icon-36x36.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "48x48",
			url: "/favicons/android-icon-48x48.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "72x72",
			url: "/favicons/android-icon-72x72.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "96x96",
			url: "/favicons/android-icon-96x96.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "144x144",
			url: "/favicons/android-icon-144x144.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "192x192",
			url: "/favicons/android-icon-192x192.png",
		},
		{
			rel: "apple-touch-icon",
			type: "image/png",
			sizes: "57x57",
			url: "/favicons/apple-icon-57x57.png",
		},
		{
			rel: "apple-touch-icon",
			type: "image/png",
			sizes: "60x60",
			url: "/favicons/apple-icon-60x60.png",
		},
		{
			rel: "apple-touch-icon",
			type: "image/png",
			sizes: "72x72",
			url: "/favicons/apple-icon-72x72.png",
		},
		{
			rel: "apple-touch-icon",
			type: "image/png",
			sizes: "76x76",
			url: "/favicons/apple-icon-76x76.png",
		},
		{
			rel: "apple-touch-icon",
			type: "image/png",
			sizes: "114x114",
			url: "/favicons/apple-icon-114x114.png",
		},
		{
			rel: "apple-touch-icon",
			type: "image/png",
			sizes: "120x120",
			url: "/favicons/apple-icon-120x120.png",
		},
		{
			rel: "apple-touch-icon",
			type: "image/png",
			sizes: "144x144",
			url: "/favicons/apple-icon-144x144.png",
		},
		{
			rel: "apple-touch-icon",
			type: "image/png",
			sizes: "152x152",
			url: "/favicons/apple-icon-152x152.png",
		},
		{
			rel: "apple-touch-icon",
			type: "image/png",
			sizes: "180x180",
			url: "/favicons/apple-icon-180x180.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "16x16",
			url: "/favicons/favicon-16x16.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "32x32",
			url: "/favicons/favicon-32x32.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "96x96",
			url: "/favicons/favicon-96x96.png",
		},
		{
			rel: "shortcut icon",
			type: "images/x-icon",
			url: "/favicons/favicon.ico",
		},
	],
};

export const viewport: Viewport = {
	initialScale: 1,
	minimumScale: 1,
	width: "device-width",
	themeColor: "#fafafa",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				suppressHydrationWarning
				className={`bg-[#0a0a0a] ${OutfitThin.className} ${OutfitExtraLight.className} ${OutfitLight.className} ${OutfitRegular.className} ${OutfitMedium.className} ${OutfitSemiBold.className} ${OutfitBold.className} ${OutfitExtraBold.className} ${OutfitBlack.className} antialiased`}
			>
				<main>{children}</main>
			</body>
		</html>
	);
}
