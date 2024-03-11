import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Models from "./pages/Models.jsx";
import Contact from "./pages/Contact.jsx";

const App = () => {
	return (
		<main>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/models" element={<Models />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</Router>
		</main>
	);
};

export default App;
