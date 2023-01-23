// Action types
const ADD_BOOK = 'books/ADD_BOOK';
const REMOVE_BOOK = 'books/REMOVE_BOOK';

// Initial State
const initialState = {
  books: [],
};

// Action Creators
export const addBook = (book) => ({ type: ADD_BOOK, book });
export const removeBook = (book) => ({ type: REMOVE_BOOK, book });

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return { ...state, books: [...state.books, action.book] };
    case REMOVE_BOOK:
      return { ...state, books: state.books.filter((b) => b !== action.book) };
    default:
      return state;
  }
}
