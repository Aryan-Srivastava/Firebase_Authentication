import React from "react";
import { UserAuth } from "../context/AuthContext";

const Account = () => {
	const { user, logOut } = UserAuth();

	const handleSignOut = async () => {
		try {
			await logOut();
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="account">
			<h2>Account</h2>
			<h3>Welcome, {user?.displayName}!</h3>
			<button onClick={handleSignOut}>Logout</button>
		</div>
	);
};

export default Account;
