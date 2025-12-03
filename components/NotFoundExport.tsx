"use client";

import { SpaceGroteskBold, SpaceGroteskRegular } from "@/lib/fonts";

const NotFoundExport = () => {
	return (
		<section className="flex min-h-screen flex-col justify-between px-6 pb-14 2xl:px-0">
			<div className="flex flex-1 items-center justify-center">
				<div
					className={`${SpaceGroteskBold.className} pointer-events-none text-[36vw] leading-normal text-[#FFFFFF] select-none sm:text-[30vw] md:text-[18vw]`}
					aria-hidden="true"
				>
					404
				</div>
			</div>

			<div className="flex flex-col items-center">
				<p
					className={`${SpaceGroteskRegular.className} max-w-6xl text-justify text-xs leading-normal tracking-[0.16em] text-[#FFFFFF] uppercase md:text-sm`}
				>
					Are you lost? Don&apos;t worry, we&apos;re all lost here. Welcome to the 404 page! I know what you&apos;re thinking:
					&quot;How did I get here?&quot; Well, it&apos;s easy. Just typing the wrong URL can lead you to the middle of nowhere,
					with big numbers staring back at you. But don&apos;t worry, you&apos;re not alone. We all end up here at some point.
					It&apos;s just part of the internet experience. Now you can try to navigate the website using the menu. Maybe the links
					will lead you to where you&apos;re trying to go. Or, maybe they&apos;ll just lead you to another 404 page. Either way,
					thanks for exploring!
				</p>
			</div>
		</section>
	);
};

export default NotFoundExport;
