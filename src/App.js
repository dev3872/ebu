import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from "./components/Landing";
import Mainbar from "./components/Mainbar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const App = () => {
	return (
		<Router>
			<div>
				<Mainbar />
			</div>
			<Switch>
				{/* <Route path="/about">
            <About />
          </Route>*/}
          <Route path="/contact-us">
            <Contact />
          </Route> 
				<Route path="/">
					<Landing />
				</Route>
			</Switch>
			<div>
				<Footer/>
			</div>
		</Router>
	);
};

export default App;
