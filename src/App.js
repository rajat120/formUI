import { React, useEffect, useState } from "react";
import "./App.css";
import FarmerDetails from "./components/FarmerDetails";

import ProducerDetails from "./components/ProducerDetails";
import FarmDetails from "./components/FarmDetails.jsx";

function App() {
	const [url, setUrl] = useState("");
	useEffect(() => {
		setUrl(window.location.pathname);
	}, []);

	console.log(url);
	return (
		<div className="App">
			{url === "/" && <FarmDetails />}
			{url === "/farmer" && <FarmerDetails />}
			{url === "/producer" && <ProducerDetails />}
		</div>
	);
}

export default App;
