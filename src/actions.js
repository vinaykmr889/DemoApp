import * as types from './actionTypes';


export function fetchData() {
  return {
    type: types.FETCHING_DATA_FROM_API
  }
}

export const fetchApiFailure = error => ({
  type: types.FETCHING_DATA_API_FAILURE,
  payload: {
    error,
  },
});

export const fetchApiSuccess = data => ({
  type: types.FETCHING_DATA_API_SUCCESS,
  payload: {
    data,
  },
});
