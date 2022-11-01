import { IBook } from '../interfaces';

interface IProps {
	book: IBook;
}

export const Book = (props: IProps) => {
	const { book } = props;
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
};
