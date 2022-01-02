import React from "react";

function Steps() {
	return (
		<div className="flex flex-col justify-center items-center gap-8 bg-[#f7faff] py-16 px-6">
			<div className="text-4xl text-slate-900 font-bold">
				Get Vaccinated in 3 Easy Steps
			</div>
			<div className="flex p-8">
				<div className="text-center flex flex-col items-center gap-8">
					<div className="text-2xl text-slate-600 h-12 w-12 border-2 border-slate-400 rounded-full flex justify-center items-center font-bold">
						1 
					</div>
					<div className="text-xl text-slate-800 tracking-tighter w-1/2 font-semibold">
						Book an Appointment on Co-WIN or Walk into any Vaccination Center
					</div>
					<div className="shadow-xl p-4 rounded-lg bg-white">
						<div>
							<img src="/images/step1.png" alt="" className="h-56 rounded-md" />
						</div>
						<div>How to Book Your Appointment on Co-Win?</div>
					</div>
				</div>
				<div className="text-center flex flex-col items-center gap-8">
					<div className="text-2xl text-slate-600 h-12 w-12 border-2 border-slate-400 rounded-full flex justify-center items-center font-bold">
						2
					</div>
					<div className="text-xl text-slate-800 tracking-tighter w-1/2 font-semibold">
						Get Your Vaccination Safely at the Time of Your Appointment
					</div>
					<div className="shadow-xl p-4 rounded-lg bg-white">
						<div>
							<img src="/images/step2.png" alt="" className="h-56 rounded-md" />
						</div>
						<div>Do's and Don'ts for Getting Vaccinated</div>
					</div>
				</div>
				<div className="text-center flex flex-col items-center gap-8">
					<div className="text-2xl text-slate-600 h-12 w-12 border-2 border-slate-400 rounded-full flex justify-center items-center font-bold">
						3
					</div>
					<div className="text-xl text-slate-800 tracking-tighter w-1/2 font-semibold">
						Download Your Vaccination Certificate from Co-WIN and Wait for Dose
						#2
					</div>
					<div className="shadow-xl p-4 rounded-lg bg-white">
						<div>
							<img src="/images/step3.png" alt="" className="h-56 rounded-md" />
						</div>
						<div>Download Your Vaccine Certificate</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Steps;
