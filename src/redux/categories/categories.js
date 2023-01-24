// Action types
const CHECK_STATUS = 'categories/CHECK_STATUS';

// Initial State
const initialState = {
  categories: [],
};

// Action Creators
export const checkStatus = () => ({ type: CHECK_STATUS });

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_STATUS:
      return { ...state, status: 'Under construction' };
    default:
      return state;
  }
}
