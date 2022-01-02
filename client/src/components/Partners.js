import React from "react";

function Partners() {
	return (
		<div className="flex flex-col justify-center items-center p-16">
			<div className="text-slate-900 text-4xl font-bold">Our Partners</div>
			<div className="flex gap-16 mt-8">
				<img src="/images/digilocker.png" alt="" />
				<img src="/images/umang.png" alt="" />
				<img src="/images/arogyasetu.png" alt="" />
				<img src="/images/mygov.png" alt="" />
			</div>
			<div className="flex gap-14 mt-8 text-xl text-blue-600">
				<span className="cursor-pointer">View More</span>
				<span className="cursor-pointer">Register As Partner</span>
			</div>
		</div>
	);
}

export default Partners;
