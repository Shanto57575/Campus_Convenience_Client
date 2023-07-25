import { Link } from "react-router-dom";
import "./College.css";
import { useEffect, useState } from "react";
import { Zoom } from "react-awesome-reveal";

const College = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("https://campus-convenience-server.vercel.app/AllData")
			.then((res) => res.json())
			.then((data) => setData(data));
	}, []);
	return (
		<div className="my-20">
			<div className="text-3xl font-serif font-bold  text-center my-10 space-y-3">
				<h1 className="text-cyan-500">All Colleges!</h1>
				<p className="text-lg font-norma">
					Where Excellence Meets Opportunity - Unleash Your Potential Today!
				</p>
			</div>
			<div className="md:mx-9 lg:mx-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 shadow-cyan-900">
				{data.map((item) => (
					<Zoom key={item.id}>
						<div>
							<div className="grad card lg:card-side flex-wrap bg-base-100 shadow-2xl shadow-cyan-950 rounded-none">
								<figure>
									<img src={item.collegeImage} alt="car!" />
								</figure>
								<div className="card-body font-serif p-3 md:p-4 rounded-none">
									<h2 className="card-title uppercase">
										{item.collegeName} university
									</h2>
									<p className="text-lg font-bold">
										Rating:
										<span className="bg-cyan-500 px-4 rounded">
											{item.collegeRating}*
										</span>
									</p>
									<p className="text-lg font-semibold">
										Admission Period: {item.admissionDates[0]} -
										{item.admissionDates[1]}
									</p>
									<p className="text-lg font-bold">
										TotalResearch: {item.totalResearch}
									</p>
									<div className="card-actions">
										<Link to={`/college/${item.id}`}>
											<button
												type="button"
												className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-2 font-medium rounded-lg px-4 py-2.5 text-center mr-2 mb-2"
											>
												Details
											</button>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</Zoom>
				))}
			</div>
		</div>
	);
};

export default College;
