import React from 'react';
import { BiCategory } from 'react-icons/bi';
import { BsFillCreditCard2BackFill } from 'react-icons/bs';
import { CgArrowsExchange } from 'react-icons/cg';
import { IoIosWallet } from 'react-icons/io';
import { MdSpaceDashboard } from 'react-icons/md';
import { RiAccountCircleFill } from 'react-icons/ri';
import { SlSettings } from 'react-icons/sl';
import profileicon from '../../assets/img/profileicon.png';
import ThemeSwitcher from '../ThemeSwitcher';
import NavListItems from './NavListItems';

const SideBar = ({ darkMode, setMode }) => {
	return (
		<div className="hidden fixed flex-col top-0 left-0 w-48 bg-white dark:bg-gray-900 h-full border-r md:block">
			{/* App Logo Name */}
			<div className="flex items-center justify-center h-14">
				<div>LVFinancial</div>
			</div>

			{/* Menu List */}
			<div className="overflow-y-auto overflow-x-hidden ">
				<ul className="flex flex-col py-4 space-y-1">
					<li className="px-5">
						<div className="flex flex-row items-center h-8">
							<div className="text-sm font-light tracking-wide text-gray-500">
								Menu
							</div>
						</div>
					</li>
					<NavListItems
						icon={<MdSpaceDashboard />}
						title="Dashboard"
						url="dashboard"
					/>
					<NavListItems
						icon={<BiCategory />}
						title="Categories"
						url="categories"
					/>
					<NavListItems
						icon={<CgArrowsExchange />}
						title="Transactions"
						url="transactions"
					/>
					<NavListItems
						icon={<BsFillCreditCard2BackFill />}
						title="Cards"
						url="cards"
					/>
				</ul>
			</div>

			{/* Settings List */}
			<div className="overflow-y-auto overflow-x-hidden flex-grow">
				<ul className="flex flex-col py-4 space-y-1">
					<li className="px-5">
						<div className="flex flex-row items-center h-8">
							<div className="text-sm font-light tracking-wide text-gray-500">
								Profile
							</div>
						</div>
					</li>
					<div className="flex flex-col items-center justify-center">
						<img
							className="rounded-full h-12 w-12 mb-2"
							src={profileicon}
							alt="user-profile"
						/>
						<p>Luis</p>
					</div>

					<NavListItems
						icon={<RiAccountCircleFill />}
						title="Account"
						url="account"
					/>
					<NavListItems icon={<SlSettings />} title="Setting" url="setting" />
					<ThemeSwitcher darkMode={darkMode} setMode={setMode} />
				</ul>
			</div>
		</div>
	);
};

export default SideBar;
