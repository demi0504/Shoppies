import React, { Component } from 'react';
import MovieCard from "../MovieCard";
import axios from 'axios';
import SearchInput from '../SearchInput';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

class MovieList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			results: [],
			nominated:[],
			newMovie: '',
			searchTerm: ''
		};
		this.nominateClick = this.nominateClick.bind(this);
		
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
			});
	}

	handleChange = event => {
		this.setState({
			searchTerm: event.target.value
		});	
	};

	nominateClick = event => {
		if (this.checkNominationLimit()) {
			alert("limit 5 nom")
			return false
		};
	
		const newMovie = {
			id: 1 + Math.random(),
			value: event.target.value
		};
		
		const nominated = this.state.nominated;

		nominated.push(newMovie);

		this.setState({
			nominated, 
			newMovie: ''
		});
	}

	getNominated() {
		for (let key in this.state) {
			if(localStorage.hasOwnProperty(key)) {
				let value = localStorage.getItem(key);

				try {
					value = JSON.parse(value);
					this.setState({ [key]: value });
				} catch (e) {
					this.setState({ [key]: value });
				}
			}
		}
	}

	checkNominationLimit() {
		// return true if hit limit return false is not hit limit
	
		return this.state.nominated.length > 4
		
	}

	componentDidMount() {
		this.getNominated();
		
		

		window.addEventListener(
			"beforeunload",
			this.saveStateToLocalStorage.bind(this)
		);
	};

	componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );

    // saves if component has a chance to unmount
    this.saveStateToLocalStorage();
	}

	saveStateToLocalStorage() {
		for (let key in this.state) {
			localStorage.setItem(key, JSON.stringify(this.state[key]));
		}
	};

	deleteMovie(id) {
    // copy current list of items
    const nominated = [...this.state.nominated];
    // filter out the item being deleted
    const updatedList = nominated.filter(item => item.id !== id);

    this.setState({ nominated: updatedList });
  }

	render() {
		return (
			<div>
				<Container fluid>
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
									poster={result.Poster}
									nominateClick={this.nominateClick}
								/>
							)
						})}
						</Col>
						{/* Begin Nominated list */}
						<Col className="nom">
							<h1>My Nominations: </h1>
							<ul>
								{this.state.nominated.map(item => {
									return (
										<li className="nom-list" key={item.id}>
											{item.value}
											<Button className="remove-btn" variant="outline-light" onClick={() => this.deleteMovie(item.id)}>
												Remove
											</Button>
										</li>
									);
								})}
							</ul>
						</Col>
					</Row>
				</Container>
			</div>
		)
	}
}

export default MovieList;