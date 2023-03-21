import React, { useState, useEffect } from "react";
import CardList from "../components//CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";

function App() {
	const [robots, setRobots] = useState([]);
	const [searchfield, setSearchfield] = useState("");

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error("Something went wrong");
				}
			})
			.then((users) => setRobots(users))
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const onSearchChange = (event) => {
		setSearchfield(event.target.value);
	};

	const filteredRobots = robots.filter((robot) => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
	});
	
	if (!robots.length) {
		return <h1 className="tc f1">Loading</h1>;
	} else {
		
		return (
			<div className="tc">
				<h1 className="f1 title">RoboFriends</h1>
				<SearchBox searchChange={onSearchChange} />
				<Scroll>
					<ErrorBoundry>
						<CardList robots={filteredRobots} />
					</ErrorBoundry>
				</Scroll>
			</div>
		);
	}
}

export default App;
