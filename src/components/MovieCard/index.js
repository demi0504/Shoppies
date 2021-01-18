import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NominateBtn from '../NominateBtn';
import './style.css';

const MovieCard = (props) => {
	return (
		<Container>
			<Row>
				<Col>
					<Card className="flex-row flex-wrap w-75 margin">
						<Card.Img className="card-header img-style" src={props.poster} />
						<Card.Body className="card-block px-2">
							<Card.Title className="title">Title: {props.title}</Card.Title>
							<Card.Text>Release Year: {props.year}</Card.Text>
							<NominateBtn {...props} />
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	)
}

export default MovieCard;