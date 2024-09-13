"use client";

import { useStore } from "./bear";

export const ExternalBear = () => {
	const bears = useStore(state => state.bears);
	const removeAllBears = useStore(state => state.removeAllBears);

	// Zustand aus dem Store verwenden
	return (
		<div className="p-3">
			<h1 className="m-4 font-bold text-3xl">External Bear resets</h1>
			<button className="my-4 w-full border rounded-sm bg-slate-500 p-2 text-white" onClick={removeAllBears}>
				Exterminate all bears
			</button>
		</div>
	);
};
