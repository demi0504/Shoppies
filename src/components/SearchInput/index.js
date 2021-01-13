import React from 'react';


function SearchInput(props) {
  return (
		<div>
			<form className="search">
				<input
					type="text"
					value={props.search}
					className="form-control tag-input"
					placeholder="Search by Title"
					onChange={props.handleChange}
				></input>
				<button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
          Search
				</button>
			</form>
		</div>
  )
}

export default SearchInput;