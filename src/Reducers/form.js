const initialState = {
  email: "email@email.com",
  status: "Email Address & Additional Info",
  driverReport: false,
  userType: "Rideshare Fleet",
  calendlyScheduled: true,
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

    case "FORM::SET_CALENDLY_SCHEDULED":
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
