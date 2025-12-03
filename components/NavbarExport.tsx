"use client";

import { SpaceGroteskMedium, SpaceGroteskSemiBold } from "@/lib/fonts";
import { DOMAIN_IMAGES, NAVBAR_LINKS } from "@/lib/constants";
import SocialButton from "@/components/ui/SocialButton";

import { Github, Instagram, Linkedin, Mails, Youtube } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";

const NavbarExport: React.FC = () => {
	const [isNavbarMenuOpen, setIsNavbarMenuOpen] = React.useState(false);

	React.useEffect(() => {
		const handleResizeScreen = () => {
			if (window?.innerWidth >= 1280) setIsNavbarMenuOpen(false);
		};

		window.addEventListener("resize", handleResizeScreen);
		return () => {
			window.removeEventListener("resize", handleResizeScreen);
		};
	}, []);

	React.useEffect(() => {
		if (isNavbarMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}

		return () => {
			document.body.style.overflow = "";
		};
	}, [isNavbarMenuOpen]);

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
									width={32}
									height={32}
									priority={true}
									draggable={false}
								/>
							</Link>

							<span className="hidden h-6 w-px bg-[#FFFFFF]/10 xl:block" />

							<div className="hidden items-center xl:flex">
								<ul className="flex items-center gap-8" aria-label="Navigation links" role="menubar">
									{NAVBAR_LINKS?.map((link) => (
										<li key={link?.href} role="none">
											<Link
												href={link?.href}
												aria-label={`Go to ${link?.label}`}
												aria-expanded={false}
												role="menuitem"
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

						<motion.button
							type="button"
							aria-label={`${isNavbarMenuOpen ? "Close menu" : "Open menu"}`}
							aria-expanded={isNavbarMenuOpen}
							aria-controls={isNavbarMenuOpen ? "mobile-menu" : undefined}
							className="relative z-60 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full xl:hidden"
							onClick={() => setIsNavbarMenuOpen((v) => !v)}
							animate={{ rotate: isNavbarMenuOpen ? 180 : 0 }}
							transition={{ duration: 0.3, ease: "easeInOut" }}
						>
							<motion.span
								aria-hidden="true"
								className={`absolute top-1/2 left-1/2 block h-[2px] w-8 -translate-x-1/2 transform bg-[#FFFFFF] transition duration-300 ease-in-out ${isNavbarMenuOpen ? "rotate-45" : "-translate-y-2"}`}
							/>
							<motion.span
								aria-hidden="true"
								className={`absolute top-1/2 left-1/2 block h-[2px] w-8 -translate-x-1/2 transform bg-[#FFFFFF] transition duration-300 ease-in-out ${isNavbarMenuOpen ? "opacity-0" : ""}`}
							/>
							<motion.span
								aria-hidden="true"
								className={`absolute top-1/2 left-1/2 block h-[2px] w-8 -translate-x-1/2 transform bg-[#FFFFFF] transition duration-300 ease-in-out ${isNavbarMenuOpen ? "-rotate-45" : "translate-y-2"}`}
							/>
						</motion.button>
					</div>
				</div>
			</nav>

			<AnimatePresence mode="wait">
				{isNavbarMenuOpen && (
					<motion.div
						role="dialog"
						id="mobile-menu"
						aria-modal="true"
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.4, ease: "easeInOut" }}
						className="fixed inset-0 z-50 h-full w-full bg-[#0D0D0D] xl:hidden"
					>
						<div className="mx-auto flex h-full flex-col justify-between px-6 pt-38 pb-6">
							<motion.ul
								aria-label="Navigation links for mobile menu"
								role="menubar"
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								transition={{
									duration: 0.4,
									ease: "easeOut",
									staggerChildren: 0.1,
								}}
								className="flex w-full flex-col gap-10"
							>
								{NAVBAR_LINKS?.map((link, i) => (
									<motion.li
										key={link?.label}
										role="none"
										initial={{ x: -20, opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										whileHover={{ x: 10 }}
										transition={{ duration: 0.2, ease: "easeOut" }}
									>
										<Link
											href={link?.href}
											aria-label={`Go to ${link?.label}`}
											onClick={() => setIsNavbarMenuOpen(false)}
											aria-expanded={false}
											role="menuitem"
											className={"group flex items-center"}
										>
											<motion.div
												initial={{ width: 0 }}
												animate={{ width: "10%" }}
												transition={{
													delay: 0.4 + 0.1 * i,
													duration: 0.4,
													ease: "easeOut",
												}}
												className="mr-6 h-px rounded-full bg-[#FFFFFF]"
											/>

											<span
												className={`block text-start text-xl tracking-widest text-[#FFFFFF] ${SpaceGroteskSemiBold.className} uppercase`}
											>
												{link?.label}
											</span>
										</Link>
									</motion.li>
								))}
							</motion.ul>

							<motion.div
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3, ease: "easeOut", delay: 0.8 }}
								className="flex w-full flex-col gap-4"
							>
								<div className="flex items-center justify-center gap-6">
									{[
										{ icon: Github, label: "GitHub", href: "https://github.com/devdeem" },
										{ icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/virgovica/" },
										{ icon: Instagram, label: "Instagram", href: "https://www.instagram.com/deemone0/" },
										{ icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@deemone0" },
									].map((social) => (
										<Link
											key={social?.href}
											href={social?.href}
											target="_blank"
											rel="noreferrer"
											aria-label={`Go to ${social?.label}`}
											className="flex h-12 w-12 items-center justify-center rounded-full border border-[#FFFFFF]/10 bg-[#121212] text-[#FFFFFF]"
										>
											<social.icon size={20} />
										</Link>
									))}
								</div>

								<Link
									href={"/contact"}
									aria-label="Go to contact"
									onClick={() => setIsNavbarMenuOpen(false)}
									className={`inline-flex w-full cursor-pointer items-center justify-center gap-3 text-center ${SpaceGroteskSemiBold.className} rounded bg-[#FFFFFF] px-6 py-2 text-sm text-[#000000] uppercase transition-colors duration-500 hover:bg-[#FFFFFF]/80`}
								>
									<Mails size={18} />
									Contact
								</Link>
							</motion.div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default NavbarExport;
