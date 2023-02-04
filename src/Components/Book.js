import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';

const Book = (book) => {
  // eslint-disable-next-line camelcase
  const { title, author, item_id } = book;
  const dispatch = useDispatch();
  return (
    <div className="book">
      <p className="entries">
        BookName:
        {title}
        Author:
        {author}
        <button
          className="btn"
          type="button"
          onClick={() => dispatch(deleteBook(item_id))}
        >
          Remove
        </button>
      </p>
    </div>
  );
};

export default Book;
