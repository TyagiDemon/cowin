import React from "react";

function Navbar() {
	return (
		<div className="absolute w-full">
			<div className="text-gray-200 bg-[#262626] text-lg">
				<div className="flex">
					<span className="bg-black transition py-3 px-5 cursor-pointer">
						Home
					</span>
					<span className="hover:bg-black transition py-3 px-5 cursor-pointer">
						Verify Certificate
					</span>
					<span className="hover:bg-black transition py-3 px-5 cursor-pointer">
						Share Vaccination Status
					</span>
				</div>
				{/* <div>
          <span>Skip </span>
        </div> */}
			</div>
			<div className="text-white bg-transparent/30 flex py-4 items-center px-3">
				<div>
					<div className="text-3xl font-bold">Co-WIN</div>
					<div className="text-sm font-light">Winning over Covid-19</div>
				</div>
				<div className="flex-1 flex flex-row-reverse gap-10 font-semibold items-center">
					<div className="border-2 rounded-r-full rounded-l-full py-1 px-4 cursor-pointer">
						Register/Login
					</div>
					<span className="cursor-pointer">Support</span>
					<span className="cursor-pointer">Resources</span>
					<span className="cursor-pointer">Platforms</span>
					<span className="cursor-pointer">Vaccination services</span>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
