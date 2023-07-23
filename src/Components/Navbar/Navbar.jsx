import {
	faBookOpenReader,
	faBuildingColumns,
	faGraduationCap,
	faHouse,
	faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Navbar = () => {
	const NavItems = (
		<div className="flex items-center gap-7 text-lg font-bold">
			<Link to="/" className="flex items-center gap-2 cursor-pointer">
				<FontAwesomeIcon icon={faHouse} />
				<span>Home</span>
			</Link>
			<Link to="/college" className="flex items-center gap-2 cursor-pointer">
				<FontAwesomeIcon icon={faGraduationCap} /> <span>College</span>
			</Link>
			<Link to="/mycollege" className="flex items-center gap-2 cursor-pointer">
				<FontAwesomeIcon icon={faUserGraduate} /> <span>My College</span>
			</Link>
			<Link to="/admission" className="flex items-center gap-2 cursor-pointer">
				<FontAwesomeIcon icon={faBuildingColumns} />
				<span>Admission</span>
			</Link>
		</div>
	);
	return (
		<div className="navbar bg-base-100">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
					>
						{NavItems}
					</ul>
				</div>
				<a className="normal-case flex items-center">
					<FontAwesomeIcon
						className="text-cyan-600 text-xl md:text-5xl"
						icon={faBookOpenReader}
					/>{" "}
					<p className="text-black font-serif font-semibold ml-2 text-xl md:text-3xl">
						Campus<span className="text-cyan-600">Concierge</span>
					</p>
				</a>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">{NavItems}</ul>
			</div>
			{/* <div className="navbar-end">
				<a className="btn">Button</a>
			</div> */}
		</div>
	);
};

export default Navbar;
