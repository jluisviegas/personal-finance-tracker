import React from 'react';
import { MdTrendingDown, MdTrendingUp } from 'react-icons/md';

const Overview = ({ income, expanse }) => {
	return (
		<div className="bg-white rounded-2xl items-center w-full lg:w-3/5 h-40 drop-shadow-lg">
			<h2 className="font-2xl font-bold text-center pt-2">Mouth Overview</h2>
			<div className="flex justify-around mt-4">
				<div className="flex flex-col items-center justify-center gap-2">
					<img className="w-9" src="./src/assets/img/mastercard.png" alt="" />
					<h4 className="text-sm">Itaucard</h4>
					<h4 className="text-gray-600 font-bold">$ 1.000</h4>
				</div>
				<div className="flex flex-col items-center justify-center gap-2">
					<div className="flex w-8 h-8 bg-green-400 rounded-md items-center justify-center">
						<MdTrendingUp />
					</div>
					<h4>Income</h4>
					<h4 className="text-gray-600 font-bold">{income}</h4>
				</div>
				<div className="flex flex-col items-center justify-center gap-2">
					<div className="flex w-8 h-8 bg-red-300 rounded-md items-center justify-center">
						<MdTrendingDown />
					</div>
					<h4>Expanse</h4>
					<h4 className="text-gray-600 font-bold">{expanse}</h4>
				</div>
			</div>
		</div>
	);
};

export default Overview;
