import { Book } from './Book';
import { IBook } from '../interfaces';

interface IProps {
	books: IBook[];
	setBooks: any;
	imagesAreShowing: boolean;
	setTotalLikes: any;
	totalLikes: number;
}

export const Books = (props: IProps) => {
	const { books, setBooks, imagesAreShowing, setTotalLikes, totalLikes } = props;
	return (
		<div className="books">
			{books.map((book, i) => {
				return (
					<Book
						books={books}
						setBooks={setBooks}
						book={book}
						imagesAreShowing={imagesAreShowing}
						setTotalLikes={setTotalLikes}
						totalLikes={totalLikes}
						key={i}
					/>
				);
			})}
		</div>
	);
};
