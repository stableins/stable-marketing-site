const initialState = {
  scrollStatus: "",
  sessionInfo: null,
}

export default function User(state = initialState, action) {
  switch (action.type) {
    case "SITE::SET_SCROLL_STATUS":
      return {
        ...state,
        scrollStatus: action.payload,
      }

    case "SITE::SET_SESSION_INFO":
      return {
        ...state,
        sessionInfo: action.payload,
      }

    default:
      return state
  }
}
