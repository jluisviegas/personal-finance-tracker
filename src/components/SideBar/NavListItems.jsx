import React from 'react';
import { NavLink } from 'react-router-dom';

const NavListItems = ({ icon, title, url }) => {
	const normalLink =
		'relative flex flex-row justify-center md:justify-start items-center ml-4 h-11 focus:outline-none md:hover:bg-green-50 text-gray-600 hover:text-gray-800 border-r-4 border-transparent rounded-l-md md:hover:border-green-200 pr-6 transition duration-200 ease-in-out';
	const activeLink =
		'flex flex-row items-center justify-center md:justify-start ml-4 h-11 md:bg-green-100 text-gray-800 md:border-r-4 rounded-l-md md:border-green-500 pr-6';

	return (
		<li>
			<NavLink
				to={`/${url}`}
				className={({ isActive }) => (isActive ? activeLink : normalLink)}
			>
				<span className="inline-flex justify-center items-center ml-4 text-green-300 md:text-green-600">
					{icon}
				</span>
				<span className="ml-2 text-sm font-bold tracking-wide truncate">
					{title}
				</span>
			</NavLink>
		</li>
	);
};

export default NavListItems;
