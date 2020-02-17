import {
  FETCHING_DATA_FROM_API,
  FETCHING_DATA_API_SUCCESS,
  FETCHING_DATA_API_FAILURE,
} from '../actionTypes'
import { createReducer } from '../ModuleUtils';


const initialState = {
  data: null,
  dataFetched: false,
  isFetching: false,
  error: null,
};

const handlers = {

  [FETCHING_DATA_FROM_API]: state => ({
    ...state,
    data: [],
    isFetching: true
  }),


  [FETCHING_DATA_API_SUCCESS]: (state, { payload: { data } }) => ({
    ...state,
    data: data,
  }),


  [FETCHING_DATA_API_FAILURE]: (state, { payload: { error } }) => ({
    ...state,
    error,
  }),

};

export default createReducer(initialState, handlers);