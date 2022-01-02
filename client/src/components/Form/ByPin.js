import React from 'react'

function ByPin() {
  return (
		<div className="flex gap-4">
			<input placeholder="Enter your PIN" className="rounded-full border-2 px-4 w-96" />
			<div className="bg-blue-600 text-white flex items-center justify-center px-8 rounded-full h-12 font-bold">
				Search
			</div>
		</div>
	);
}

export default ByPin
