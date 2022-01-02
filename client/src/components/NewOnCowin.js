import React from 'react'

function NewOnCowin() {
  return (
		<div className="bg-[#0e1229] text-white py-16 px-6 flex">
			<div className="w-1/4 text-4xl font-bold px-10">
				What's New on Co-WIN ?
			</div>
			<div className="flex flex-col ml-4 flex-1 pr-16">
				<details className="border-b-2 p-4 py-6">
					<summary  className="text-lg font-[500] w-3/4 cursor-pointer">
						Vaccine available for age group 15-18 yrs
					</summary>
					<div className="font-light mt-2">
						Children of age group 15-18 yrs can now register on Co-WIN portal
						using AADHAAR card, PAN Card, Unique Disability ID, Ration card with
						Photo and School Photo ID card. Only COVAXIN is approved for this
						age group currently.
					</div>
				</details>

				<details className="border-b-2 p-4 py-6">
					<summary  className="text-lg font-[500] w-3/4 cursor-pointer">
						New feature to Share Your Vaccination Status on different social
						media platforms
					</summary>
					<div className="font-light mt-2">
						This exciting new feature added to Co-WIN allows you to Share Your
						Vaccination Status now among your social circle. You need to be
						fully or partially vaccinated to use this feature.
					</div>
				</details>

				<details className="border-b-2 p-4 py-6">
					<summary  className="text-lg font-[500] w-3/4 cursor-pointer">
						You can download your vaccination certificate for International
						Travel
					</summary>
					<div className="font-light mt-2">
						This new feature allows fully vaccinated citizens to update existing
						photo identity to passport number and date of birth to get
						International Travel Certificate.
					</div>
				</details>

				<details className="border-b-2 p-4 py-6">
					<summary  className="text-lg font-[500] w-3/4 cursor-pointer">
						You can register as a foreign national on Co-WIN and get vaccinated
					</summary>
					<div className="font-light mt-2">
						New feature has been provided for foreign national. You can easily
						be vaccinated just by providing your basic details. If you have been
						administered with Dose 1 vaccine in foreign country, you'll have
						provide it's details to Vaccinator while going for Vaccination.
					</div>
				</details>

				<details className="border-b-2 p-4 py-6">
					<summary  className="text-lg font-[500] w-3/4 cursor-pointer">
						Citizens can link their passports to Co-WIN issued certificate by
						raising an issue in their accounts
					</summary>
					<div className="font-light mt-2">
						This is a new feature provided where you can link your passport by
						entering Passport number. In order to link your passport to the
						certificate you need to login into your Co-WIN portal and then raise
						an issue to get your passport linked by clicking on "Add Passport
						Details to my vaccination certificate"
					</div>
				</details>

				<details className="border-b-2 p-4 py-6">
					<summary  className="text-lg font-[500] w-3/4 cursor-pointer">
						Introducing “Raise an Issue” to Co-WIN for all your vaccine
						certificate and account related issues
					</summary>
					<div className="font-light mt-2">
						You can now get all your Issues related to your Vaccine Certificate
						at one place. All you need to do is to login to your Co-WIN portal
						and click on "Raise an Issue" . Multiple Issue options are provided.
						You can raise your concerned issues accordingly.
					</div>
				</details>

				<details className="p-4 py-6">
					<summary  className="text-lg font-[500] w-3/4 cursor-pointer">
						Check your eligibility for Dose 2 by signing in on Co-WIN with your
						registered mobile number
					</summary>
					<div className="font-light mt-2">
						Citizens administered with dose 1 can now check their eligibility
						for Dose 2 by performing a single step. "Login to your Co-WIN
						portal" and there you have your eligibility mention next to your
						name, highlighted as "No. of Days left for Dose 2".
					</div>
				</details>
			</div>
		</div>
	);
}

export default NewOnCowin
