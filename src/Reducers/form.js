const initialState = {
  email: null,
  status: "allDataForm",
}

export default function User(state = initialState, action) {
  switch (action.type) {
    case "FORM::SET_EMAIL":
      return {
        ...state,
        email: action.payload,
      }

    case "FORM::SET_STATUS":
      return {
        ...state,
        status: action.payload,
      }

    default:
      return state
  }
}
