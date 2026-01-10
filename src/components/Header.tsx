"use client";

import { EMAIL_ADDRESS, SOCIAL_LINKS } from "@/utils/constants";
import { OutfitRegular, OutfitSemiBold } from "@/utils/fonts";

import { SiGithub, SiLinkedin, SiInstagram, SiMaildotru } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
	return (
		<section>
			<div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
				<div className="flex items-center gap-4">
					<div className="relative h-18 w-18 overflow-hidden rounded-full">
						<Image src="/AV.png" alt="AV" className="object-cover" draggable={false} fill priority />
					</div>

					<div>
						<h1 className={`mb-2 text-start text-3xl ${OutfitSemiBold.className} text-[#fafafa]`}>Alexandr Virgovič</h1>

						<p className={`text-start text-sm text-[#fafafa]/70 ${OutfitRegular.className}`}>
							Software Engineer & Entrepreneur
						</p>
					</div>
				</div>

				<div className="flex items-center gap-4">
					<Link
						href={SOCIAL_LINKS.GITHUB}
						target="_blank"
						rel="noopener noreferrer"
						className="rounded-lg border border-[#fafafa]/10 bg-[#fafafa]/5 p-2 transition-colors duration-300 hover:border-[#fafafa]/20 hover:bg-[#fafafa]/10"
					>
						<SiGithub size={20} color="#fafafa" />
					</Link>

					<Link
						href={SOCIAL_LINKS.LINKEDIN}
						target="_blank"
						rel="noopener noreferrer"
						className="rounded-lg border border-[#fafafa]/10 bg-[#fafafa]/5 p-2 transition-colors duration-300 hover:border-[#fafafa]/20 hover:bg-[#fafafa]/10"
					>
						<SiLinkedin size={20} color="#fafafa" />
					</Link>

					<Link
						href={SOCIAL_LINKS.INSTAGRAM}
						target="_blank"
						rel="noopener noreferrer"
						className="rounded-lg border border-[#fafafa]/10 bg-[#fafafa]/5 p-2 transition-colors duration-300 hover:border-[#fafafa]/20 hover:bg-[#fafafa]/10"
					>
						<SiInstagram size={20} color="#fafafa" />
					</Link>

					<Link
						href={`mailto:${EMAIL_ADDRESS}`}
						className="rounded-lg border border-[#fafafa]/10 bg-[#fafafa]/5 p-2 transition-colors duration-300 hover:border-[#fafafa]/20 hover:bg-[#fafafa]/10"
					>
						<SiMaildotru size={20} color="#fafafa" />
					</Link>
				</div>
			</div>
		</section>
	);
}
