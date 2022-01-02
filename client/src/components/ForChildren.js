import React from 'react'

function ForChildren() {
  return (
		<div className="flex py-16 px-6">
			<div className="flex-1 flex items-center justify-center">
				<img src="/images/children.svg" alt="" className="h-64" />
			</div>
			<div className="flex flex-col flex-1 px-10">
				<div className="text-4xl text-slate-900 font-bold">
					Vaccination for Children
				</div>
				<div className="text-xl text-slate-600 font-medium mt-6">
					Protect your child! Getting your children(15-18 yrs) vaccinated is the
					best thing you can do to protect them from COVID-19. Vaccination slots
					can now be booked for children aged 15-18 yrs. Both online and walk-in
					available.
				</div>
				<span className="bg-blue-600 text-white px-6 py-3 rounded-r-full rounded-l-full font-semibold mt-4 w-max shadow-lg cursor-pointer">
					Book Your Slot
				</span>
			</div>
		</div>
	);
}

export default ForChildren
