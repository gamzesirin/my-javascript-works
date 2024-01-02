import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { useState } from 'react'

function Contact() {
	const [validated, setValidated] = useState(false)

	const handleSubmit = (event) => {
		const form = event.currentTarget
		if (form.checkValidity() === false) {
			event.preventDefault()
			event.stopPropagation()
		}

		setValidated(true)
	}

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				margin: '20px 10%'
			}}
		>
			<div
				style={{
					width: '1000px',
					alignItems: 'center',
					justifyContent: 'center',
					marginLeft: '600px',
					height: '100vh',
					marginTop: '150px'
				}}
			>
				<Form noValidate validated={validated} onSubmit={handleSubmit}>
					<Form.Group as={Col} md="4" controlId="validationCustom01">
						<Form.Label>First name</Form.Label>
						<Form.Control required type="text" placeholder="First name" defaultValue="Mark" />
						<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
					</Form.Group>
					<Form.Group as={Col} md="4" controlId="validationCustom02">
						<Form.Label>Last name</Form.Label>
						<Form.Control required type="text" placeholder="Last name" defaultValue="Otto" />
						<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
					</Form.Group>
					<Form.Group as={Col} md="4" controlId="validationCustomUsername">
						<Form.Label>Gmail</Form.Label>
						<InputGroup hasValidation>
							<Form.Control type="text" placeholder="Gmail" aria-describedby="inputGroupPrepend" required />
							<Form.Control.Feedback type="invalid">Please choose a gmail.</Form.Control.Feedback>
							<InputGroup.Text id="inputGroupPrepend">@gmail.com</InputGroup.Text>
						</InputGroup>
					</Form.Group>

					<Form.Group as={Col} md="4" controlId="validationCustom03">
						<Form.Label>City</Form.Label>
						<Form.Control type="text" placeholder="City" required />
						<Form.Control.Feedback type="invalid">Please provide a valid city.</Form.Control.Feedback>
					</Form.Group>
					<Form.Group as={Col} md="4" controlId="validationCustom04">
						<Form.Label>Phone</Form.Label>
						<Form.Control type="text" placeholder="Phone" required />
						<Form.Control.Feedback type="invalid">Please provide a valid phone.</Form.Control.Feedback>
					</Form.Group>

					<Button className="mt-3  " variant="outline-secondary" type="submit">
						Send form
					</Button>
				</Form>
			</div>
		</div>
	)
}

export default Contact
