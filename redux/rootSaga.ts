import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import homeSaga from 'redux/sagas/homeSaga';

export const sagaMiddleware = createSagaMiddleware();

export default function* rootSaga() {
  yield all([homeSaga()]);
}
