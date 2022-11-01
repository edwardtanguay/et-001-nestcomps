import { Book } from './Book';
import { IBook } from '../interfaces';

interface IProps {
	books: IBook[];
	imagesAreShowing: boolean;
}

export const Books = (props: IProps) => {
	const { books, imagesAreShowing } = props;
	return (
		<div className="books">
			{books.map((book, i) => {
				return <Book book={book} imagesAreShowing={imagesAreShowing} key={i} />;
			})}
		</div>
	);
};
