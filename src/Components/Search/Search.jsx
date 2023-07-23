import { useState } from "react";

const Search = () => {
	const [search, setSearch] = useState("");
	console.log(search);
	return (
		<div className="text-center bg-cyan-800 p-5">
			<form className="join">
				<input
					type="search"
					onChange={(event) => setSearch(event.target.value)}
					placeholder="Search"
					className="relative p-1 md:p-3 w-full lg:w-[650px] rounded-none"
				/>
				<button
					type="button"
					className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br font-medium text-sm md:p-3 text-center rounded-none"
				>
					Search college
				</button>
			</form>
		</div>
	);
};

export default Search;
