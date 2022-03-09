import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import App from './components/App/App';

function* rootSaga() {
  yield takeEvery('FETCH_SHELF_ITEMS', fetchShelfItems)
}

function* fetchShelfItems(){

  try {
    const shelf = yield axios.get('/api/shelf')
    console.log('get all:', shelf.data);
    yield put({ type: 'SET_SHELF_ITEMS', payload: shelf.data });
    
  } catch {
    console.log('Get all error');
    

  }
}

const shelf = (state = [], action) => {
  switch (action.type) {
      case 'SET_SHELF_ITEMS':
          return [...state, action.payload];
      default:
          return state;
  }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();


const store = createStore(
  combineReducers({
      shelf
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger),
);


sagaMiddleware.run(rootSaga);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root'),
);
