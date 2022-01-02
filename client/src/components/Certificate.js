import React from 'react'

function Certificate() {
  return (
		<div className="flex py-16 px-6 bg-[#f7faff]">
			<div className="flex-1 flex items-center justify-center">
				<img src="/images/certificate.svg" alt="" className="h-64" />
			</div>
			<div className="flex flex-col flex-1 px-10">
				<div className="capitalize font-bold text-4xl text-slate-900">
					International Travel Certificate
				</div>
				<div className="text-xl text-slate-600 font-medium mt-6">
					Ready to travel the world? Complete your vaccination and get a
					certificate now.
				</div>

				<div className="mt-4 flex gap-4">
					<span className="border-blue-600 border-2 text-blue-600 px-8 py-3 rounded-r-full rounded-l-full font-semibold mt-4 w-max shadow-lg cursor-pointer bg-transparent">
						How to download
					</span>
					<span className="bg-blue-600 text-white px-8 py-3 rounded-r-full rounded-l-full font-semibold mt-4 w-max shadow-lg cursor-pointer">
						Get Certificate
					</span>
				</div>
			</div>
		</div>
	);
}

export default Certificate
