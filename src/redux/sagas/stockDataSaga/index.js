import { httpClient } from '../../../utils/rest-client';
import { takeLatest, call, put } from 'redux-saga/effects';
import { stockDataApi } from '../../../utils/api-constants';
import {
  ACTION_STOCK_DATA_REQUEST,
  ACTION_STOCK_DATA_RESPONSE,
  ACTION_STOCK_DATA_ERROR,
} from '../../action/stockData-action';

export function* stockData() {
  try {
    const response = yield call(stockDataRequest);
    yield put({ type: ACTION_STOCK_DATA_RESPONSE, payload: response });
  } catch (error) {
    yield put({ type: ACTION_STOCK_DATA_ERROR, payload: error });
  }
}

export async function stockDataRequest() {
  try {
    const response = await httpClient.get(stockDataApi);
    return response;
  } catch (err) {
    if (err.code === 'ECONNABORTED') {
      throw new Error('timeout');
    } else {
      throw err;
    }
  }
}

export function* stockDataSaga() {
  yield takeLatest(ACTION_STOCK_DATA_REQUEST, stockData);
}
