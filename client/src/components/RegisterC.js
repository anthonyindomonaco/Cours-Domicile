import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import RegisterV from './RegisterV';
import AuthA from '../store/actions/AuthA';

class RegisterC extends Component {

    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            password_confirm: ''
        }
    }

  handleEmailChange = (e) => {
    this.setState({email: e.target.value})
  };

  handleFirstNameChange = (e) => {
    this.setState({firstName: e.target.value})
  };

  handleLastNameChange = (e) => {
    this.setState({lastName: e.target.value})
  };

  handlePasswordChange = (e) => {
    this.setState({password: e.target.value})
  };

  handlePasswordConfirmChange = (e) => {
    this.setState({password_confirm: e.target.value})
  };

  signup = (data) => {
    data = {
      'email': this.state.email,
      'firstName': this.state.firstName,
      'lastName': this.state.lastName,
      'password': this.state.password,
    };
    this.props.authfn.signup(data);
  };

    render() {
        return(
        <RegisterV
      signup={this.signup}
      handleFirstNameChange={this.handleFirstNameChange}
    handleLastNameChange={this.handleLastNameChange}
    handleEmailChange={this.handleEmailChange}
    handlePasswordChange={this.handlePasswordChange}
    handlePasswordConfirmChange={this.handlePasswordConfirmChange}
      auth={this.props.auth}
      />
        )
    }
}
RegisterC.propTypes = {
  auth: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {
    auth: state.AuthR.auth
  }
};

const mapDispatchToProps = dispatch => {
  return {
    authfn: AuthA(dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RegisterC))
