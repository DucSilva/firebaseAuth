import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/index'

import SwitchNavigator from './navigation/SwitchNavigator';
const middleware = applyMiddleware(thunkMiddleware);
const store = createStore(rootReducer, middleware)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <SwitchNavigator />
      </Provider>
    )
  }
}