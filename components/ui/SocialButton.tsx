"use client";

import { SpaceGroteskSemiBold } from "@/lib/fonts";
import { cn } from "@/lib/utils";

import { Youtube, Instagram, Linkedin, Link, Github } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

type SocialButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const SOCIAL_LINKS = [
	{ icon: Github, label: "GitHub", href: "https://github.com/devdeem" },
	{ icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/virgovica/" },
	{ icon: Instagram, label: "Instagram", href: "https://www.instagram.com/deemone0/" },
	{ icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@deemone0" },
];

export default function SocialButton({ className, ...props }: SocialButtonProps) {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	const [isVisible, setIsVisible] = useState(false);

	const handleShare = (index: number, href: string) => {
		setActiveIndex(index);
		setTimeout(() => setActiveIndex(null), 300);

		if (typeof window !== "undefined") {
			window.open(href, "_blank", "noopener,noreferrer");
		}
	};

	return (
		<div className="relative" onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
			<motion.div
				animate={{
					opacity: isVisible ? 0 : 1,
				}}
				transition={{
					duration: 0.5,
					ease: "easeInOut",
				}}
			>
				<button
					type="button"
					className={cn(
						"relative flex h-8 min-w-40 cursor-pointer items-center justify-center rounded-md",
						"bg-[#121212] text-center text-[#FFFFFF]",
						"border border-[#FFFFFF]/10",
						"transition-colors duration-500",
						className,
					)}
					{...props}
				>
					<span className="flex items-center gap-1.5">
						<Link size={18} />
						<span className={`${SpaceGroteskSemiBold.className} text-xs tracking-widest uppercase`}>Socials</span>
					</span>
				</button>
			</motion.div>

			<motion.div
				className="absolute top-0 left-0 flex h-8 overflow-hidden"
				animate={{
					width: isVisible ? "auto" : 0,
				}}
				transition={{
					duration: 0.3,
					ease: [0.23, 1, 0.32, 1],
				}}
			>
				{SOCIAL_LINKS.map((button, i) => (
					<motion.button
						type="button"
						key={`share-${button.label}`}
						aria-label={`Go to ${button.label}`}
						onClick={() => handleShare(i, button.href)}
						className={cn(
							"h-8 w-10 cursor-pointer",
							"flex items-center justify-center",
							"bg-[#FFFFFF] text-[#000000]",
							i === 0 && "rounded-l-md",
							i === 3 && "rounded-r-md",
							"border-r border-[#000000]/10 last:border-r-0",
							"relative overflow-hidden transition-colors duration-500 outline-none hover:bg-[#e5e7eb]",
						)}
						animate={{
							opacity: isVisible ? 1 : 0,
							x: isVisible ? 0 : -20,
						}}
						transition={{
							duration: 0.3,
							ease: [0.23, 1, 0.32, 1],
							delay: isVisible ? i * 0.05 : 0,
						}}
					>
						<motion.div
							className="relative z-10"
							animate={{
								scale: activeIndex === i ? 0.85 : 1,
							}}
							transition={{
								duration: 0.2,
								ease: "easeInOut",
							}}
						>
							<button.icon size={18} />
						</motion.div>

						<motion.div
							className="absolute inset-0 bg-[#000000]"
							initial={{ opacity: 0 }}
							animate={{
								opacity: activeIndex === i ? 0.15 : 0,
							}}
							transition={{
								duration: 0.2,
								ease: "easeInOut",
							}}
						/>
					</motion.button>
				))}
			</motion.div>
		</div>
	);
}
