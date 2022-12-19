import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import MobileSideBar from './components/SideBar/MobileSideBar';
import SideBar from './components/SideBar/SideBar';
import ThemeSwitcher from './components/ThemeSwitcher';
import Auth from './pages/Auth/Auth';
import Register from './pages/Auth/Register';
import Cards from './pages/Cards';
import Categories from './pages/Categories';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';

function App() {
	const data = localStorage.getItem('transactions');

	const [transactionsList, setTransactionsList] = useState(
		data ? JSON.parse(data) : []
	);
	const [income, setIncome] = useState(0);
	const [expanse, setExpanse] = useState(0);
	const [total, setTotal] = useState(0);
	const [darkMode, setDarkMode] = useState(false);

	const setMode = () => {
		setDarkMode((prevDarkMode) => !prevDarkMode);
		localStorage.setItem('themeMode', darkMode);
	};

	useEffect(() => {
		const amountExpanse = transactionsList
			.filter((item) => item.expanse)
			.map((transaction) => Number(transaction.amount));

		const amountIncome = transactionsList
			.filter((item) => !item.expanse)
			.map((transaction) => Number(transaction.amount));

		const expanse = amountExpanse.reduce((acc, cur) => acc + cur, 0).toFixed(2);
		const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);
		const total = Math.abs(income - expanse).toFixed(2);

		setIncome(`$ ${income}`);
		setExpanse(`$ ${expanse}`);
		setTotal(`${Number(income) < Number(expanse) ? '-' : ''} $ ${total}`);
	}, [transactionsList]);

	const addTransaction = (transaction) => {
		const newTransactions = [...transactionsList, transaction];
		setTransactionsList(newTransactions);
		localStorage.setItem('transactions', JSON.stringify(newTransactions));
		console.log(newTransactions);
	};

	return (
		<div className="App">
			<div className="min-h-screen flex flex-col flex-auto flex-shrink-0 bg-green-100 dark:bg-gray-900 text-gray-800 ">
				<SideBar darkMode={darkMode} setMode={setMode} />
				<MobileSideBar />
				<Routes>
					<Route>
						<Route path="/auth" element={<Auth />} />
						<Route path="/register" element={<Register />} />
						<Route
							path="/"
							element={<Dashboard income={income} expanse={expanse} />}
						/>
						<Route
							path="/dashboard"
							element={<Dashboard income={income} expanse={expanse} />}
						/>
						<Route path="/categories" element={<Categories />} />
						<Route
							path="/transactions"
							element={
								<Transactions
									addTransaction={addTransaction}
									transactionsList={transactionsList}
									setTransactionsList={setTransactionsList}
								/>
							}
						/>
						<Route path="/cards" element={<Cards />} />
					</Route>
				</Routes>
			</div>
		</div>
	);
}

export default App;
