"use client";
import { create } from "zustand";
import { ExternalBear } from "./external-bear";

// Store mit Typen anlegen
interface BearState {
	bears: number;
	increasePopulation: () => void;
	decreasePopulation: () => void;
	removeAllBears: () => void;
	updateBears: (newBears: number) => void;
}

// Store erstellen
export const useStore = create<BearState>(set => ({
	bears: 0,
	increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
	decreasePopulation: () => set(state => ({ bears: state.bears - 1 })),
	removeAllBears: () => set({ bears: 0 }),
	updateBears: (newBears: number) => set({ bears: newBears })
}));

export const Bear = () => {
	// Zustand aus dem Store verwenden
	const bears = useStore(state => state.bears);
	const increasePopulation = useStore(state => state.increasePopulation);
	const decreasePopulation = useStore(state => state.decreasePopulation);

	return (
		<div className="p-3">
			<h1 className="m-4 font-bold text-3xl">Bear Population: {bears} bears</h1>
			<button className="my-4 w-full border rounded-sm bg-emerald-500 p-2 text-white" onClick={increasePopulation}>
				Increase
			</button>
			<button className="my-4 w-full border rounded-sm bg-fuchsia-500 p-2 text-white" onClick={decreasePopulation}>
				Decrease
			</button>
			<ExternalBear />
		</div>
	);
};
