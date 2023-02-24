import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContexProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthContexProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</AuthContexProvider>
	</React.StrictMode>
);
