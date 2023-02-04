import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBooks } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();

  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
  });

  const handleInput = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const book = {
      item_id: new Date().getTime().toString(),
      title: newBook.title,
      author: newBook.author,
      category: 'Fiction',
    };
    dispatch(createBooks(book));
    setNewBook({
      title: '',
      author: '',
    });
  };

  return (
    <form className="form">
      <input
        type="text"
        placeholder="Title"
        name="title"
        required
        value={newBook.title}
        onChange={handleInput}
      />
      <input
        type="text"
        placeholder="Author"
        name="author"
        required
        value={newBook.author}
        onChange={handleInput}
      />
      <button type="submit" className="add-btn" onClick={handleClick}>
        Add
      </button>
    </form>
  );
};

export default AddBook;
