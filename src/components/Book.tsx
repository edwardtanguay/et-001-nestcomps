import { IBook } from '../interfaces';
import { IconContext } from 'react-icons';
import { AiOutlineStar } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';

interface IProps {
	books: IBook[];
	setBooks: any;
	book: IBook;
	imagesAreShowing: boolean;
	setTotalLikes: any;
	totalLikes: number;
}

export const Book = (props: IProps) => {
	const { books, setBooks, book, imagesAreShowing, setTotalLikes, totalLikes } = props;

	const handleStarClick = (book: IBook) => {
		book.liked = !book.liked;
		setBooks([...books]);
		if (book.liked) {
			setTotalLikes(totalLikes + 1);
		} else {
			setTotalLikes(totalLikes - 1);
		}
	};

	return (
		<div className="book">
			{imagesAreShowing && (
				<a href={book.bookUrl} target="_blank">
					<img className="cover" src={book.imageUrl} />
				</a>
			)}
			<div className="info">
				<div className="title">
					<a href={book.bookUrl} target="_blank">
						{book.title}
					</a>
				</div>
				<div className="author">{book.author}</div>
				{book.liked ? (
					<AiFillStar
						onClick={() => handleStarClick(book)}
						className="star likedStar"
					/>
				) : (
					<AiOutlineStar
						onClick={() => handleStarClick(book)}
						className="star notLikedStar"
					/>
				)}
			</div>
		</div>
	);
};
