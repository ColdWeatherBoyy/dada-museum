import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/index.js";
import "./theme/fonts.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<App />
		</ChakraProvider>
	</React.StrictMode>
);
