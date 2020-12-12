import { combineReducers } from 'redux';
import author from './authorReducer';
import book from './bookReducer';
import genre from './genreReducer';

const rootReducer = combineReducers({
  author, book, genre
});

export default rootReducer;
