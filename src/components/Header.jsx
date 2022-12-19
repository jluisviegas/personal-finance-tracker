import React from 'react';
import SearchBar from './SearchBar';

const Header = ({ title }) => {
	return (
		<div className="flex flex-col md:flex-row items-center justify-between space-x-4 mb-12">
			<h1 className="text-xl lg:text-4xl font-bold pr-10">{title}</h1>
			<SearchBar />
		</div>
	);
};

export default Header;
