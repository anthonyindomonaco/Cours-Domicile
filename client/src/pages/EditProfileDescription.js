import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import AuthA from '../store/actions/AuthA';
import {connect} from 'react-redux'
import axios from 'axios';
import AnnonceItem from './AnnonceItem';

class EditProfileDescription extends Component {
    constructor(props){
        super(props);
        this.state={
            annonces: []
        }
    }    

    componentDidMount() {
        let REACT_APP_GET_ANNONCE_PERSO_URL = process.env.REACT_APP_GET_ANNONCE_PERSO_URL
        let userId = localStorage.getItem('userId')
        axios.get(REACT_APP_GET_ANNONCE_PERSO_URL.replace(':userId:', userId))
        .then(res => {
            this.setState({annonces: res.data}), () => {}
        })
        .catch(err => console.log(err));
    }

    render() {
        if(this.props.auth) {
            const annonceItems = this.state.annonces.map((annonce, i) => {
                return (
                    <AnnonceItem key={annonce.id} item={annonce}/>
                )
              })

            return (
                <div>
                    <ul>
                        {annonceItems}
                    </ul>
                </div>
            );
        } else {
            return (<div></div>);
        }
    }
}

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
  
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditProfileDescription))