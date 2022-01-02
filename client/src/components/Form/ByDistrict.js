import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function ByDistrict() {
	return (
		<div className="flex gap-8 items-center">
			<div className="w-64">
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">Select State</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						// value={age}
						// label="Select State"
						// onChange={handleChange}
					>
						<MenuItem value={10}>Ten</MenuItem>
						<MenuItem value={20}>Twenty</MenuItem>
						<MenuItem value={30}>Thirty</MenuItem>
					</Select>
				</FormControl>
			</div>

			<div className="w-64">
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">
						Select District
					</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						// value={age}
						// label="Select District"
						// onChange={handleChange}
						labelWidth={100}
					>
						<MenuItem value={10}>Ten</MenuItem>
						<MenuItem value={20}>Twenty</MenuItem>
						<MenuItem value={30}>Thirty</MenuItem>
					</Select>
				</FormControl>
			</div>

			<div className="bg-blue-600 text-white flex items-center justify-center px-8 rounded-full h-12 font-bold">
				Search
			</div>
		</div>
	);
}

export default ByDistrict;
