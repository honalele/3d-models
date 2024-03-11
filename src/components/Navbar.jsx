import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<header className="header">
			<NavLink
				to="/"
				className="w-500 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
			>
				<p className="blue-gradient_text">GUTP BIM</p>
			</NavLink>
			<nav className="flex text-lg gap-7 font-medium">
				<NavLink
					to="/about"
					className={({ isActive }) =>
						isActive ? "text-blue-500" : "text-black"
					}
				>
					BIMプロジェクト
				</NavLink>
				<NavLink
					to="/models"
					className={({ isActive }) =>
						isActive ? "text-blue-500" : "text-black"
					}
				>
					3Dモデル
				</NavLink>
			</nav>
		</header>
	);
};

export default Navbar;
