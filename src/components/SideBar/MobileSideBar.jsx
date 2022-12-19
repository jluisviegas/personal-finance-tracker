import React, { useEffect, useState } from 'react';
import { BsFillCreditCard2BackFill } from 'react-icons/bs';
import { CgArrowsExchange } from 'react-icons/cg';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoIosWallet } from 'react-icons/io';
import { MdSpaceDashboard } from 'react-icons/md';
import { RiAccountCircleFill } from 'react-icons/ri';
import { SlSettings } from 'react-icons/sl';
import NavListItems from './NavListItems';

const MobileSideBar = () => {
	const [navOpen, setNavOpen] = useState(false);

	const closeNav = () => {
		setNavOpen(!navOpen);
	};

	return (
		<div
			className={
				!navOpen
					? 'relative p-3 md:hidden flex flex-col h-16 bg-green-600 border-r rounded-b-xl ease-in-out duration-500'
					: 'relative p-3 md:hidden flex flex-col h-72 bg-green-600 border-r rounded-b-xl ease-in-out duration-500'
			}
		>
			<button>
				<div
					className="relative flex overflow-hidden items-center justify-center rounded-full w-[40px] h-[40px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md"
					onClick={closeNav}
				>
					{!navOpen ? (
						<FaBars className="text-green-500" />
					) : (
						<FaTimes className="text-green-500" />
					)}
				</div>
			</button>

			{/* Mobile List */}
			<ul
				className={
					!navOpen
						? 'hidden opacity-0 transition-opacity duration-500 ease-out '
						: 'visible opacity-100'
				}
			>
				<NavListItems icon={<MdSpaceDashboard />} title="Dashboard" url="/" />
				<NavListItems icon={<IoIosWallet />} title="My Wallet" url="wallet" />
				<NavListItems
					icon={<CgArrowsExchange />}
					title="Transactions"
					url="transactions"
					onClick={closeNav}
				/>
				<NavListItems
					icon={<BsFillCreditCard2BackFill />}
					title="Cards"
					url="cards"
				/>
			</ul>
		</div>
	);
};

export default MobileSideBar;
