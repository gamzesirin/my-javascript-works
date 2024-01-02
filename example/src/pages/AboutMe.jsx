import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const AboutMe = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '50vh',
				textAlign: 'center'
			}}
		>
			<Card style={{ width: '20rem', height: '10rem' }}>
				<Card.Body>
					<Card.Title>About Me</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">Gamze Şirin</Card.Subtitle>
					<Card.Text>I'm software enginner student,web developer and mern stack developer.</Card.Text>
					<Card.Link href="#" as={Link} to="/contact">
						{' '}
						Contact Me
					</Card.Link>
					<Card.Link href="#" as={Link} to="/project">
						{' '}
						My project
					</Card.Link>
				</Card.Body>
			</Card>
		</div>
	)
}

export default AboutMe
