import { useEffect, useState } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import BarChart from '../components/Charts/BarChart';
import Header from '../components/header';
import TransactionItem from '../components/TransactionItem';

export const CategoriesList = [
	{ id: 1, category: 'Payments' },
	{ id: 2, category: 'Bills' },
	{ id: 3, category: 'Food' },
	{ id: 4, category: 'Bar & Restaurant' },
	{ id: 5, category: 'Clothes' },
	{ id: 6, category: 'Gifts' },
];

const Categories = () => {
	const ctgData = JSON.parse(localStorage.getItem('category'));

	const [ctgName, setCtgName] = useState('');
	const [categories, setCategories] = useState(ctgData || CategoriesList);

	const addCategory = (e) => {
		e.preventDefault();
		const newCategory = { id: self.crypto.randomUUID(), category: ctgName };

		setCtgName('');
		setCategories([...categories, newCategory]);
	};

	localStorage.setItem('category', JSON.stringify(categories));

	const deleteCat = (id) => {
		setCategories((current) =>
			current.filter((category) => category.id !== id)
		);
		localStorage.setItem('category', JSON.stringify(categories));
		console.log(id);
	};

	return (
		<div className="md:mx-56 m-8">
			<Header title="Categories" />
			<form className="lg:w-1/2">
				<div className=" w-full md:w-1/2 mb-6 md:mb-0">
					<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
						Add Category
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						type="text"
						value={ctgName}
						onChange={(e) => setCtgName(e.target.value)}
						placeholder="Kids..."
					/>
				</div>
				<button
					type="submit"
					className="p-2 mt-2 text-sm font-medium text-white bg-green-700 rounded-lg border hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
					onClick={addCategory}
				>
					Add
				</button>
			</form>
			{categories?.map((ctg) => (
				<ul key={ctg.id} id={ctg.id}>
					<li className="flex justify-between items-center bg-white w-1/2 rounded-md my-2 p-2">
						{ctg.category}
						<span className="cursor-pointer">
							<BsFillTrashFill onClick={() => deleteCat(ctg.id)} />
						</span>
					</li>
				</ul>
			))}
		</div>
	);
};

export default Categories;
