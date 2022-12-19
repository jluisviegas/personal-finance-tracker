import { useState } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import Header from '../components/header';

const Cards = () => {
	const cardData = JSON.parse(localStorage.getItem('cards'));

	const [cardName, setCardName] = useState('');
	const [card, setCard] = useState(cardData || []);

	const addCard = (e) => {
		e.preventDefault();
		const newCard = { id: self.crypto.randomUUID(), card: cardName };

		setCardName('');
		setCard([...card, newCard]);
	};

	localStorage.setItem('cards', JSON.stringify(card));

	const deleteCat = (id) => {
		setCard((current) => current.filter((card) => card.id !== id));
		localStorage.setItem('cards', JSON.stringify(card));
	};

	return (
		<div className="md:mx-56 m-8">
			<Header title="Cards" />
			<form className="lg:w-1/2">
				<div className=" w-full md:w-1/2 mb-6 md:mb-0">
					<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
						Add Card
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						type="text"
						value={cardName}
						onChange={(e) => setCardName(e.target.value)}
						placeholder="Kids..."
					/>
				</div>
				<button
					type="submit"
					className="p-2 mt-2 text-sm font-medium text-white bg-green-700 rounded-lg border hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
					onClick={addCard}
				>
					Add
				</button>
			</form>
			{card?.map((item) => (
				<ul key={item.id} id={item.id}>
					<li className="flex justify-between items-center bg-white w-1/2 rounded-md my-2 p-2">
						{item.card}
						<span className="cursor-pointer">
							<BsFillTrashFill onClick={() => deleteCat(item.id)} />
						</span>
					</li>
				</ul>
			))}
		</div>
	);
};

export default Cards;
