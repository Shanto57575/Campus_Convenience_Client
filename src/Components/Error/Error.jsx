import Lottie from "lottie-react";

import error from "../../assets/error.json";
import { Link } from "react-router-dom";
const Error = () => {
	return (
		<div className="h-[500px] mx-auto">
			<Lottie className="h-[500px]" animationData={error} loop={true} />
			<div className="text-center p-5 rounded">
				<Link className="bg-cyan-600 hover:bg-cyan-700 text-white btn" to="/">
					Back to Home
				</Link>
			</div>
		</div>
	);
};

export default Error;
