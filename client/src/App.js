import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AuthA from './store/actions/AuthA';

import Navbar from './components/NavbarC';
import Register from './components/RegisterC';
import LoginC from './components/LoginC';
import Home from './pages/HomeC';
import Annonce from './pages/Annonce';
import AddAnnonce from './pages/AddAnnonce';
import EditAnnonceC from './pages/EditAnnonceC';
import EditProfile from './pages/EditProfile';
import ImagesUploaded from './utils/ImagesUploaded';
import Footer from './components/Footer';
import EditProfileDescription from './pages/EditProfileDescription';

import 'bootstrap/dist/css/bootstrap.min.css';
import AnnonceDetails from './pages/AnnonceDetails';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      loaded:false
    }  
  }

  render() {
    if (this.props.auth) {
      return (
        <Router>
          <div>
              <Navbar/>
              <div className="d-flex flex-column flex-fill justify-content-center" style={{width: '90%', marginLeft: '5%', marginTop: '80px', marginBottom: '15px'}}>
                <Switch>
                  <Route exact path="/" component={ Home } />
                  <Route exact path="/annonce" component={ Annonce } />
                  <Route exact path="/annonce/add" component = { AddAnnonce } />
                  <Route exact path="/annonce/:id" component = {AnnonceDetails} />
                  <Route exact path="/annoncesOffre/edit/:id" component= { EditAnnonceC }/>
                  <Route exact path="/edit/:id" component= {EditProfile} imageUploaded={this.props.imagePreviewUrl}/>
                  <Route exact path="/edit/:id/imageProfile" component={ImagesUploaded}/> 
                  <Route exact path="/edit/:id/editProfile" component={EditProfileDescription}/>
                  <Route component={Annonce} />
                </Switch>
              </div>
              <Footer/>
          </div>
        </Router>
      );
    } else {
      return (
      <Router>
        <div>
          <Navbar/>
          <div className="d-flex flex-column flex-fill pt-4 p-2 justify-content-center">
            <Switch>
              <Route exact path="/register" component={ Register } />
              <Route exact path="/login" component={ LoginC } />
              <Route exact path="/annonce" component={ Annonce } />
              <Route exact path="/" component={ Home } />
              <Route component={Home} />
            </Switch>
          </div>
          <Footer/>
        </div>
      </Router>
      )
    }
  }
}

App.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(App)