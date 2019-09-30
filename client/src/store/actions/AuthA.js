import axios from 'axios';
import { push } from 'react-router-redux'

const AuthA = (dispatch) => {

  return {
    signup: (data) => {
        axios.post(process.env.REACT_APP_REG_URL, data)
        .then(() => {
            axios.post(process.env.REACT_APP_LOGIN_URL, data)
            .then((res) => {
              localStorage.setItem('token', res.data.id)
              localStorage.setItem('userId', res.data.userId)
              let REACT_APP_GET_CLIENT_URL = process.env.REACT_APP_GET_CLIENT_URL
              axios.get(REACT_APP_GET_CLIENT_URL.replace(':userId:', res.data.userId).replace(':token:', res.data.id))
                .then((res) => {
                localStorage.setItem('firstName', res.data.firstName)
                localStorage.setItem('lastName', res.data.lastName)
                localStorage.setItem('picture', res.data.picture)
                localStorage.setItem('namePicture', res.data.namePicture)
                dispatch({type: 'LOGIN'});  
                })    
            })
            .catch((err) => {
              console.log(err);
              dispatch({type: 'LOGIN_ERR'});
            })
        })
        .catch((err) => {
          console.log(err);
          dispatch({type: 'SIGNUP_ERR'})
        })
    },
            login: (data) => {
            axios.post(process.env.REACT_APP_LOGIN_URL, data)
              .then((res) => {
                localStorage.setItem('token', res.data.id)
                localStorage.setItem('userId', res.data.userId)
                let REACT_APP_GET_CLIENT_URL = process.env.REACT_APP_GET_CLIENT_URL
                  axios.get(REACT_APP_GET_CLIENT_URL.replace(':userId:', res.data.userId).replace(':token:', res.data.id))
                  .then((res) => {
                  localStorage.setItem('firstName', res.data.firstName)
                  localStorage.setItem('lastName', res.data.lastName)
                  localStorage.setItem('picture', res.data.picture)
                  localStorage.setItem('namePicture', res.data.namePicture)
                  dispatch({type: 'LOGIN'});  
                  }) 
              }
              ).catch((err) => {
                console.log(err);
                dispatch({type: 'LOGIN_ERR'});
            })
            },
    logout: (data) => {
      let Token = data.id
      axios.post(process.env.REACT_APP_LOGOUT_URL,data)
      .then((res) => {
        localStorage.clear();
        dispatch({type: 'LOGOUT'});
      })
    },
    updateImage: (data) => {
      let REACT_APP_PUT_IMAGE_URL = process.env.REACT_APP_PUT_IMAGE_URL
      axios.request({
        method: 'put',
        url: REACT_APP_PUT_IMAGE_URL.replace(':userId:', localStorage.getItem('userId')).replace(':userId:', localStorage.getItem('userId')),
        data: data,
        header: 'Content-Type: application/json'
      })
          .then((res) => {
            localStorage.setItem('namePicture', res.data.namePicture)
            localStorage.setItem('picture', res.data.picture)
              dispatch({type: 'UPDATE_IMAGE'});
              dispatch(push('/annonce'));
          })
          .catch( err => console.log(err));
        }
    }
}

export default AuthA;
