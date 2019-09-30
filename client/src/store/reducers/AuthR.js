const authInitState = {
  auth: false,
  auth_err: false,
  token: null,
  userId: null,
  firstName: null,
  lastname: null,
  picture: null,
  namePicture: null
};

function AuthR (state = authInitState, action) {
  switch (action.type) {
    case 'LOGIN' :
      return { ...state, 
                  auth: true, 
                  token: localStorage.getItem("token"),
                  userId: localStorage.getItem("userId"),
                  firstName: localStorage.getItem('firstName'),
                  lastName: localStorage.getItem('lastName'),
                  picture: localStorage.getItem('picture'),
                  namePicture: localStorage.getItem('namePicture')
                };
    case 'SIGNUP_ERR' :
      return { ...state, auth_err: "L'inscription a échouée"};
    case 'LOGIN_ERR' :
      return { ...state, auth_err: "La connection a échouée"};
    case 'LOGOUT' :
      return { ...state, auth: false};
    case 'UPDATE_IMAGE' :
      return { ...state, picture: localStorage.getItem('picture'),
      namePicture: localStorage.getItem('namePicture')};
    default:
      return state
  }
}

export default AuthR
