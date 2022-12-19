import { useState } from 'react';
import { UserCategory } from '../../dummy';
import { CategoriesList } from '../../pages/Categories';
import PieChart from '../Charts/PieChart';

const Categories = () => {
	const [userCategory, setUserCategory] = useState({
		labels: CategoriesList.map((item) => item.category),
		datasets: [
			{
				label: 'Amount',
				data: UserCategory.map((data) => data.amount),
			},
		],
	});

	return (
		<div className="flex items-center flex-col bg-white rounded-2xl w-full md:w-1/2 lg:w-2/5 h-screen px-6 drop-shadow-lg">
			<h2 className="font-2xl font-bold text-center pt-2">Categories</h2>
			<PieChart chartData={userCategory} />
		</div>
	);
};

export default Categories;
