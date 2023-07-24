import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const MyCollege = () => {
	const [allData, setAllData] = useState([]);
	const [reviewData, setReviewData] = useState({});

	useEffect(() => {
		fetch("https://campus-convenience-server.vercel.app/mycollege")
			.then((res) => res.json())
			.then((data) => setAllData(data));
	}, []);

	const submitReview = (entry) => {
		console.log(entry);
		const dataToSend = {
			...reviewData,
			photo: entry.photo,
			name: entry.name,
			university: entry.university,
		};

		fetch("https://campus-convenience-server.vercel.app/reviews", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(dataToSend),
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
			})
			.catch((error) => console.error("Error posting review:", error));
	};

	return (
		<div>
			<h1 className="text-center text-3xl text-cyan-600 my-10 font-bold">
				My College
			</h1>
			<div className="lg:mx-20">
				{allData.map((data) => (
					<div
						key={data._id}
						className="card lg:card-side bg-base-100 shadow-xl"
					>
						<figure>
							<img className="md:w-[500px]" src={data?.photo} alt="photo" />
						</figure>
						<div className="card-body">
							<h2 className="card-title">Student Name : {data?.name}</h2>
							<p>
								<span className="font-bold">Address :</span> {data?.address}
							</p>
							<p>
								<span className="font-bold">Email : </span>
								{data?.email}
							</p>
							<p>
								<span className="font-bold">Phone : </span>
								{data?.phone}
							</p>
							<p>
								<span className="font-bold">Subject : </span>
								{data?.subject}
							</p>
							<p>
								<span className="font-bold">Date of Birth : </span>
								{data?.dob}
							</p>
							<p className="font-bold text-xl">{data?.university} university</p>
							<p className="font-bold">Write a review : </p>
							<input
								type="text"
								className="border-2 border-black p-5"
								onChange={(e) => setReviewData({ review: e.target.value })}
							/>

							<button
								onClick={() => submitReview(data)}
								type="button"
								className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
							>
								Post review
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default MyCollege;
