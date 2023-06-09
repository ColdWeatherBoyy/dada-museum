// Necessary imports from Chakra, React, other components, styles, and more.
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./pages/App.jsx";
import LinkDestination from "./pages/LinkDestination.jsx";
import theme from "./theme/index.js";
import "./theme/fonts.css";

// Creates the router for the app
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/link",
		element: <LinkDestination />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		{/* Chakra provider for all theme extensions and use of Chakra components */}
		<ChakraProvider theme={theme}>
			{/* Router provider for use of React Router Dom */}
			<RouterProvider router={router} />
		</ChakraProvider>
	</React.StrictMode>
);
