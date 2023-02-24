import Signin from "./pages/Signin";
import Account from "./pages/Account";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { UserAuth } from "./context/AuthContext.jsx";
import Navbar from "./components/Navbar";

function App() {
	const { user } = UserAuth();

	return (
		<div className="app">
			<Navbar />
			<Routes>
				<Route path="/" element={user ? <Home /> : <Signin />} />
				<Route path="/signin" element={<Signin />} />
				<Route
					path="/account"
					element={user ? <Account /> : <Signin />}
				/>
			</Routes>
		</div>
	);
}

export default App;
