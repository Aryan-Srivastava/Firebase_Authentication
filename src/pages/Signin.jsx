import React, { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Signin = () => {
	const { githubSignIn, facebookSignIn, googleSignIn, user } = UserAuth();
	const nav = useNavigate();

	const handleGoogleSignin = async () => {
		try {
			await googleSignIn();
		} catch (error) {
			console.log(error);
		}
	};

	const handleFacebookSignin = async () => {
		try {
			await facebookSignIn();
		} catch (error) {
			console.log(error);
		}
	};

	const handleGithubSignin = async () => {
		try {
			await githubSignIn();
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (user != null) {
			nav("/account");
		}
	}, [user]);
	return (
		<div className="signin">
			<button onClick={handleGoogleSignin}>Sign in with Google</button>
			<button onClick={handleFacebookSignin}>
				Sign in with Facebook
			</button>
			<button onClick={handleGithubSignin}>Sign in with GitHub</button>
		</div>
	);
};

export default Signin;
