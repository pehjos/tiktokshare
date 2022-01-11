import React from "react";
import Appbar from "./Appbar";
import "./Home.css";
import Post from "./Post";
import Story from "./Story";

function Home() {
	return (
		<div className="home">
			<Appbar />
			<div className="home__body">
				<div className="home__stories">
					<Story user />
					<Story />
					<Story />
					<Story />
					<Story />
				</div>
				<div className="home__feed">
					<Post />
					<Post />
					<Post />
				</div>
			</div>
		</div>
	);
}

export default Home;
