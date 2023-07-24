import { Link } from "react-router-dom";
// import data from "../../../public/data.json";
import { useEffect, useState } from "react";
const CollegeCard = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("https://campus-convenience-server.vercel.app/AllData")
			.then((res) => res.json())
			.then((data) => setData(data));
	}, []);

	return (
		<div className="my-20">
			<div className="text-3xl font-serif font-bold  text-center my-10 space-y-3">
				<h1 className="text-cyan-500">Top Colleges Unveiled!</h1>
				<p className="text-lg font-norma">
					Where Excellence Meets Opportunity - Unleash Your Potential Today!
				</p>
			</div>
			<div className="md:mx-12 lg:mx-28 shadow-cyan-900">
				{data.slice(0, 3).map((item) => (
					<div key={item.id}>
						<div className="card flex-wrap card-side bg-base-100 mb-10 shadow-2xl shadow-stone-500 rounded-none md:rounded-xl">
							<figure>
								<img src={item.collegeImage} alt="car!" />
							</figure>
							<div className="card-body font-serif p-0 md:p-4">
								<h2 className="card-title uppercase">
									{item.collegeName} university
								</h2>
								<p>
									<span className="text-lg font-semibold">Admission: </span>
									{item.admissionDates[0]} - {item.admissionDates[1]}
								</p>
								<div>
									<h1 className="text-lg font-bold underline">Events: </h1>
									<p className="text-lg font-medium mr-4">
										1) {item.events[0]}
									</p>
									<p className="text-lg font-medium mr-4">
										2) {item.events[1]}
									</p>
									<p className="text-lg font-medium mr-4">
										3) {item.events[2]}
									</p>
								</div>
								<div>
									<h1 className="text-lg font-bold underline">Sports: </h1>
									<span className="text-lg font-medium mr-4">
										{item.sports[0]},
									</span>
									<span className="text-lg font-medium mr-4">
										{item.sports[1]},
									</span>
									<span className="text-lg font-medium mr-4">
										{item.sports[2]}
									</span>
								</div>
								<div>
									<h1 className="text-lg font-bold underline">
										ResearchHistory:
									</h1>
									<p className="text-lg">
										{item.researchHistory}...
										<a className="btn-link" href="#">
											Read More
										</a>
									</p>
								</div>
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
				))}
			</div>
		</div>
	);
};

export default CollegeCard;
