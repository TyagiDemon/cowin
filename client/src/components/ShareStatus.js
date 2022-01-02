import React from 'react'

function ShareStatus() {
  return (
		<div className="flex py-16 px-6 bg-[#f7faff]">
			<div className="flex flex-col flex-1 px-10">
				<div className="capitalize font-bold text-4xl text-slate-900">
					Share Your vaccination status
				</div>
				<div className="text-xl text-slate-600 font-medium mt-6">
					Be a Fighter! If you are fully or partially vaccinated, you can now
					share your vaccination status in your social circle. Let's encourage
					our friends and followers in joining India's battle against COVID-19.{" "}
				</div>
				<span className="bg-blue-600 text-white px-6 py-3 rounded-r-full rounded-l-full font-semibold mt-4 w-max shadow-lg cursor-pointer">
					Share your status
				</span>
			</div>
			<div className="flex-1 flex items-center justify-center">
				<img src="/images/share-status-new.svg" alt="" className="h-64" />
			</div>
		</div>
	);
}

export default ShareStatus
