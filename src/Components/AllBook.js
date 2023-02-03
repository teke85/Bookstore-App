import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const AllBooks = () => {
  const books = useSelector((state) => state.books);
  return (
    <div>
      {books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          id={book.id}
        />
      ))}
    </div>
  );
};

export default AllBooks;
