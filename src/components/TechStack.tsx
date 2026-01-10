"use client";

import { OutfitSemiBold } from "@/utils/fonts";

//prettier-ignore
import { SiReact, SiNextdotjs, SiSvelte, SiNpm, SiTypescript, SiJavascript, SiPython, SiGo, SiHtml5, SiCss3, SiDocker, SiNodedotjs, SiMongodb, SiMysql, SiRedis, SiPortainer, SiJetbrains, SiCloudflare, SiGit, SiGithub, SiGitlab, SiLinux, SiUbuntu, SiTailwindcss, SiGooglecloud } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import Marquee from "react-fast-marquee";
import Link from "next/link";

const TECH_STACK = [
	{ name: "React", icon: <SiReact />, url: "https://react.dev/" },
	{ name: "Next.js", icon: <SiNextdotjs />, url: "https://nextjs.org/" },
	{ name: "Svelte", icon: <SiSvelte />, url: "https://svelte.dev/" },
	{ name: "NPM", icon: <SiNpm />, url: "https://www.npmjs.com/" },
	{ name: "TypeScript", icon: <SiTypescript />, url: "https://www.typescriptlang.org/" },
	{ name: "JavaScript", icon: <SiJavascript />, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
	{ name: "Python", icon: <SiPython />, url: "https://www.python.org/" },
	{ name: "Go", icon: <SiGo />, url: "https://go.dev/" },
	{ name: "HTML", icon: <SiHtml5 />, url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
	{ name: "CSS", icon: <SiCss3 />, url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
	{ name: "Docker", icon: <SiDocker />, url: "https://www.docker.com/" },
	{ name: "Node.js", icon: <SiNodedotjs />, url: "https://nodejs.org/en" },
	{ name: "MongoDB", icon: <SiMongodb />, url: "https://www.mongodb.com/" },
	{ name: "MySQL", icon: <SiMysql />, url: "https://www.mysql.com/" },
	{ name: "Redis", icon: <SiRedis />, url: "https://redis.io/" },
	{ name: "Portainer", icon: <SiPortainer />, url: "https://www.portainer.io/" },
	{ name: "JetBrains", icon: <SiJetbrains />, url: "https://www.jetbrains.com/" },
	{ name: "CloudFlare", icon: <SiCloudflare />, url: "https://www.cloudflare.com/" },
	{ name: "Git", icon: <SiGit />, url: "https://git-scm.com/" },
	{ name: "GitHub", icon: <SiGithub />, url: "https://github.com/" },
	{ name: "GitLab", icon: <SiGitlab />, url: "https://about.gitlab.com/" },
	{ name: "Linux", icon: <SiLinux />, url: "http://www.linux.cz/" },
	{ name: "Ubuntu", icon: <SiUbuntu />, url: "https://www.ubuntu.cz/" },
	{ name: "Visual Studio Code", icon: <BiLogoVisualStudio />, url: "https://code.visualstudio.com/" },
	{ name: "Tailwind CSS", icon: <SiTailwindcss />, url: "https://tailwindcss.com/" },
	{ name: "Google Cloud", icon: <SiGooglecloud />, url: "https://cloud.google.com/" },
];

const midpoint = Math.ceil(TECH_STACK?.length / 2);
const firstHalf = TECH_STACK.slice(0, midpoint);
const secondHalf = TECH_STACK.slice(midpoint);

export default function TechStack() {
	return (
		<section>
			<h2 className={`${OutfitSemiBold.className} mb-4 text-start text-2xl text-[#fafafa]`}>Technologies</h2>

			<div className="flex w-full max-w-[90vw] flex-col gap-10 overflow-hidden md:max-w-3xl">
				<Marquee autoFill pauseOnHover speed={30} gradient={false} direction="left">
					{firstHalf.map((skill, index) => (
						<Link
							key={index}
							href={skill?.url}
							target="_blank"
							rel="noopener noreferrer"
							className="group mx-4 flex cursor-pointer flex-col items-center md:mx-6"
						>
							<span className="text-2xl text-[#fafafa]/60 transition-colors duration-300 group-hover:text-[#fafafa] md:text-3xl">
								{skill?.icon}
							</span>
						</Link>
					))}
				</Marquee>

				<Marquee autoFill pauseOnHover speed={30} gradient={false} direction="right">
					{secondHalf.map((skill, index) => (
						<Link
							key={index}
							href={skill?.url}
							target="_blank"
							rel="noopener noreferrer"
							className="group mx-4 flex cursor-pointer flex-col items-center md:mx-6"
						>
							<span className="text-2xl text-[#fafafa]/60 transition-colors duration-300 group-hover:text-[#fafafa] md:text-3xl">
								{skill?.icon}
							</span>
						</Link>
					))}
				</Marquee>
			</div>
		</section>
	);
}
