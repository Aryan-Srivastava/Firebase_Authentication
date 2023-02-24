import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
	const { user, logOut } = UserAuth();

	const handleSignOut = async () => {
		try {
			await logOut();
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="navbar">
			<h2>Google authentication</h2>
			{user ? (
				<button onClick={handleSignOut}>Sign out</button>
			) : (
				<Link to="/signin">
					<button>Sign in</button>
				</Link>
			)}
		</div>
	);
};

export default Navbar;
