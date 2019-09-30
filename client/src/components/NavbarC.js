import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import AuthA from '../store/actions/AuthA';
import './Navbar.css';
import NavbarVAuth from './NavbarVAuth';
import NavbarVNonAuth from './NavbarVNonAuth';
import PropTypes from 'prop-types';

const styles = theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  inputRoot: {
    color: '#222222',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
    leftIcon: {
    marginRight: theme.spacing.unit,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
    },
  },
row: {
    display: 'flex',
    justifyContent: 'center',
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
});

class NavbarC extends Component {
  constructor(props){
    super(props);
  }

  logout = () => {
    this.props.authfn.logout();
  };

    render() {
      if(this.props.auth) {
        console.log('props :', this.props);
        return(
          <div>
            <NavbarVAuth 
              logout={this.logout} 
              picture={this.props.picture} 
              firstName={this.props.firstName} 
              lastName={this.props.lastName} 
              userId={this.props.userId} 
              auth={this.props.auth} 
              classes={this.props.classes}
            />
          </div>  
        )
        } else {
          return <NavbarVNonAuth
          classes={this.props.classes}
          />
        }
    }
}

NavbarC.propTypes = {
  auth: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {
    auth: state.AuthR.auth,
    token: state.AuthR.token,
    userId: state.AuthR.userId,
    firstName: state.AuthR.firstName,
    lastName: state.AuthR.lastName,
    picture: state.AuthR.picture
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authfn: AuthA(dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(NavbarC));
