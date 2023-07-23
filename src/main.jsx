import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./Components/Home/Home";
import Login from "./Components/Authentication/Login";
import Register from "./Components/Authentication/Register";
import College from "./Components/College/College";
import MyCollege from "./Components/MyCollege/MyCollege";
import Admission from "./Components/Admission/Admission";
import CollegeDetails from "./Components/College/CollegeDetails";
const router = createBrowserRouter([
	{
		path: "/",
		element: <App></App>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/college",
				element: <College></College>,
			},
			{
				path: "/college/:id",
				element: <CollegeDetails></CollegeDetails>,
				loader: ({ params }) =>
					fetch("../public/data.json")
						.then((res) => res.json())
						.then((data) =>
							data.find((college) => college.id === parseInt(params.id))
						),
			},
			{
				path: "/mycollege",
				element: <MyCollege></MyCollege>,
			},
			{
				path: "/admission",
				element: <Admission></Admission>,
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/register",
				element: <Register></Register>,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
