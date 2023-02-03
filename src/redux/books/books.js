const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (bookId) => ({
  type: REMOVE_BOOK,
  bookId,
});

const INITIALBOOKS = [
  {
    id: 1,
    title: 'CSS',
    author: 'Mike dowell',
  },
  {
    id: 2,
    title: 'Ruby',
    author: 'Moses Wood',
  },
  {
    id: 3,
    title: 'JavaScript',
    author: 'Paul Edward',
  },
];

const bookReducer = (state = INITIALBOOKS, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];

    case REMOVE_BOOK: {
      return state.filter((book) => book.id !== action.bookId);
    }
    default:
      return state;
  }
};

export default bookReducer;
