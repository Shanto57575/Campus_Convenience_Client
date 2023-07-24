import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import Lottie from "lottie-react";
import login from "../../assets/signup.json";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
	const { createUser } = useContext(AuthContext);

	const [success, setSuccess] = useState(" ");
	const [error, setError] = useState(" ");

	const emailRef = useRef();

	const handleRegister = (event) => {
		event.preventDefault();

		setSuccess(" ");
		setError(" ");

		const form = event.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;
		const confirm = form.confirm.value;

		if (password.length < 6) {
			setError("password must contain 6 characters");
			return;
		} else if (password !== confirm) {
			setError("Password didn't Match!!!");
			return;
		} else if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
			setError("Password must have at least one special character.");
			return;
		}

		createUser(email, password)
			.then((result) => {
				console.log(result.user);
				Swal.fire({
					title: "Account created successfully",
					showClass: {
						popup: "animate__animated animate__fadeInDown",
					},
					hideClass: {
						popup: "animate__animated animate__fadeOutUp",
					},
				});
				updateProfile(result.user, {
					displayName: name,
					photoURL:
						"https://media.istockphoto.com/id/1388645967/photo/pensive-thoughtful-contemplating-caucasian-young-man-thinking-about-future-planning-new.jpg?b=1&s=170667a&w=0&k=20&c=iSQUfWESVgOxHtV5X7lrNxxzaf4b7fMrmI3dXxrFNbQ=",
				})
					.then(() => {
						console.log("all okkkkkkkkkk");
					})
					.catch((error) => {
						setError(error.message);
					});
			})
			.catch((error) => {
				Swal.fire({
					icon: "error",
					title: error.message,
				});
			});

		form.reset();
	};

	return (
		<div className="font-serif font-extrabold bg-black">
			<div className="md:flex gap-5">
				<div className="md:w-1/2">
					<Lottie
						className="md:h-[800px] my-auto"
						animationData={login}
						loop={true}
					/>
				</div>

				<div className="md:w-1/2 relative flex flex-col justify-center min-h-screen overflow-hidden my-10">
					<div className="w-full p-6 m-auto border rounded-md shadow-xl lg:max-w-xl">
						<h1 className="text-white text-3xl font-serif font-extrabold text-center uppercase">
							Create an account
						</h1>
						<form onSubmit={handleRegister} className="mt-6">
							<div className="mb-2">
								<label className="text-white block text-sm font-semibold ">
									Name
								</label>
								<input
									type="text"
									name="name"
									placeholder="Name"
									className="block font-normal w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
									required
								/>
							</div>
							<div className="mb-2">
								<label className="text-white block text-sm font-semibold">
									Email
								</label>
								<input
									ref={emailRef}
									name="email"
									type="email"
									placeholder="Email"
									className="block font-normal w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
								/>
							</div>
							<div className="mb-2">
								<label className="text-white block text-sm font-semibold ">
									Password
								</label>
								<input
									name="password"
									type="password"
									placeholder="password"
									className="block font-normal w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
									required
								/>
							</div>
							<div className="mb-2">
								<label className="text-white block text-sm font-semibold ">
									Confirm Password
								</label>
								<input
									name="confirm"
									type="password"
									placeholder="Confirm password"
									className="block font-normal w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
									required
								/>
							</div>
							<div className="mb-2">
								<label className="text-white block text-sm font-semibold ">
									Photo Url
								</label>
								<input
									name="photo"
									type="url"
									placeholder="Photo Url"
									className="block font-normal w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
									required
								/>
							</div>
							<div className="mt-6">
								<button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-cyan-500 rounded-md hover:bg-cyan-600 focus:outline-none focus:bg-blue-400">
									Sign Up
								</button>
							</div>
						</form>
						<div className="relative flex items-center justify-center w-full mt-6 border border-t">
							<div className="absolute px-5 bg-white">Or</div>
						</div>
						<p className="text-white mt-8 text-sm font-light text-center">
							Already have an account?{" "}
							<Link
								to="/login"
								className="font-medium text-cyan-400  hover:underline"
							>
								Please login
							</Link>
						</p>
						<p className="text-center font-bold text-green-500">{success}</p>
						<p className="text-center font-bold text-red-500">{error}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
