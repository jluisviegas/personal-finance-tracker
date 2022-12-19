import TransactionItem from '../TransactionItem';

const TransactionsGrid = ({ itens, setItens }) => {
	const onDelete = (ID) => {
		const newArray = itens.filter((transaction) => transaction.id !== ID);
		setItens(newArray);
		localStorage.setItem('transactions', JSON.stringify(newArray));
	};

	return (
		<div className="bg-white rounded-2xl items-center w-full h-full drop-shadow-lg p-2">
			{itens?.map((item, index) => (
				<TransactionItem key={index} item={item} onDelete={onDelete} />
			))}
		</div>
	);
};

export default TransactionsGrid;
