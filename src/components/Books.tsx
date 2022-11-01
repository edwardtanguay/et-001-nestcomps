import { Book } from './Book';
import { IBook } from '../interfaces';

interface IProps {
	books: IBook[]
}

export const Books = (props: IProps) => {
	const { books } = props;
	return (
		<div className="books">
			{books.map((book) => {
				return (
					<Book book={book}/>
				);
			})}
		</div>
	);
};
