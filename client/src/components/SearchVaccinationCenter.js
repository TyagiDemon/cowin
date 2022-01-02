import React, { useState } from "react";
import ByDistrict from "./Form/ByDistrict";
import ByPin from "./Form/ByPin";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";

function SearchVaccinationCenter() {
	const [value, setValue] = useState("1");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<div className="flex flex-col items-center justify-center py-10">
			<div className="text-center pb-4">
				<div className="text-4xl font-bold text-slate-900">
					Search Your Nearest Vaccination Center
				</div>
				<div className="text-xl text-slate-600 font-medium mt-4">
					Get a preview list of the nearest centers and check availability of
					vaccination slots
				</div>
				<div className="text-xl text-blue-600 font-semibold tracking-tighter font-sans mt-2">
					Login to book your slot
				</div>
			</div>

			{/* <ByDistrict /> */}
			<TabContext value={value}>
				<Box sx={{ width: "100%", bgcolor: "background.paper" }}>
					<Tabs
						value={value}
						onChange={handleChange}
						centered
						// className="flex justify-center"
					>
						<Tab label="Item One" value="1" />
						<Tab label="Item Two" value="2" />
						<Tab label="Item Three" value="3" />
					</Tabs>
				</Box>
				<TabPanel value="1">
					<ByDistrict />
				</TabPanel>
				<TabPanel value="2">
					<ByPin />
				</TabPanel>
        <TabPanel value="3">
          <div>
            <input placeholder="Search location for vaccination" className="w-96 p-4 border-2 rounded-full" />
          </div>
        </TabPanel>
			</TabContext>
		</div>
	);
}

export default SearchVaccinationCenter;
