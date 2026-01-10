"use client";

import { OutfitMedium, OutfitRegular, OutfitSemiBold } from "@/utils/fonts";

import Link from "next/link";

export default function About() {
	return (
		<section>
			<h2 className={`${OutfitSemiBold.className} mb-3 text-start text-2xl text-[#fafafa]`}>About</h2>

			<p className={`w-full max-w-3xl text-justify text-sm text-[#fafafa]/80 md:text-base ${OutfitRegular.className}`}>
				I am an experienced Software Engineer based in{" "}
				<Link
					href={"https://cs.wikipedia.org/wiki/Ostrava"}
					target="_blank"
					rel="noopener noreferrer"
					className={`${OutfitMedium.className} underline decoration-[#fafafa]/40 underline-offset-4 transition-colors duration-300 hover:text-[#fafafa] hover:decoration-[#fafafa]`}
				>
					Ostrava
				</Link>{" "}
				with over five years of experience building modern, high performance, and fully responsive websites. I specialize in{" "}
				<Link
					href={"https://react.dev/"}
					target="_blank"
					rel="noopener noreferrer"
					className={`${OutfitMedium.className} underline decoration-[#fafafa]/40 underline-offset-4 transition-colors duration-300 hover:text-[#fafafa] hover:decoration-[#fafafa]`}
				>
					React
				</Link>{" "}
				based solutions with a strong focus on clean code, user experience, and scalability. With more than 70 completed projects
				for large businesses and e-commerce platforms, I help clients turn ideas into reliable digital products that drive growth.
			</p>
		</section>
	);
}
