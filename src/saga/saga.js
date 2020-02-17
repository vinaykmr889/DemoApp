import {
  FETCHING_DATA_FROM_API,
} from '../actionTypes'
import {
  call,
  put,
  takeEvery,
} from 'redux-saga/effects';
import {
  fetchApiSuccess,
} from '../actions';
import api from '../api/API'


function* dataSaga() {
  yield takeEvery(FETCHING_DATA_FROM_API, function* () {

    try {
      let data = yield call(api.DataFetchApi.getDataFromApi);
      yield put(fetchApiSuccess(data));
    } catch (e) {
      console.log("error")
    }
  });
}

export default dataSaga

