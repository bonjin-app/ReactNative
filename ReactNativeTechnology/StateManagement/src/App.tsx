import React from 'react';
import {Provider} from 'react-redux';
import rootReducer from './slices';
import {createStore} from 'redux';
import TodoApp from './components/TodoApp';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
};

export default App;
