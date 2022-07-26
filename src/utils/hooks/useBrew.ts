import cuid from "cuid";
import useLocalStorage from "./useLocalStorage";

import { useMemo } from "react";
import { Brew, Brews } from "../types";

const useBrews = () => {
	const [brews, setBrews] = useLocalStorage<Brews>("tasteForms", []);

	const sortForms = () => {
		let sortedForms = brews.sort(function (a, b) {
			const nameA = a.name.toUpperCase(); // ignore upper and lowercase
			const nameB = b.name.toUpperCase(); // ignore upper and lowercase
			if (nameA < nameB) {
				return -1;
			}
			if (nameA > nameB) {
				return 1;
			}

			// names must be equal
			return 0;
		});
		return sortedForms;
	};

	const addBrew = (brew: Brew) => {
		setBrews([
			...brews,
			{ ...brew, id: cuid(), created: new Date().toISOString() },
		]);
	};
	const removeBrew = (id: string) => {
		setBrews(brews.filter((brew) => brew.id !== id));
	};

	const updateBrew = (id: string, newBrew: Brew) => {
		setBrews(brews.map((brew) => (brew.id === id ? { ...newBrew, id } : brew)));
	};

	const memoBrews = useMemo(() => sortForms(), [brews]);
	return { brews: memoBrews, addBrew, removeBrew, updateBrew };
};

export default useBrews;
