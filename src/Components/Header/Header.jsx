import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="bg-cyan-600 text-center md:flex md:gap-5 font-serif px-2 text-white py-2">
			<div className="w-full lg:w-2/3 font-semibold">
				Contact: Sheikh Mujib Road, Chittagong || Phone: +880-111-0000-111
			</div>
			<div className="w-full mx-auto lg:w-1/3 flex items-center gap-3 lg:gap-5 font-semibold">
				<a
					className="flex items-center gap-4"
					href="https://www.facebook.com/Harvard"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaFacebook className="cursor-pointer" /> ||
				</a>
				<a
					className="flex items-center gap-4"
					href="https://www.harvard.edu/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaGoogle className="cursor-pointer" /> ||
				</a>
				<a
					className="flex items-center gap-4"
					href="https://twitter.com/Harvard"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaTwitter className="cursor-pointer" /> ||
				</a>
				<Link to="/login">Sign In</Link> |<Link to="/register">Sign Up</Link>
			</div>
		</div>
	);
};

export default Header;
