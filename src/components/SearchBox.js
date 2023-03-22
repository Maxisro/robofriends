import React from "react";
import "./SearchBox.css";

const SearchBox = ({searchField, searchChange}) => {
	return (
		<div className="pa2 searchbox">
			<input
				className="pa3 ba b--green bg-lightest-blue"
				type="search"
				placeholder="search robots"
				onChange={searchChange}
			/>
		</div>
	);
};

export default SearchBox;
