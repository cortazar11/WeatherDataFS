import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import postsReducer from './postsReducer';
import weather from './weatherReducer';
import photoReducer from './photoReducer';
import termReducer from './termReducer';

export default combineReducers({
  form: formReducer,
  posts: postsReducer,
  weather: weather,
  photos: photoReducer,
  term: termReducer,
});
