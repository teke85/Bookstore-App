import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author }) => (
  <div className="bcontainer">
    <div className="b-info">
      <p className="b-category">Category</p>
      <h3 className="b-title">{title}</h3>
      <h4 className="b-author">{author}</h4>
      <div className="b-button">
        <button type="button">Comments</button>
        <button type="button" className="removeBtn">
          Remove
        </button>
        <button type="button" className="editBtn">
          Edit
        </button>
      </div>
    </div>
    <div className="progress">
      <div className="p-text">
        <p>60%</p>
        <p>Completed</p>
      </div>
    </div>
    <div className="b-update">
      <p>CURRENT CHAPTER</p>
      <p>Chapter 18</p>
      <button type="button">UPDATE PROGRESS</button>
    </div>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
