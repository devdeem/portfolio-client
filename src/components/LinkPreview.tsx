"use client";

import * as HoverCard from "@radix-ui/react-hover-card";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";

interface LinkPreviewProps {
	alt?: string;
	href: string;
	className?: string;
	previewImage: string;
	children: React.ReactNode;
}

export default function LinkPreview({ href, children, previewImage, alt = "Image Preview", className }: LinkPreviewProps) {
	return (
		<HoverCard.Root openDelay={200} closeDelay={150}>
			<HoverCard.Trigger asChild>
				<Link href={href} target="_blank" rel="noopener noreferrer" className={className}>
					{children}
				</Link>
			</HoverCard.Trigger>

			<HoverCard.Portal>
				<HoverCard.Content align="center" sideOffset={10} className="z-50 w-80 overflow-hidden rounded-lg bg-[#0a0a0a]">
					<div className="relative aspect-video w-full">
						<Image src={previewImage} alt={alt} fill className="object-cover" sizes="288px" priority />
					</div>
				</HoverCard.Content>
			</HoverCard.Portal>
		</HoverCard.Root>
	);
}
