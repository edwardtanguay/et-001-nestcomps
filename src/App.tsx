import { useState } from 'react';
import './App.scss';
import { Books } from './components/Books';
import rawBooks from './data/books.json';
import { IBook } from './interfaces';

const _books: IBook[] = [];
rawBooks.forEach((rawBook) => {
	const book: IBook = {
		...rawBook,
		liked: false,
	};
	_books.push(book);
});

function App() {
	const [imagesAreShowing, setImagesAreShowing] = useState(true);
	const [books, setBooks] = useState(_books);

	const handleImageToggle = () => {
		setImagesAreShowing(!imagesAreShowing);
	};

	return (
		<div className="App">
			<h1>Book Site</h1>
			<button onClick={() => handleImageToggle()}>Toggle Images</button>
			<h2>There are {books.length} books:</h2>
			<div className="totalLikes">Total likes: {books.reduce((total, book) => total + (book.liked ? 1 : 0), 0)}</div>
			<Books books={books} setBooks={setBooks} imagesAreShowing={imagesAreShowing} />
		</div>
	);
}

export default App;