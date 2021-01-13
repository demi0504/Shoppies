import React from 'react';


function SearchInput(props) {
  return (
		<div>
			<form className="search">
				<input
					type="text"
					className="form-control tag-input"
					placeholder="Search by Title"
					onChange={props.handleInput}
				></input>
			</form>
		</div>
  )
}

export default SearchInput;