import { useEffect, useState } from "react";

const MyCollege = () => {
	const [allData, setAllData] = useState([]);
	const [reviewData, setReviewData] = useState({});

	useEffect(() => {
		fetch("http://localhost:5000/mycollege")
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

		fetch("http://localhost:5000/reviews", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(dataToSend),
		})
			.then((res) => res.json())
			.then((data) => console.log(data))
			.catch((error) => console.error("Error posting review:", error));
	};

	return (
		<div>
			<h1 className="text-center text-3xl text-cyan-600 my-10">My College</h1>
			<div className="overflow-x-auto">
				<table className="table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Email</th>
							<th>Phone</th>
							<th>Subject</th>
							<th>Date of Birth</th>
							<th>University</th>
							<th>Review</th>
							<th>Submit</th>
						</tr>
					</thead>
					<tbody>
						{allData.map((data) => (
							<tr key={data._id}>
								<td>
									<div className="flex items-center space-x-3">
										<div className="avatar">
											<div className="mask mask-squircle w-12 h-12">
												<img src={data?.photo} alt="photo" />
											</div>
										</div>
										<div>
											<div className="font-bold">{data?.name}</div>
											<div className="text-sm opacity-50">{data?.address}</div>
										</div>
									</div>
								</td>
								<td>{data?.email}</td>
								<td className="">{data?.phone}</td>
								<td>{data?.subject}</td>
								<td>{data?.dob}</td>
								<td>{data?.university}</td>
								<td>
									<input
										type="text"
										className="border-2 border-black p-4"
										onChange={(e) => setReviewData({ review: e.target.value })}
									/>
								</td>
								<td>
									<button
										onClick={() => submitReview(data)}
										type="button"
										className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
									>
										Post review
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MyCollege;
