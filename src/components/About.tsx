"use client";

import { OutfitMedium, OutfitRegular, OutfitSemiBold } from "@/utils/fonts";
import LinkPreview from "./LinkPreview";

export default function About() {
	return (
		<section>
			<h2 className={`${OutfitSemiBold.className} mb-3 text-start text-2xl text-[#fafafa]`}>About</h2>

			<p className={`w-full max-w-3xl text-justify text-sm text-[#fafafa]/80 md:text-base ${OutfitRegular.className}`}>
				I am an experienced Software Engineer based in{" "}
				<LinkPreview
					href="https://cs.wikipedia.org/wiki/Ostrava"
					previewImage="/link-preview/wikipedia.png"
					alt="Ostrava"
					className={`${OutfitMedium.className} underline decoration-[#fafafa]/40 underline-offset-4 transition-colors duration-300 hover:text-[#fafafa] hover:decoration-[#fafafa]`}
				>
					Ostrava
				</LinkPreview>{" "}
				with over five years of experience building modern, high performance, and fully responsive websites. I specialize in{" "}
				<LinkPreview
					href="https://react.dev/"
					previewImage="/link-preview/react.png"
					alt="React"
					className={`${OutfitMedium.className} underline decoration-[#fafafa]/40 underline-offset-4 transition-colors duration-300 hover:text-[#fafafa] hover:decoration-[#fafafa]`}
				>
					React
				</LinkPreview>{" "}
				based solutions with a strong focus on clean code, user experience, and scalability. With more than 70 completed projects
				for large businesses and e-commerce platforms, I help clients turn ideas into reliable digital products that drive growth.
			</p>
		</section>
	);
}
