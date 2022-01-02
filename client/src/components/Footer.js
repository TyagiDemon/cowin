import React from 'react'

function Footer() {
  return (
		<div className="bg-[#0e1229] text-white font-thin text-sm p-8">
			<div className="flex justify-between">
				<div className="flex flex-col gap-3">
					<div className="font-semibold mb-4">Vaccination Services</div>
					<div>Register Members</div>
					<div>Search Vaccination Centers</div>
					<div>Book Vaccination Slots</div>
					<div>Manage Appointment</div>
					<div>Download Certificate</div>
				</div>

				<div className="flex flex-col gap-3">
					<div className="font-semibold mb-4">Platforms</div>
					<div>Co-WIN International</div>
					<div>Vaccinator</div>
					<div>Department Login </div>
					<div>Verify Certificates</div>
					<div>Vaccination Statistics</div>
				</div>

				<div className="flex flex-col gap-3">
					<div className="font-semibold mb-4">Resources</div>
					<div>How To Get Vaccinated</div>
					<div>Dos and Don'ts</div>
					<div>Overview</div>
					<div>API Guidelines </div>
					<div>Open API's </div>
					<div>Grievance Guidelines </div>
				</div>

				<div className="flex flex-col gap-3">
					<div className="font-semibold mb-4">Support</div>
					<div>Frequently Asked Questions</div>
					<div>Certificate Corrections</div>
				</div>

				<div className="flex flex-col gap-3">
					<div className="font-semibold mb-4">Contact Us</div>
					<div>Helpline: +91-11-23978046 (Toll Free - 1075 )</div>
					<div>Technical Helpline: 0120 4473222</div>
				</div>
			</div>
			<div className="flex text-xs font-semibold mt-8">
				<div className="flex-1">
					Copyright © 2021 Co-WIN. All Rights Reserved{" "}
				</div>
				<div className="flex gap-48 pr-44">
					<span>Terms of Service</span>
					<span>Privacy Policy</span>
				</div>
			</div>
		</div>
	);
}

export default Footer
