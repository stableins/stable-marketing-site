const initialState = {
  scrollStatus: "",
}

export default function User(state = initialState, action) {
  switch (action.type) {
    case "SITE::SET_SCROLL_STATUS":
      return {
        ...state,
        scrollStatus: action.payload,
      }

    default:
      return state
  }
}
