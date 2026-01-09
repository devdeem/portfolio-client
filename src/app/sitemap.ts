import { DOMAIN_BASE_URL } from "@/utils/constants";

import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: DOMAIN_BASE_URL,
			lastModified: new Date().toISOString(),
			changeFrequency: "monthly",
			priority: 1.0,
		},
	];
}
