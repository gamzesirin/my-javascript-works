import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import Header from './components/header/Header'
import Home from './pages/Home'
import Project from './pages/Project'

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/aboutme" element={<AboutMe />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/project" element={<Project />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
