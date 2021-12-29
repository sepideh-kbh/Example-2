import React from 'react';
import { ConfigProvider } from "antd";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Lists from './pages/list/index';
import Comments from './pages/comments';
import "./App.css";

function App() {
	return (
		<ConfigProvider>
			<div className="container">
				<Router>
					<Routes>
						<Route path="/" element={<Lists />} />
						<Route path="/comments" element={<Comments />} />
					</Routes>
				</Router>
			</div>
		</ConfigProvider >
	);
}

export default App;
