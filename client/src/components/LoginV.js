import React from 'react';
import { Redirect } from 'react-router-dom';
import TextField from '@material-ui/core/TextField/TextField'
import Button from '@material-ui/core/Button/Button'

const LoginV = (props) => {
  if(props.auth){
    return <Redirect to='/annonce' />
  } else {
    return (
      <div className="container d-flex flex-column justify-content-center w-25" style={{marginTop: '50px', width: '400px'}}>
        <h2 className="d-flex flex-column" style={{marginBottom: '20px', textAlign: 'center'}}>Se connecter</h2>
        <form className="d-flex flex-column justify-content-center"> 
            <TextField
              label="email"
              type="email"
              placeholder="Email"
              autoComplete="username"
              name="email"
              className="d-flex flex-column justify-content-center form-control form-control-lg"
              autoFocus
              onChange={props.handleEmailChanged}
              style={{margin: 10}}
            />
            <TextField
              label="password"
              type="password"
              name="password"
              placeholder="Password"
              className="d-flex flex-column justify-content-center form-control form-control-lg"
              autoComplete="current-password"
              onChange={props.handlePasswordChanged}
              style={{margin: 10}}
            />
            <Button variant='contained' className="d-flex flex-column justify-content-center" style={{margin: 10}} onClick={props.login}>
              Se connecter
            </Button>
        </form>
      </div>
    )
  }
};

export default LoginV;
