"use client";

import { SpaceGroteskMedium, SpaceGroteskSemiBold } from "@/lib/fonts";
import { DOMAIN_IMAGES, NAVBAR_LINKS } from "@/lib/constants";
import SocialButton from "@/components/ui/SocialButton";

import { Mails } from "lucide-react";
import Image from "next/image";
import * as React from "react";
import Link from "next/link";

// TODO : Add navbar interface for mobile device

const NavbarExport: React.FC = () => {
	return (
		<>
			<nav
				role="navigation"
				aria-label="Main navigation"
				className="fixed top-0 right-0 left-0 z-60 bg-transparent py-4 backdrop-blur-md"
			>
				<div className="mx-auto max-w-7xl px-6 2xl:px-0">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-6">
							<Link href={"/"}>
								<Image
									src={DOMAIN_IMAGES.LOGO_SYMBOL}
									alt="Alexandr.V"
									width={30}
									height={30}
									priority={true}
									draggable={false}
								/>
							</Link>

							<span className="hidden h-6 w-px bg-[#FFFFFF]/10 xl:block" />

							<div className="hidden items-center xl:flex">
								<ul className="flex items-center gap-8" aria-label="Navigation links">
									{NAVBAR_LINKS?.map((link) => (
										<li key={link?.href}>
											<Link
												href={link?.href}
												aria-label={`Go to ${link?.label}`}
												className={`group relative ${SpaceGroteskMedium.className} text-sm tracking-widest text-[#FFFFFF]/80 uppercase transition-colors duration-500 hover:text-[#FFFFFF]`}
											>
												{link?.label}

												<span className="absolute -bottom-1 left-0 h-px w-0 bg-linear-to-r from-[#FFFFFF] to-transparent transition-all duration-500 ease-out group-hover:w-full" />
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>

						<div className="hidden items-center gap-4 xl:flex">
							<Link
								href={"/contact"}
								aria-label="Go to contact"
								className={`flex items-center justify-center gap-1.5 rounded-md bg-[#FFFFFF] px-8 py-1.5 text-xs tracking-widest text-[#000000] uppercase transition-colors duration-500 hover:bg-[#FFFFFF]/80 ${SpaceGroteskSemiBold.className}`}
							>
								<Mails size={18} />
								<span>Contact</span>
							</Link>

							<SocialButton />
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default NavbarExport;
