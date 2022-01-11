const initialState = {
  email: null,
}

export default function User(state = initialState, action) {
  switch (action.type) {
    case "FORM::SET_EMAIL":
      return {
        ...state,
        email: action.payload,
      }

    default:
      return state
  }
}
