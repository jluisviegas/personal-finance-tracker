import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const SearchBar = () => {
	return (
		<form className="flex items-center w-1/2">
			<label htmlFor="simple-search" class="sr-only">
				Search
			</label>
			<div className="relative w-full">
				<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<AiOutlineSearch />
				</div>
				<input
					type="text"
					id="simple-search"
					className="bg-gray-700 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 placeholder-gray-400 "
					placeholder="Search"
					required
				/>
			</div>
			<button
				type="submit"
				className="p-2.5 ml-2 text-sm font-medium text-white bg-green-700 rounded-lg border hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
			>
				<AiOutlineSearch />
				<span className="sr-only">Search</span>
			</button>
		</form>
	);
};

export default SearchBar;
