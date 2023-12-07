import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootReducer from './reducers/_root.reducer'; 
import rootSaga from './sagas/_root.saga'; 

const sagaMiddleware = createSagaMiddleware();

const middlewareList = process.env.NODE_ENV === 'development' ?
  [sagaMiddleware, logger] :
  [sagaMiddleware];

const store = createStore(
  // rootSaga contains all other reducers
  rootReducer,
  // adds all middleware to project including saga and logger
  applyMiddleware(...middlewareList),
);

// tells the saga middleware to use the rootSaga
// rootSaga contains all other sagas
sagaMiddleware.run(rootSaga);

export default store;