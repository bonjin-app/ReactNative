import {combineReducers} from 'redux';
import auth from '../slices/auth';
import posts from './posts';
import todos from './todos';

const rootReducer = combineReducers({
  auth: auth,
  todos: todos,
  posts: posts,
});

export type RootState = ReturnType<typeof rootReducer>;

declare module 'react-redux' {
  interface DefaultRootState extends RootState {}
}
export default rootReducer;
