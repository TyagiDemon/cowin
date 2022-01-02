import React, { useState, useEffect } from "react";

function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);

	const setClass=() => {
		if (
			window.pageYOffset >= document.getElementById("heroBottom").offsetTop -150
		) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	};
	useEffect(() => {
		setClass();
		window.onscroll = function () {
			setClass();
		}
	})
	return (
		<div className={`${isScrolled && "bg-[#0e1229]"} w-full fixed z-50`}>
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
				<div className="flex-1 flex flex-row-reverse gap-8 items-center font-light">
					<div className="border-2 rounded-r-full rounded-l-full py-1 px-6 cursor-pointer">
						Register/ Sign In
					</div>
					<span className="cursor-pointer">
						Support <span className="text-xs">▼</span>
					</span>
					<span className="cursor-pointer">
						Resources <span className="text-xs">▼</span>
					</span>
					<span className="cursor-pointer">
						Platforms <span className="text-xs">▼</span>
					</span>
					<span className="cursor-pointer">
						Vaccination services <span className="text-xs">▼</span>
					</span>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
