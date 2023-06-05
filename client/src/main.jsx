import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.jsx";
import LinkDestination from "./pages/LinkDestination.jsx"
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/index.js";
import "./theme/fonts.css";
import {
	createBrowserRouter,
	RouterProvider,
  } from "react-router-dom";

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
		<ChakraProvider theme={theme}>
			<RouterProvider router={router} />
		</ChakraProvider>
	</React.StrictMode>
);
