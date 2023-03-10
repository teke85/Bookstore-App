import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className="status-btn"
        type="button"
        onClick={() => dispatch(checkStatus())}
      >
        Check Status
      </button>
      <h2>{categories}</h2>
    </div>
  );
};
export default Categories;
