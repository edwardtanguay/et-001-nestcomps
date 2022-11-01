interface IBook {
	title: string,
	author: string,
	imageUrl: string,
	bookUrl: string
}

interface IProps {
	books: IBook[]
}

export const Books = (props: IProps) => {
	const { books } = props;
	return (
		<div className="books">
			{books.map((book) => {
				return (
					<div className="book">
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
	);
};
