import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";

import Router from "routes/Router";

function App() {
	return (
		<>
			<ChakraProvider>
				<RouterProvider router={Router} />
			</ChakraProvider>
		</>
	);
}

export default App;
