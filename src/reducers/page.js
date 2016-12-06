import { 
  SET_CURRENCY,
  GET_CURRENCY_REQUEST,
  GET_CURRENCY_SUCCESS 
} from '../constants/Page'

const initialState = {
  currency: 'USD',
  value: [],
  fetching: false
}

export default function page(state = initialState, action) {

  switch (action.type) {
    case SET_CURRENCY:
      return { ...state, currency: action.payload }

    case GET_CURRENCY_REQUEST:
      return { ...state, currency: action.payload, fetching: true }

    case GET_CURRENCY_SUCCESS:
      return { ...state, value: action.payload, fetching: false }

    default:
      return state;
  }

}