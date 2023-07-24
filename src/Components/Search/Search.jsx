import { Link } from "react-router-dom";

const Search = () => {
	return (
		<div className="text-center bg-cyan-800 p-5">
			<div className="dropdown">
				<label
					tabIndex={0}
					className="btn rounded-lg m-1 w-60 md:w-full lg:w-[650px] bg-white"
				>
					Search
				</label>
				<ul
					tabIndex={0}
					className="relative p-1 md:p-3 sm:w-96 w-full lg:w-[660px] rounded-lg dropdown-content z-[1] menu shadow bg-base-100"
				>
					<li>
						<Link className="border-b-2 border-black" to={`/college/${1}`}>
							STANFORD UNIVERSITY
						</Link>
					</li>
					<li>
						<Link className="border-b-2 border-black" to={`/college/${2}`}>
							CALTECH UNIVERSITY
						</Link>
					</li>
					<li>
						<Link className="border-b-2 border-black" to={`/college/${3}`}>
							CAMBRIDGE UNIVERSITY
						</Link>
					</li>
					<li>
						<Link className="border-b-2 border-black" to={`/college/${4}`}>
							ETH ZURICH UNIVERSITY
						</Link>
					</li>
					<li>
						<Link className="border-b-2 border-black" to={`/college/${5}`}>
							HARVARD UNIVERSITY
						</Link>
					</li>
					<li>
						<Link to={`/college/${6}`}>MCGILL UNIVERSITY</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Search;
