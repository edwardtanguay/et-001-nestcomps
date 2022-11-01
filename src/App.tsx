import './App.scss';

const books = [
	{
		id: 1,
		title: 'Building Microservices',
		author: 'Sam Newman',
		bookUrl: 'https://edwardtanguay.vercel.app/techBooks?id=1',
		imageUrl:
			'https://edwardtanguay.vercel.app/customImages/techBooks/buildingMicroservices.jpg'
	},
	{
		id: 2,
		title: 'Gatsby E-Commerce',
		author: 'Alex Libby',
		bookUrl: 'https://edwardtanguay.vercel.app/techBooks?id=2',
		imageUrl:
			'https://edwardtanguay.vercel.app/customImages/techBooks/gatsbyEcommerce.jpg'
	},
	{
		id: 3,
		title: 'Rust Web Programming',
		author: 'Maxwell Flitton',
		bookUrl: 'https://edwardtanguay.vercel.app/techBooks?id=3',
		imageUrl:
			'https://edwardtanguay.vercel.app/customImages/techBooks/rustWeb.jpg'
	}
];

function App() {
	return (
		<div className="App">
			<h1>Book Site</h1>
			<h2>There are {books.length} books:</h2>
			<div className="books">
				{books.map((book, i) => {
					return (
						<div className="book" key={i}>
							<a href={book.bookUrl} target="_blank">
								<img className="cover" src={book.imageUrl} />
							</a>
							<div className="info">
								<div className="title">
									<a href={book.bookUrl} target="_blank">
										{book.title}
									</a>
								</div>
								<div className="author">{book.author}</div>
							</div>
						</div>
					);
				})}
			</div>			
		</div>
	);
}

export default App;