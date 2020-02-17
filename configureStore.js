import { createStore, applyMiddleware } from 'redux'
import app from './src/reducers'

import createSagaMiddleware from 'redux-saga'
import dataSaga from './src/saga/saga'

const sagaMiddleware = createSagaMiddleware()

export default function configureStore() {
  const store = createStore(app, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(dataSaga)
  return store
}