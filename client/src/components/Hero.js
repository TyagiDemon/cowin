import React from "react";

function Hero() {
	return (
		<div
			className="h-screen w-full flex items-center"
			style={{ backgroundImage: "url(/images/modiji.png)" }}
		>
			<div className="flex flex-col">
				<div className="text-white text-5xl font-semibold w-1/2 pl-10">
					"India is set to defeat Covid-19. Every Indian is making it possible."
				</div>
				<div className="text-white text-2xl pl-10 mt-4">- PM Narendra Modi</div>
				<div className="flex gap-8 pl-10 mt-8">
					<div className="rounded-r-full rounded-l-full bg-white px-10 py-4 font-semibold text-lg hover:opacity-50 cursor-pointer transition">
						Book Your Slot
					</div>
					<div className="rounded-r-full rounded-l-full text-white border-2 px-10 py-4 font-semibold text-lg hover:opacity-50 cursor-pointer transition">
						Verify certificate
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
