import {
  SET_CURRENCY,
  GET_CURRENCY_REQUEST,
  GET_CURRENCY_SUCCESS
} from '../constants/Page'

export function setCurrency(currency) {

  return {
    type: SET_CURRENCY,
    payload: currency
  }

}

export function getCurrency(currency) {

  return (dispatch) => {
    dispatch({
      type: GET_CURRENCY_REQUEST,
      payload: currency
    })

    setTimeout(() => {
      dispatch({
        type: GET_CURRENCY_SUCCESS,
        payload: ['UAH',2,3,4,5]
      })
    }, 2000)
  }
}