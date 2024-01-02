import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

const Project = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				height: '50vh',
				padding: '20px 10%'
			}}
		>
			<div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', gap: '25px' }}>
				<Card style={{ width: '18rem' }}>
					<Card.Body>
						<Card.Title>Project-1</Card.Title>
						<Card.Text>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores ipsa mollitia sunt, sit ipsam
							exercitationem dolorum, tempore modi sed ab esse animi a vitae laboriosam
						</Card.Text>
					</Card.Body>
				</Card>
				<Card style={{ width: '18rem' }}>
					<Card.Body>
						<Card.Title>Project-2</Card.Title>
						<Card.Text>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores ipsa mollitia sunt, sit ipsam
							exercitationem dolorum, tempore modi sed ab esse animi a vitae laboriosam
						</Card.Text>
					</Card.Body>
				</Card>
				<Card style={{ width: '18rem' }}>
					<Card.Body>
						<Card.Title>Project-3</Card.Title>
						<Card.Text>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores ipsa mollitia sunt, sit ipsam
							exercitationem dolorum, tempore modi sed ab esse animi a vitae laboriosam
						</Card.Text>
					</Card.Body>
				</Card>
				<Card style={{ width: '18rem' }}>
					<Card.Body>
						<Card.Title>Project-4</Card.Title>
						<Card.Text>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores ipsa mollitia sunt, sit ipsam
							exercitationem dolorum, tempore modi sed ab esse animi a vitae laboriosam
						</Card.Text>
					</Card.Body>
				</Card>
			</div>
			<div style={{ display: 'flex', justifyContent: 'space-between', gap: '25px' }}>
				<Card style={{ width: '18rem' }}>
					<Card.Body>
						<Card.Title>Project-5</Card.Title>
						<Card.Text>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores ipsa mollitia sunt, sit ipsam
							exercitationem dolorum, tempore modi sed ab esse animi a vitae laboriosam
						</Card.Text>
					</Card.Body>
				</Card>
				<Card style={{ width: '18rem' }}>
					<Card.Body>
						<Card.Title>Project-6</Card.Title>
						<Card.Text>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores ipsa mollitia sunt, sit ipsam
							exercitationem dolorum, tempore modi sed ab esse animi a vitae laboriosam
						</Card.Text>
					</Card.Body>
				</Card>
				<Card style={{ width: '18rem' }}>
					<Card.Body>
						<Card.Title>Project-7</Card.Title>
						<Card.Text>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores ipsa mollitia sunt, sit ipsam
							exercitationem dolorum, tempore modi sed ab esse animi a vitae laboriosam
						</Card.Text>
					</Card.Body>
				</Card>
				<Card style={{ width: '18rem' }}>
					<Card.Body>
						<Card.Title>Project-8</Card.Title>
						<Card.Text>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores ipsa mollitia sunt, sit ipsam
							exercitationem dolorum, tempore modi sed ab esse animi a vitae laboriosam
						</Card.Text>
					</Card.Body>
				</Card>
			</div>
			<div />
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					margin: '20px 10%'
				}}
			>
				<div style={{ width: '1230px' }}>
					<InputGroup className="mb-3">
						<InputGroup.Text id="basic-addon1">Project name:</InputGroup.Text>
						<Form.Control aria-label="Username" aria-describedby="basic-addon1" />
					</InputGroup>

					<InputGroup className="mb-3">
						<Form.Control aria-label="Recipient's username" aria-describedby="basic-addon2" />
						<InputGroup.Text id="basic-addon2">@gmail.com</InputGroup.Text>
					</InputGroup>

					<Form.Label htmlFor="basic-url"></Form.Label>
					<InputGroup className="mb-3">
						<InputGroup.Text id="basic-addon3"> Your Project URL </InputGroup.Text>
						<Form.Control id="basic-url" aria-describedby="basic-addon3" placeholder="https://example.com/users/" />
					</InputGroup>

					<InputGroup>
						<InputGroup.Text>Your messages</InputGroup.Text>
						<Form.Control as="textarea" aria-label="With textarea" />
					</InputGroup>
					<Button className="mt-3  " variant="outline-secondary" id="button-addon1">
						send project
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Project
