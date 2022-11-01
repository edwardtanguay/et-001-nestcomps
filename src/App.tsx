import { useState } from 'react';
import './App.scss';
import books from './data/books.json';
import { Books } from './components/Books';

function App() {
	const [imagesAreShowing, setImagesAreShowing] = useState(true);

	const handleImageToggle = () => {
		setImagesAreShowing(!imagesAreShowing);
	};

	return (
		<div className="App">
			<h1>Book Site</h1>
			<button onClick={() => handleImageToggle()}>Toggle Images</button>
			<h2>There are {books.length} books:</h2>
			<Books books={books} imagesAreShowing={imagesAreShowing} />
		</div>
	);
}

export default App;
