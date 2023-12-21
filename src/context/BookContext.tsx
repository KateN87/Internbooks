import { createContext, useMemo, useState } from 'react';
import mockBooks from '../MockData/MockBooks.json';

type BookContextType = {
	bookList: Book[];
	setBookList: React.Dispatch<React.SetStateAction<Book[]>>;
};

export const BookContext = createContext<BookContextType>({
	bookList: [],
	setBookList: () => {},
});

export const BooksProvider = ({ children }: { children: React.ReactNode }) => {
	const [bookList, setBookList] = useState<Book[]>(mockBooks);

	const value = useMemo(
		() => ({
			bookList,
			setBookList,
		}),
		[bookList, setBookList]
	);

	return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
};
