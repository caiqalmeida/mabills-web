import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";

import { getExpenses } from "services/expenses";

import Router from "routes/Router";
import { useEffect } from "react";

function App() {
	useEffect(() => {
		const getResponse = async () => {
			try {
				const response = await getExpenses();
				console.log("success ", response);
			} catch (error) {
				console.log("error", error);
			}
		};
		getResponse();
	}, []);

	return (
		<>
			<ChakraProvider>
				<RouterProvider router={Router} />
			</ChakraProvider>
		</>
	);
}

export default App;
