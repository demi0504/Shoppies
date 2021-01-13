import React, { Component } from 'react';
import MovieCard from "../MovieCard";
import Axios from 'axios';

class MovieList extends Component {
  state = {
		moviesList: ['tt0275022'], 
		searchTerm: ''
	};
	

	handleChange = event => {
		this.setState({
			searchTerm: event.target.value
		});
	};

	render() {
		return (
			<div>
				<MovieCard />
			</div>
		)
	}
}