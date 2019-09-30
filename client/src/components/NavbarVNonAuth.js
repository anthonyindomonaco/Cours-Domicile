import AppBar from '@material-ui/core/AppBar/AppBar';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import Typography from '@material-ui/core/Typography/Typography';
import React from 'react';
import Button from '@material-ui/core/Button/Button';
import {Link} from 'react-router-dom';
import CreateRounded from '@material-ui/icons/CreateRounded';
import LockOpenrounded from '@material-ui/icons/LockOpenRounded';
import './Navbar.css';
import '../boutons.css';


const NavbarVNonAuth = (props) => {

return (
    <div className={root}>
      <AppBar position="static" style={{backgroundColor: '#F9CA6E'}}>
        <Toolbar>
          <div className="d-flex">
          <Typography className={props.classes.title} variant="title" noWrap>
            CoursDomicile
          </Typography>
          </div>
          <Button className="d-flex ml-auto mr-auto" component={Link} style={{color:'black'}} to="/annonce">
            Les annonces 
          </Button>
          <div className="d-flex"/>
          <div className={props.classes.sectionDesktop}>
            <ul className="navbar-nav" style={{display:'inline-block', marginRight: '30px'}}>
              <li className="nav-item" style={{display:'inline-block', marginRight: '30px'}}>
                <Button component={Link} className="greenButton" to="/register">
                  <CreateRounded className={props.classes.leftIcon} />
                  S'enregistrer
                </Button>
              </li>
              <li className="nav-item" style={{display:'inline-block', marginRight: '30px'}}>
                <Button component={Link} variant="contained" className="blueButton" to="/login">
                  <LockOpenrounded className={props.classes.leftIcon} />
                  Se connecter
                </Button>
              </li>
            </ul>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavbarVNonAuth;