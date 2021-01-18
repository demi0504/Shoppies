import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';

const Jumbotron = () => {
    return(
		<div className="jumbotron">
			<Container>
				<h1>The Shoppies</h1>
					<p>
						"Way more fun than the Oscars." -Tom Hanks
					</p>
			</Container>
    </div>
    )
}

export default Jumbotron;