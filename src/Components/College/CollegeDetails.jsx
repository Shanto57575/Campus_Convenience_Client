import { useLoaderData } from "react-router-dom";

const CollegeDetails = () => {
	const item = useLoaderData();
	console.log(item);

	return (
		<div className="lg:mx-12 font-serif my-20">
			<h1 className="text-center text-3xl font-bold mt-14 mb-20 text-cyan-600">
				Uncover the specifics of {item.collegeName}
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
				<div>
					<h1 className="text-center text-3xl font-semibold mb-5">
						Our Diverse Events
					</h1>
					<ul>
						<li className="text-justify">
							<span className="font-bold text-xl underline text-cyan-500">
								{item.events[0]}
							</span>
							: {item.eventDetails[0]}
						</li>
						<li className="text-justify">
							<span className="font-bold text-xl underline text-cyan-500">
								{item.events[1]}
							</span>
							: {item.eventDetails[1]}
						</li>
						<li className="text-justify">
							<span className="font-bold text-xl underline text-cyan-500">
								{item.events[2]}
							</span>
							: {item.eventDetails[2]}
						</li>
					</ul>
				</div>
				<div className="mt-16">
					<figure>
						<img src={item.collegeImage} alt="university" />
					</figure>
					<div className="card-body p-0">
						<p className="text-justify mt-3">{item.collegeHistory}</p>
						<p className="text-lg font-bold">
							Rating:
							<span className="badge bg-cyan-500 px-5 py-3">
								{item.collegeRating}
							</span>
						</p>
						<p className="text-lg font-semibold">
							Admission Period: {item.admissionDates[0]} -
							{item.admissionDates[1]}
						</p>
						<p className="text-lg font-bold">
							TotalResearch: {item.totalResearch}
						</p>
					</div>
				</div>
				<div>
					<h1 className="text-center text-3xl font-semibold mb-5">
						Our Athletic Lineup{" "}
					</h1>
					<ul>
						<li className="text-justify">
							<span className="font-bold text-xl underline text-cyan-500">
								{item.sports[0]}
							</span>
							: {item.sportsDetails[0]}
						</li>
						<li className="text-justify">
							<span className="font-bold text-xl underline text-cyan-500">
								{item.sports[1]}
							</span>
							: {item.sportsDetails[1]}
						</li>
						<li className="text-justify">
							<span className="font-bold text-xl underline text-cyan-500">
								{item.sports[2]}
							</span>
							: {item.sportsDetails[2]}
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default CollegeDetails;
