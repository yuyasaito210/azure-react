import * as types from './actionTypes';

export const logedinViaAzure = (auth, currentUser) => {
  return {
    type: types.LOGEDIN_VIA_AZURE,
    payload: {
      auth,
      currentUser
    }
  }
}