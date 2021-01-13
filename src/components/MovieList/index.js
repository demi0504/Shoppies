import React, { Component } from 'react';
import MovieCard from "../MovieCard";
import axios from 'axios';
import SearchInput from '../SearchInput';

class MovieList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			results: [], 
			searchTerm: ''
		};
	}
  
	
	handleFormSubmit = event => {
		event.preventDefault();
		axios
			.get(
				`https://www.omdbapi.com/?apikey=13e51e11&t&s=${this.state.searchTerm}`
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

	render() {
		return (
			<div>
				<SearchInput
					searchTerm={this.state.searchTerm}
					handleFormSubmit={this.handleFormSubmit}
					handleChange={this.handleChange}
				/>
				{this.state.results.map((result, index) => {
					return (
						<MovieCard 
							title={result.Title}
							year={result.Year}
						/>
					)
				})}
			</div>
		)
	}
}

export default MovieList;