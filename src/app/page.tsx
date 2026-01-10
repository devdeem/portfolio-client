"use client";

import Header from "@/components/Header";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col items-start justify-start px-4 pt-14 pb-16 lg:pt-24 2xl:px-0">
			<div className="mx-auto max-w-3xl space-y-10 lg:space-y-16">
				<Header />
				<About />
				<TechStack />
				<Projects />
			</div>
		</div>
	);
}
