import { useContext, createContext, useEffect, useState } from "react";
import {
	GoogleAuthProvider,
	FacebookAuthProvider,
	GithubAuthProvider,
	signInWithPopup,
	signInWithRedirect,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
	const [user, setUser] = useState({});

	const googleSignIn = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider);
		// signInWithRedirect(auth, provider);
	};

	const facebookSignIn = () => {
		const provider = new FacebookAuthProvider();
		signInWithPopup(auth, provider);
	};

	const githubSignIn = () => {
		const provider = new GithubAuthProvider();
		signInWithPopup(auth, provider);
	};

	const logOut = () => {
		signOut(auth);
	};

	useEffect(() => {
		const unsub = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			console.log(currentUser);
		});
		return () => {
			unsub();
		};
	}, []);

	return (
		<AuthContext.Provider
			value={{ githubSignIn, facebookSignIn, googleSignIn, logOut, user }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const UserAuth = () => {
	return useContext(AuthContext);
};
