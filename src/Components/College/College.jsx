import data from "../../../public/data.json";

const College = () => {
	return (
		<div className="my-20">
			<div className="text-3xl font-serif font-bold  text-center my-10 space-y-3">
				<h1 className="text-cyan-500">All Colleges!</h1>
				<p className="text-lg font-norma">
					Where Excellence Meets Opportunity - Unleash Your Potential Today!
				</p>
			</div>
			<div className="md:mx-10 lg:mx-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 shadow-cyan-900">
				{data.map((item) => (
					<div key={item.id}>
						<div className="card flex-wrap card-side bg-base-100 mb-10 shadow-2xl shadow-stone-500 rounded-none">
							<figure>
								<img src={item.collegeImage} alt="car!" />
							</figure>
							<div className="card-body font-serif p-3 md:p-4 rounded-none">
								<h2 className="card-title uppercase">
									{item.collegeName} university
								</h2>
								<p className="text-lg font-bold">
									Rating: {item.collegeRating}
								</p>
								<p className="text-lg font-semibold">
									Admission Period: {item.admissionDates[0]} -
									{item.admissionDates[1]}
								</p>
								<p className="text-lg font-bold">
									TotalResearch: {item.totalResearch}
								</p>
								<div className="card-actions">
									<button
										type="button"
										className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-2 font-medium rounded-lg px-4 py-2.5 text-center mr-2 mb-2"
									>
										Details
									</button>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default College;
