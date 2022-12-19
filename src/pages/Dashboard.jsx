import React from 'react';
import Balance from '../components/Dashboard/Balance';
import Categories from '../components/Dashboard/Categories';
import Overview from '../components/Dashboard/Overview';
import TransactionsGrid from '../components/Dashboard/TransactionsGrid';
import Header from '../components/header';
import SearchBar from '../components/SearchBar';

const Dashboard = ({ income, expanse }) => {
	return (
		<div className="md:mx-56 m-8">
			<Header title="Dashboard" />

			<div className="flex gap-8 flex-wrap lg:flex-nowrap mb-6">
				<Overview income={income} expanse={expanse} />
				<Balance />
			</div>
			<div className="flex gap-8 flex-wrap lg:flex-nowrap mb-6">
				<div className="bg-white rounded-2xl items-center w-full lg:w-3/5 h-full drop-shadow-lg">
					<h2 className="font-2xl font-bold text-center pt-2">
						Latest Transactions
					</h2>
				</div>
				<TransactionsGrid />
				<Categories />
			</div>
		</div>
	);
};

export default Dashboard;
