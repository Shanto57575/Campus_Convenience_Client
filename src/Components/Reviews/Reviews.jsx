import { useEffect, useState } from "react";

const Reviews = () => {
	const [allData, setAllData] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/reviews")
			.then((res) => res.json())
			.then((data) => setAllData(data));
	}, []);

	return (
		<div className="mx-20">
			<h1 className="text-cyan-500 font-serif text-center text-3xl mt-20 mb-16 font-bold">
				Students Voices
			</h1>
			<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center mb-20">
				{allData.map((data) => (
					<div className="space-y-4" key={data._id}>
						<img
							className="w-48 h-48 mx-auto rounded-full ring ring-cyan-400 ring-offset-base-300 ring-offset-2 hover:scale-110 duration-700"
							src={data.photo}
							alt=""
						/>
						<div className="p-3 space-y-3">
							<p className="text-3xl font-bold">{data.name}</p>
							<p className="text-3xl font-bold text-cyan-600">
								{data.university} university
							</p>
							<p className="text-justify border-x-4 border-cyan-600 px-4">
								{data.review}
							</p>
						</div>{" "}
					</div>
				))}
			</div>
		</div>
	);
};

export default Reviews;
