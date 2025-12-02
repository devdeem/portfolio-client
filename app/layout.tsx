//prettier-ignore
import { SpaceGroteskLight, SpaceGroteskRegular, SpaceGroteskMedium, SpaceGroteskSemiBold, SpaceGroteskBold, InterThin, InterExtraLight, InterLight, InterRegular, InterMedium, InterSemiBold, InterBold, InterExtraBold, InterBlack } from "@/lib/fonts";
import { DOMAIN_BASE_URL, DOMAIN_IMAGES } from "@/lib/constants";
import NavbarExport from "@/components/NavbarExport";
import "./globals.css";

import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
	metadataBase: new URL(DOMAIN_BASE_URL),
	applicationName: "deemdev.com",
	title: "Alexandr Virgovič — Full-Stack Engineer & Security Guard",
	description: "Passionate Full-Stack Engineer from the Czech Republic, specializing in TypeScript and Next.js.",
	keywords: [
		"alexandr virgovic",
		"deemdev",
		"deemdev.com",
		"web design",
		"website design",
		"google web designer",
		"website development",
		"responsive web design",
		"responsive design",
		"webdesigner",
		"web design company",
		"web page design",
		"website design agency",
		"ui developer",
		"website designer near me",
		"best website design",
		"siteinspire",
		"best portfolio websites",
	],
	generator: "Next.js",
	twitter: {
		card: "summary",
		title: "Alexandr Virgovič — Full-Stack Engineer & Security Guard",
		description: "Passionate Full-Stack Engineer from the Czech Republic, specializing in TypeScript and Next.js.",
		images: DOMAIN_IMAGES.LOGO_SYMBOL,
	},
	appleWebApp: {
		title: "Alexandr Virgovič — Full-Stack Engineer & Security Guard",
		statusBarStyle: "black-translucent",
	},
	openGraph: {
		siteName: "deemdev.com",
		url: new URL(DOMAIN_BASE_URL),
		title: "Alexandr Virgovič — Full-Stack Engineer & Security Guard",
		description: "Passionate Full-Stack Engineer from the Czech Republic, specializing in TypeScript and Next.js.",
		type: "website",
		locale: "en",
		images: [
			{
				url: DOMAIN_IMAGES.LOGO_SYMBOL,
				width: 512,
				height: 512,
				alt: "Alexandr.V",
				type: "image/png",
			},
		],
	},
	alternates: {
		canonical: DOMAIN_BASE_URL,
	},
	publisher: "Virgixo.com",
	category: "Developer Portfolio",
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
	themeColor: "#FFFFFF",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				suppressHydrationWarning
				className={`bg-[#0D0D0D] ${SpaceGroteskBold.className} ${SpaceGroteskLight.className} ${SpaceGroteskRegular.className} ${SpaceGroteskMedium.className} ${SpaceGroteskSemiBold.className} ${InterThin.className} ${InterExtraLight.className} ${InterLight.className} ${InterRegular.className} ${InterMedium.className} ${InterSemiBold.className} ${InterBold.className} ${InterExtraBold.className} ${InterBlack.className} antialiased`}
			>
				<NavbarExport />

				<main>{children}</main>
			</body>
		</html>
	);
}
