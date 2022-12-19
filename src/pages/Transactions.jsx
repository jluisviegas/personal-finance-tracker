import { useState } from 'react';
import TransactionsGrid from '../components/Dashboard/TransactionsGrid';
import Header from '../components/header';
import { CategoriesList } from './Categories';

const Transactions = ({
	addTransaction,
	transactionsList,
	setTransactionsList,
}) => {
	const [description, setDescription] = useState('');
	const [amount, setAmount] = useState('');
	const [type, setType] = useState('');
	const [account, setAccount] = useState('');

	const generateID = () => Math.round(Math.random() * 1000);

	const handleSubmit = () => {
		if (!description || !amount) {
			alert('Please, enter description and amount!');
			console.log('working');
			return;
		} else if (amount < 1) {
			alert('Please enter a positive value!');
			return;
		}

		const transaction = {
			id: generateID(),
			desc: description,
			amount: amount,
			type: type,
			account: account,
		};

		addTransaction(transaction);

		setDescription('');
		setAmount('');
	};

	return (
		<div className="md:mx-56 m-8">
			<Header title="Transactions" />
			<form className="lg:w-1/2">
				<div className="flex flex-wrap -mx-3">
					<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
						<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
							Description
						</label>
						<input
							className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
							type="text"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							placeholder="Phone bill..."
						/>
					</div>

					<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
						<label
							className="block uppercase tracking-wide text-gray-700 text-xs font-bold"
							htmlFor="grid-last-name"
						>
							Amount
						</label>
						<input
							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							value={amount}
							type="number"
							onChange={(e) => setAmount(e.target.value)}
							placeholder="$"
						/>
					</div>
				</div>

				<div className="flex flex-wrap -mx-3">
					<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
						<label
							className="block uppercase tracking-wide text-gray-700 text-xs font-bold"
							htmlFor="grid-city"
						>
							Category
						</label>
						<div className="relative">
							<select
								className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								onChange={(e) => setCategory(e.target.value)}
							>
								{CategoriesList.map((option) => (
									<option key={option.id} value={option.category}>
										{option.category}
									</option>
								))}
							</select>
							<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
								<svg
									className="fill-current h-4 w-4"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
								>
									<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
								</svg>
							</div>
						</div>
					</div>
					<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
						<label
							className="block uppercase tracking-wide text-gray-700 text-xs font-bold"
							htmlFor="grid-state"
						>
							Type
						</label>
						<div className="relative">
							<select
								className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								onChange={(e) => setType(e.target.value)}
							>
								<option value="income">Income</option>
								<option value="expanse">Expanse</option>
							</select>
							<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
								<svg
									className="fill-current h-4 w-4"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
								>
									<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
								</svg>
							</div>
						</div>
					</div>
					<div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 relative">
						<label
							className="block uppercase tracking-wide text-gray-700 text-xs font-bold"
							htmlFor="grid-zip"
						>
							Account
						</label>
						<div className="relative">
							<select
								className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								onChange={(e) => setType(e.target.value)}
							>
								<option>Primary</option>
								<option>Credit Card</option>
							</select>
							<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
								<svg
									className="fill-current h-4 w-4"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
								>
									<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
								</svg>
							</div>
						</div>
					</div>
				</div>
				<button
					type="submit"
					className="p-2.5 mt-2 text-sm font-medium text-white bg-green-700 rounded-lg border hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
					onClick={handleSubmit}
				>
					Submit
				</button>
			</form>
			<div className="flex flex-col items-center">
				<h4 className="text-gray-600 font-bold text-md mb-2">
					Transactions History
				</h4>
				<TransactionsGrid
					itens={transactionsList}
					setItens={setTransactionsList}
				/>
			</div>
		</div>
	);
};

export default Transactions;
