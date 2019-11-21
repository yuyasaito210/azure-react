import * as types from '../actions/actionTypes';

const initialCalendarEventsState = {
  init: true,
  isFetched: false,
  errorMessage: false,
  isFailure: false,
  value: false,
};

export default (state = initialCalendarEventsState, action) => {
  switch (action.type) {
    case types.LOGEDIN_VIA_AZURE:
      return Object.assign({}, state, {
        init: false,
        isFetching: false,
        isFetched: false,
        isFailure: false,
        errorMessage: false,
        value: action.payload
      });
    default:
      return state;
  }
};
