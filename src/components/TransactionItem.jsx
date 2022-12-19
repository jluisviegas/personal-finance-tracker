import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { MdTrendingDown, MdTrendingUp } from 'react-icons/md';

const TransactionItem = ({ item, onDelete }) => {
	return (
		<div className="flex bg-gray-100 rounded-md items-center justify-between drop-shadow-sm m-4 pr-2">
			<div>
				{item.type ? (
					<MdTrendingDown className="bg-red-400 p-2 flex w-8 h-8 rounded-md items-center justify-center" />
				) : (
					<MdTrendingUp className="bg-green-400 p-2 flex w-8 h-8 rounded-md items-center justify-center" />
				)}
			</div>
			<h4 className="text-gray-600">{item.desc}</h4>
			{/* <h4 className="text-gray-600">{item.category}</h4> */}
			<h4 className="text-gray-600 font-bold">{`$ ${item.amount}`}</h4>
			<h4 className="text-gray-600 text-xs">Credit</h4>
			<span className="cursor-pointer">
				<BsFillTrashFill onClick={() => onDelete(item.id)} />
			</span>
		</div>
	);
};

export default TransactionItem;
