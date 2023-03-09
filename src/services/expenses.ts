import { http } from "./http";

const getExpenses = async () => {
	const { data } = await http.get("/expenses");

	return data;
};

export { getExpenses };
