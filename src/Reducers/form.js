const initialState = {
  email: null,
  status: "",
  driverReport: false,
  userType: null,
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

    case "FORM::SET_DRIVER_REPORT":
      return {
        ...state,
        driverReport: action.payload,
      }

    case "FORM::SET_USER_TYPE":
      return {
        ...state,
        userType: action.payload,
      }

    default:
      return state
  }
}
