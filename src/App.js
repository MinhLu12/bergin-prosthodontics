import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import Home from "pages/home/Home";
import Navigation from "./components/Navigation/Navigation";
import Summary from "./components/Summary/Summary";
import ContactInfo from "./components/ContactInfo/ContactInfo";
import BeforeAndAfter from "./components/BeforeAndAfter/BeforeAndAfter";
import FeaturedServices from "./components/FeaturedServices/FeaturedServices"
import Title from "./components/Title/Title";

export default function App() {
	return (
		<Router>
			<Navigation></Navigation>

			<Switch>
				<Route path="/contact">
					Contact Page
				</Route>

				<Route path="/">
					<Home></Home>
				</Route>
			</Switch>

		</Router>
	)
}