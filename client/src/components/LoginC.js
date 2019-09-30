import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AuthA from '../store/actions/AuthA';
import LoginV from './LoginV';
import {withRouter} from 'react-router-dom';

class LoginC extends Component {
  constructor(props){
    super(props);
    this.state = {
      email:"",
      password:""
    }
  };

  handleEmailChanged = (e) => {
    this.setState({email: e.target.value})
  };

  handlePasswordChanged = (e) => {
    this.setState({password: e.target.value})
  };

    login = () => {
      let data = {
        'email': this.state.email,
        'password': this.state.password,
      };
      this.props.authfn.login(data);
    };

  render() {
        return(
          <LoginV
            handleEmailChanged={this.handleEmailChanged}
            handlePasswordChanged={this.handlePasswordChanged}
            login = {this.login}
            auth = {this.props.auth}/>
        )
    }
}
LoginC.propTypes = {
  auth: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {
    auth: state.AuthR.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authfn: AuthA(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginC))
