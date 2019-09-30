import React from 'react';
import TextField from '@material-ui/core/es/TextField/TextField';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button/Button';

const RegisterV = (props) => {
  if (props.auth) {
    return <Redirect to='/home'/>
  } else {
    return (
      <div className="container d-flex flex-column justify-content-center w-25" style={{marginTop: '50px', width: '700px'}}>
        <h2 className="d-flex flex-column" style={{marginBottom: '20px', textAlign: 'center'}}>S'enregistrer</h2>
        <form className="d-flex flex-column justify-content-center">
            <TextField
              type="text"
              label="Saisir votre prénom"
              required
              placeholder="Saisir votre prénom"
              autoFocus
              className="d-flex flex-column justify-content-center form-control form-control-lg"
              name="firstName"
              onChange={props.handleFirstNameChange}
            />
            <TextField
              type="text"
              label="Saisir votre nom"
              required
              placeholder="Saisir votre nom"
              className="d-flex flex-column justify-content-center form-control form-control-lg"
              name="lastName"
              onChange={props.handleLastNameChange}
            />
            <TextField
              id="email"
              type="email"
              label="Saisir votre email"
              required
              placeholder="Saisir votre email"
              autoComplete="username"
              className="d-flex flex-column justify-content-center form-control form-control-lg"
              name="email"
              onChange={props.handleEmailChange}
            />
            <TextField
              id="password"
              type="password"
              label="Saisir votre mot de passe"
              autoComplete="new-password"
              required
              placeholder="Saisir votre mot de passe"
              className="d-flex flex-column justify-content-center form-control form-control-lg"
              name="password"
              onChange={props.handlePasswordChange}
            />
            <TextField
              type="password"
              required
              label="Confirmer votre mot de passe"
              autoComplete="new-password"
              placeholder="Confirmer votre mot de passe"
              className="d-flex flex-column justify-content-center form-control form-control-lg"
              name="password_confirm"
              onChange={props.handlePasswordConfirmChange}
            />
            <Button onClick={props.signup} className="d-flex flex-column justify-content-center" style={{margin: 10}} variant="contained">
              S'enregistrer
            </Button>
        </form>
      </div>
    )
  }
};

export default RegisterV;
