import React from 'react';
import PropTypes from 'prop-types';

const AddBook = ({ addNewBook }) => (
  <form onSubmit={addNewBook}>
    <h3>Add Book</h3>
    <input type="text" id="title" placeholder="Book Title" />
    <input type="text" id="author" placeholder="Author Name" />
    <button type="submit" id="add-book">AddBook</button>
  </form>
);

AddBook.propTypes = {
  addNewBook: PropTypes.func.isRequired,
};

export default AddBook;
