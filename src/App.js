import { React, useEffect, useState } from "react";
import "./App.css";
import FarmerDetails from "./components/FarmerDetails";

import ProducerDetails from "./components/ProducerDetails";
import FarmDetails from "./components/FarmDetails.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	const bgImg="https://img.freepik.com/free-photo/agriculture-iot-with-rice-field-background_53876-124635.jpg?w=2000"
	const [url, setUrl] = useState("");
	useEffect(() => {
		setUrl(window.location.pathname);
	}, []);

	console.log(url);
	return (
		<div className="App">
			{url === "/" && <FarmDetails bgImg={bgImg}/>}
			{url === "/farmer" && <FarmerDetails />}
			{url === "/producer" && <ProducerDetails />}
		</div>
	);
}

export default App;
