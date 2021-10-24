import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Mainbar from "./components/Mainbar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import AboutUs from "./components/AboutUs";
const App = () => {
	return (
		<Router>
			<div>
				<Mainbar />
			</div>
			<Switch>
				<Route path="/about-us">
					<AboutUs/>
				</Route>
				<Route path="/testimonials">
					<Testimonials/>
				</Route>
				<Route path="/contact-us">
					<Contact />
				</Route>
				<Route path="/">
					<Landing />
				</Route>
			</Switch>
			<div>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
