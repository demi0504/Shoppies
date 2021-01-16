import React, { Component } from 'react';
import MovieCard from "../MovieCard";
import axios from 'axios';
import SearchInput from '../SearchInput';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class MovieList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			results: [],
			nominated:[],
			newMovie: '',
			searchTerm: ''
		};
	}
  
	handleFormSubmit = event => {
		event.preventDefault();
		axios
			.get(
				`https://www.omdbapi.com/?apikey=13e51e11&s=${this.state.searchTerm}&type=movie`
			)
			.then(res => res.data)
			.then(res => {
				if (!res.Search) {
					this.setState({results: []});
					return;
				}

				const results = res.Search;
				this.setState({
					results
				});
				console.log("whatwedoin: ", results);
			});
	}

	handleChange = event => {
		this.setState({
			searchTerm: event.target.value
		});	
	};

	// nominateClick(e) {
		
	// 	// console.log("value", event.target.value)
	// 	const movie = e.target.value;
	// 	if(localStorage.getItem('nominatedList') == null) {
	// 		const nominatedList = [];
	// 		nominatedList.push(movie);
	// 		localStorage.setItem('nominatedList', JSON.stringify(nominatedList));
	// 	} else {
	// 		const nominatedList = JSON.parse(localStorage.getItem('nominatedList'));
	// 		nominatedList.push(movie);
	// 		localStorage.setItem('nominatedList', JSON.stringify(nominatedList));
	// 	}
	// };

	// componentDidMount() {
	// 	this.nominated = JSON.parse(localStorage.getItem("nominated"))
	// 	if (localStorage.getItem("nominated")) {
	// 		this.setState({
	// 			nominated: ''
	// 		})}
	// 		else {
	// 			this.setState({
	// 				nominated: ''
	// 			})
	// 		}
	// 	};
	

	nominateClick = event => {
		const newMovie = event.target.value;
		
		const nominated = [this.state.nominated];

		nominated.push(newMovie);

		this.setState({
			nominated, 
			newMovie: ''
		});

		localStorage.setItem("nominated", JSON.stringify(nominated));
		localStorage.setItem("newMovie", '');
	}

	render() {
		return (
			<div>
				<Container>
					<Row>
						<Col>
						<SearchInput
							searchTerm={this.state.searchTerm}
							handleFormSubmit={this.handleFormSubmit}
							handleChange={this.handleChange}
						/>
						{this.state.results.map((result, index) => {
							return (
								<MovieCard 
									key={result.imdbID}
									title={result.Title}
									year={result.Year}
									nominateClick={this.nominateClick}
								/>
							)
						})}
						</Col>
					</Row>
				</Container>
				{/* Begin Nominated list */}
				<Container>
					<Row>
						<Col>
							<h1>My Nominations: </h1>
							<li>{this.state.nominated}</li>
						</Col>
					</Row>
				</Container>
			</div>
		)
	}
}

export default MovieList;