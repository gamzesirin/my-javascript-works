import './Header.css'

import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Header = () => {
	return (
		<Navbar bg="light" data-bs-theme="light">
			<Container>
				<Navbar.Brand href="#home" as={Link} to="/">
					<img
						src="https://italyada.net/wp-content/uploads/2022/02/portfolyo-nasil-hazirlanir-9-.jpg"
						height="50px"
					></img>
				</Navbar.Brand>
				<Nav className=" justify-content-end">
					<Nav.Link href="#home" as={Link} to="/">
						Home
					</Nav.Link>
					<Nav.Link href="#aboutme" as={Link} to="/aboutme">
						About Me
					</Nav.Link>
					<Nav.Link href="#project" as={Link} to="/project">
						Project
					</Nav.Link>
					<Nav.Link href="#contact" as={Link} to="/contact">
						Contact
					</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	)
}

export default Header
