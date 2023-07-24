/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();

	if (loading) {
		return (
			<div className="text-cyan-600 text-center text-9xl">
				<span className="loading loading-bars loading-xs"></span>
				<span className="loading loading-bars loading-sm"></span>
				<span className="loading loading-bars loading-md"></span>
				<span className="loading loading-bars loading-lg"></span>
			</div>
		);
	}
	if (user) {
		return children;
	}
	return (
		<Navigate to="/login" state={{ from: location }} replace={true}></Navigate>
	);
};

export default PrivateRoute;
