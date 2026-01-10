"use client";

import { OutfitRegular, OutfitSemiBold } from "@/utils/fonts";

const NotFoundExport = () => {
	return (
		<div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center overflow-hidden px-4 2xl:px-0">
			<h2 className={`text-center text-4xl uppercase lg:text-6xl ${OutfitSemiBold.className} text-[#fafafa]`}>Page Not Found</h2>

			<p className={`mt-6 max-w-md text-center text-base text-[#fafafa]/70 ${OutfitRegular.className}`}>
				The page you are looking for does not exist or has been moved.
			</p>
		</div>
	);
};

export default NotFoundExport;
