import { Book } from './Book';
import { IBook } from '../interfaces';

interface IProps {
	books: IBook[];
	setBooks: any;
	imagesAreShowing: boolean;
}

export const Books = (props: IProps) => {
	const {books, setBooks, imagesAreShowing } = props;
	return (
		<div className="books">
			{books.map((book, i) => {
				return <Book books={books} setBooks={setBooks} book={book} imagesAreShowing={imagesAreShowing} key={i} />;
			})}
		</div>
	);
};
