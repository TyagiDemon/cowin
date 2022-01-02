import React from 'react'

function RaiseIssue() {
  return (
		<div className="flex py-16 px-6">
			<div className="flex flex-col flex-1 px-10">
				<div className="capitalize font-bold text-4xl text-slate-900">
					Raise An Issue
				</div>
				<div className="text-xl text-slate-600 font-medium mt-6">
					Raise an issue or get solutions to your Co-WIN account and vaccination
					certificate related issues instantly.
				</div>
				<div className="flex text-xl text-blue-600 mt-8 tracking-tight font-[520]">
					<div className="flex-1 flex flex-col gap-8">
						<div>Certificates Corrections</div>
						<div>Report Unknown Member</div>
						<div>Transfer Member To New Number</div>
					</div>
					<div className="flex-1 flex flex-col gap-8">
						<div>Add Passport</div>
						<div>Merge Certificates</div>
					</div>
				</div>
			</div>
			<div className="flex-1 flex items-center justify-center">
				<img src="/images/raiseissue.svg" alt="" />
			</div>
		</div>
	);
}

export default RaiseIssue
