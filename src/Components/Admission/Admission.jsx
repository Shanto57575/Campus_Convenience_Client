import { useState } from "react";
import data from "../../../public/data.json";
import Swal from "sweetalert2";
import { Roll, Zoom } from "react-awesome-reveal";

const Admission = () => {
	const [selectedUni, setSelectedUni] = useState(" ");

	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const email = form.email.value;
		const subject = form.subject.value;
		const address = form.address.value;
		const dob = form.dob.value;
		const photo = form.photo.value;
		const phone = form.phone.value;
		const university = form.university.value;
		const info = {
			name,
			email,
			subject,
			address,
			dob,
			photo,
			phone,
			university,
		};
		console.log(info);
		fetch("https://campus-convenience-server.vercel.app/mycollege", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(info),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.insertedId) {
					Swal.fire({
						icon: "success",
						title: "Successful...",
						text: "Data added Successfully!",
					});
				}
			});
		form.reset();
	};

	const handleSelect = (_id) => {
		console.log(_id);
		const selectedUniversity = data.find((uni) => uni?.id === parseInt(_id));
		if (selectedUniversity) {
			setSelectedUni(selectedUniversity?.collegeName);
			console.log(selectedUniversity?.collegeName);
		}
		Swal.fire({
			position: "center",
			icon: "success",
			title: selectedUniversity?.collegeName + " university selected",
			text: "Now Fill Up the Form!",
			showConfirmButton: false,
			timer: 1500,
		});
	};
	return (
		<div className="mx-auto lg:mx-20 mb-20">
			<h1 className="text-center text-cyan-600 text-4xl font-serif font-bold my-10">
				Select Your Dream College!
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
				{data.map((item) => (
					<Roll key={item.id}>
						<div>
							<div className="card bg-base-100 shadow-xl image-full rounded-xl">
								<figure>
									<img src={item.collegeImage} alt="university" />
								</figure>
								<div className="card-body mx-auto font-serif">
									<h2 className="card-title uppercase">
										{item.collegeName} university
									</h2>
									<p>
										<span className="text-lg font-semibold text-cyan-300">
											Admission:{" "}
										</span>{" "}
										{item.admissionDates[0]} - {item.admissionDates[1]}
									</p>
									<button
										onClick={() => handleSelect(item.id)}
										type="button"
										className="w-full mx-auto text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
									>
										Select
									</button>
								</div>
							</div>
						</div>
					</Roll>
				))}
			</div>
			<div className="border p-5 lg:p-10 my-5 bg-cyan-950 rounded-lg text-white">
				<h1 className="text-center text-xl lg:text-3xl font-serif font-extrabold mb-10">
					Fill up the <span className="text-cyan-500">Form</span>
				</h1>
				<Zoom>
					<form onSubmit={handleSubmit} className="w-full px-5 lg:px-20">
						<div className="flex flex-wrap -mx-3 mb-6">
							<div className="w-full px-3 md:w-1/2 mb-6 md:mb-0">
								<label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
									Candidate Name{" "}
								</label>
								<input
									className="appearance-none block w-full bg-gray-200 text-black border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
									id="grid-first-name"
									type="text"
									name="name"
									placeholder="Candidate Name"
									required
								/>
							</div>
							<div className="w-full md:w-1/2 px-3">
								<label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
									Candidate Email
								</label>
								<input
									className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
									id="grid-last-name"
									name="email"
									type="email"
									placeholder="Candidate Email"
									required
								/>
							</div>
						</div>
						<div className="flex flex-wrap -mx-3 mb-6">
							<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
								<label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
									Subject
								</label>
								<input
									className="appearance-none block w-full bg-gray-200 text-black border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
									id="grid-first-name"
									name="subject"
									type="text"
									placeholder="Subject"
									required
								/>
							</div>
							<div className="w-full md:w-1/2 px-3">
								<label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
									Address
								</label>
								<input
									className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
									id="grid-last-name"
									name="address"
									type="text"
									placeholder="Address"
									required
								/>
							</div>
						</div>
						<div className="flex flex-wrap -mx-3 mb-6">
							<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
								<label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
									Date of Birth
								</label>
								<input
									className="appearance-none block w-full bg-gray-200 text-black border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
									id="grid-first-name"
									type="date"
									name="dob"
									placeholder="Date of Birth"
									required
								/>
							</div>
							<div className="w-full md:w-1/2 px-3">
								<label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
									Photo Url
								</label>
								<input
									className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
									id="grid-last-name"
									type="url"
									name="photo"
									placeholder="Photo Url"
									required
								/>
							</div>
						</div>
						<div className="flex flex-wrap -mx-3 mb-6">
							<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
								<label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
									Phone number
								</label>
								<input
									className="appearance-none block w-full bg-gray-200 text-black border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
									id="grid-first-name"
									type="text"
									name="phone"
									placeholder="Phone number"
									required
								/>
							</div>
							<div className="w-full md:w-1/2 px-3">
								<label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
									Selected University
								</label>
								<input
									className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
									id="grid-password"
									type="text"
									name="university"
									value={selectedUni}
									placeholder="Selected University"
									required
									readOnly
								/>
							</div>
						</div>
						<input
							type="submit"
							value="submit"
							className="cursor-pointer text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-2 font-medium rounded-lg px-4 py-2.5 text-center mr-2 mb-2"
						/>
					</form>
				</Zoom>
			</div>
		</div>
	);
};
export default Admission;
