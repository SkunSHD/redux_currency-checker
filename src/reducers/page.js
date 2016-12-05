const initialState = {
  currency: 'USD',
  value: []
}

export default function page(state = initialState, action) {

  switch (action.type) {
    case 'SET_CURRENCY':
      return { ...state, currency: action.payload }

    default:
      return state
  }

}