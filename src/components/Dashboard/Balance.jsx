import React from 'react';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';

const Balance = () => {
	return (
		<div className="flex flex-col items-center bg-white rounded-2xl w-full lg:w-2/5 md:h-40 md:px-6 drop-shadow-lg">
			<h2 className="font-md md:text-md font-bold text-center pt-2">
				Primary Account
			</h2>
			<div className="flex justify-center items-center py-4">
				<div className="flex w-8 h-8 bg-green-300 rounded-md items-center justify-center mr-4">
					<MdOutlineAccountBalanceWallet />
				</div>
				<h3 className="text-md lg:text-2xl">Balance</h3>
			</div>
			<p className="text-gray-600 text-md font-bold lg:text-3xl">$ 2.000,00</p>
		</div>
	);
};

export default Balance;
