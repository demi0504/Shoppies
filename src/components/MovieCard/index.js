import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MovieCard = (props) => {
	return (
		<Container>
			<Row>
				<Col>
					<Card>
						<Card.Body>
							<Card.Title>Title: {props.title}</Card.Title>
							<Card.Text>Release Year: {props.year}</Card.Text>
							<Button 
								variant="outline-secondary">Nominate
							</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	)
}

export default MovieCard;