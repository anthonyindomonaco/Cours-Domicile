import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, withRouter, Redirect } from 'react-router-dom';
import AuthA from '../store/actions/AuthA';
import { TextField, Button } from '@material-ui/core';


class EditAnnonceC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            titre: '',
            annonce: '',
            tarif: ''
        };
        this.handleTitreChange = this.handleTitreChange.bind(this);
        this.handleAnnonceChange = this.handleAnnonceChange.bind(this);
        this.handleTarifChange = this.handleTarifChange.bind(this);
    };

    componentDidMount() {
        this.getAnnonceDetails();
    }

    getAnnonceDetails = () => {
        let Token = localStorage.getItem("token")
        let REACT_APP_GET_ANNONCE_DETAIL2_URL = process.env.REACT_APP_GET_ANNONCE_DETAIL2_URL
        axios.get(REACT_APP_GET_ANNONCE_DETAIL2_URL.replace(':AnnonceId:', this.props.match.params.id).replace(':token:', Token))
        .then(res => {
            this.setState({
                id: res.data.id,
                titre : res.data.titre,
                annonce : res.data.annonce,
                tarif : res.data.tarif
            }, () => {
                console.log(this.state);
            });
        })
        .catch(err => console.log(err));
    }

    handleTitreChange = (e) => {
        this.setState({titre: e.target.value});
    }

    handleAnnonceChange = (e) => {
        this.setState({annonce: e.target.value});
    }

    handleTarifChange = (e) => {
        this.setState({tarif: e.target.value});
    }

    editAnnonce(newAnnonce){
        let UserId = localStorage.getItem("userId")
        let REACT_APP_PUT_ANNONCE_URL = process.env.REACT_APP_PUT_ANNONCE_URL
        axios.request({
            method: 'put',
            url: REACT_APP_PUT_ANNONCE_URL.replace(':Id:', this.state.id).replace(':userId:', UserId),
            data: newAnnonce,
            header: 'Content-Type: application/json'
        })
        .then( res => {
            this.props.history.push('/annonce');
        })
        .catch( err => console.log(err)); 
    }

    onSubmit(e) {
        const newAnnonce = {
            'titre' : this.state.titre,
            'annonce' : this.state.annonce,
            'tarif' : this.state.tarif
        }
        console.log(newAnnonce);
        this.editAnnonce(newAnnonce);
        e.preventDefault();
    }

    render() {
           
        if (this.props.auth) { 
            return (
                <div>
                <br />
                <Link className="btn grey" to="/annonce">Retour</Link>
                <h1>Editer Annonce</h1>
                <form>
                    <TextField 
                        autoFocus
                        required
                        label="titre"
                        type="text" 
                        name="titre" 
                        value={this.state.titre}
                        onChange={this.handleTitreChange} />
                    <br/>
                    <TextField
                        required
                        label="annonce"
                        type="textarea" 
                        multiline
                        name="annonce" 
                        value={this.state.annonce}
                        onChange={this.handleAnnonceChange} />
                    <br/>
                    <TextField
                        required
                        label="tarif"
                        type="number" 
                        name="tarif" 
                        value={this.state.tarif}
                        onChange={this.handleTarifChange} />
                    <br/>
                    <Button onClick={this.onSubmit.bind(this)} className="btn" to="/annonce">Sauvegarder</Button>
                </form>
            </div>
            )
            
        } else {
            return <Redirect to='/' /> 
        }    
    }
}

EditAnnonceC.propTypes = {
    auth: PropTypes.bool.isRequired
  };

const mapStateToProps = (state) => {
    return {
      auth: state.AuthR.auth,
    token: state.AuthR.token,
    userId: state.AuthR.userId
    }
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      authfn: AuthA(dispatch)
    }
  };  

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditAnnonceC));