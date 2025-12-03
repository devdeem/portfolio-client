import NotFoundExport from "@/components/NotFoundExport";
import { DOMAIN_IMAGES } from "@/lib/constants";

import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
	applicationName: "deemdev.com",
	title: "Alexandr Virgovič — Requested Page Could Not Be Found",
	//prettier-ignore
	description: "Lost? You're not alone. This is our 404 page. Use the menu or links to find your way back — or keep exploring the unknown corners of our site.",
	generator: "Next.js",
	twitter: {
		card: "summary",
		title: "Alexandr Virgovič — Requested Page Could Not Be Found",
		//prettier-ignore
		description: "Lost? You're not alone. This is our 404 page. Use the menu or links to find your way back — or keep exploring the unknown corners of our site.",
		images: DOMAIN_IMAGES.LOGO_SYMBOL,
	},
	appleWebApp: {
		title: "Alexandr Virgovič — Requested Page Could Not Be Found",
		statusBarStyle: "black-translucent",
	},
	openGraph: {
		siteName: "deemdev.com",
		title: "Alexandr Virgovič — Requested Page Could Not Be Found",
		//prettier-ignore
		description: "Lost? You're not alone. This is our 404 page. Use the menu or links to find your way back — or keep exploring the unknown corners of our site.",
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
	publisher: "Virgixo.com",
	category: "Developer Portfolio",
	creator: "Alexandr Virgovič",
};

export const viewport: Viewport = {
	initialScale: 1,
	minimumScale: 1,
	width: "device-width",
	themeColor: "#FFFFFF",
};

export default function NotFound() {
	return <NotFoundExport />;
}
