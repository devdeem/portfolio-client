"use client";

import { OutfitMedium, OutfitRegular, OutfitSemiBold } from "@/utils/fonts";

//prettier-ignore
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiFramer, SiSvg, SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";

interface Project {
	title: string;
	description: string;
	logo?: string;
	tags?: {
		name: string;
		icon?: React.ReactNode;
	}[];
	link: string;
	comingSoon?: boolean;
}

const projects: Project[] = [
	{
		title: "Detailed SEO Checkup",
		description: "Boost your online visibility with instant SEO checks, competitive analysis and robust search analytics.",
		logo: "/projects/DSC.png",
		tags: [
			{ name: "JavaScript", icon: <SiJavascript color="#efd81d" /> },
			{ name: "HTML", icon: <SiHtml5 color="#ea6328" /> },
			{ name: "CSS", icon: <SiCss3 color="#2862e9" /> },
		],
		link: "https://chromewebstore.google.com/detail/iidnjfncdhleioleeoipbplceigldgdk?utm_source=item-share-cb",
	},
	{
		title: "NPM Watch",
		description: "Track NPM downloads, check package safety in seconds and turn live stats into beautiful embeds.",
		logo: "/projects/NPMWatch.png",
		tags: [
			{ name: "Next.js", icon: <SiNextdotjs color="#fafafa" /> },
			{ name: "TypeScript", icon: <SiTypescript color="#2f74c0" /> },
			{ name: "Motion", icon: <SiFramer color="#fafafa" /> },
			{ name: "TailwindCSS", icon: <SiTailwindcss color="#36b7f0" /> },
		],
		link: "https://www.npm.watch/",
	},
	{
		title: "Next Icons",
		description: "Lightweight icon component library for React and Next.js, designed for simplicity and seamless integration.",
		logo: "/projects/NextIcons.png",
		tags: [
			{ name: "Next.js", icon: <SiNextdotjs color="#fafafa" /> },
			{ name: "TypeScript", icon: <SiTypescript color="#2f74c0" /> },
			{ name: "TailwindCSS", icon: <SiTailwindcss color="#36b7f0" /> },
			{ name: "SVG", icon: <SiSvg color="#fafafa" /> },
		],
		link: "https://www.nexticons.com/",
	},
	{
		title: "Term Logger",
		description: "A simple & fast logger for better console formatted output.",
		tags: [{ name: "TypeScript", icon: <SiTypescript color="#2f74c0" /> }],
		link: "https://www.npmjs.com/package/term-logger",
	},
	{
		title: "PixeUI",
		description: "Get free, modern TailwindCSS components that save time and make your projects look amazing with no setup needed.",
		logo: "/projects/PixeUI.png",
		comingSoon: true,
		link: "#",
	},
];

export default function Projects() {
	return (
		<section>
			<h2 className={`${OutfitSemiBold.className} mb-4 text-start text-2xl text-[#fafafa]`}>My Projects</h2>

			<div className="grid grid-cols-1 gap-3 md:grid-cols-2">
				{projects?.map((project, index) => (
					<Link
						key={index}
						href={project?.comingSoon ? "#" : project?.link}
						target={project?.comingSoon ? undefined : "_blank"}
						rel="noopener noreferrer"
						onClick={(e) => project?.comingSoon && e.preventDefault()}
						className={`group relative flex flex-col overflow-hidden rounded-lg border border-dashed border-[#fafafa]/25 bg-transparent p-4 transition-all duration-300 ${
							project?.comingSoon ? "cursor-not-allowed opacity-70" : "hover:border-[#fafafa]/40"
						}`}
					>
						<div className="mb-2 flex items-center justify-between">
							<div className="flex items-center gap-2">
								{project?.logo && (
									<div className="relative h-6 w-6 overflow-hidden">
										<Image
											src={project?.logo}
											alt={project?.title}
											className="object-cover"
											fill
											draggable={false}
											priority
										/>
									</div>
								)}

								<h3 className={`text-base ${OutfitMedium.className} text-start leading-tight text-[#fafafa]`}>
									{project?.title || "Unknown"}
								</h3>
							</div>

							<div className="flex items-center">
								{project?.comingSoon ? (
									<span
										className={`rounded bg-[#fafafa]/10 px-2 py-0.5 text-[10px] ${OutfitMedium.className} text-[#fafafa]`}
									>
										Soon
									</span>
								) : (
									<GoArrowUpRight
										size={16}
										className="text-[#fafafa]/25 transition-colors duration-300 group-hover:scale-125 group-hover:text-[#fafafa]/70"
									/>
								)}
							</div>
						</div>

						<p className={`mb-6 line-clamp-2 text-start text-xs ${OutfitRegular.className} leading-relaxed text-[#fafafa]/60`}>
							{project?.description || "There is no description for this project"}
						</p>

						<div className="mt-auto flex flex-wrap items-center gap-2">
							{project?.tags?.map((tag, i) => (
								<div
									key={i}
									className={`flex items-center gap-1.5 rounded-full border border-[#fafafa]/5 bg-[#fafafa]/3 px-1.5 py-0.5 text-[10px] ${OutfitRegular.className} text-[#fafafa]/80`}
								>
									{tag?.icon ? (
										<span className="flex items-center justify-center [&>svg]:h-3 [&>svg]:w-3">{tag?.icon}</span>
									) : (
										<div className="h-1.5 w-1.5 rounded-full bg-[#fafafa]/50"></div>
									)}

									<span>{tag?.name || "Unknown"}</span>
								</div>
							))}
						</div>
					</Link>
				))}
			</div>
		</section>
	);
}
