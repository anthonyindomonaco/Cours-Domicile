import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import AuthA from '../store/actions/AuthA';
import Card from '@material-ui/core/Card';
import '../addAnnonce.css';
import '../boutons.css';

class AddAnnonce extends Component {

  constructor(props) {
    super(props);
    this.state = {
        titre: '',
        matieres: [],
        annonce: '',
        tarif: '',
        localisation: ''
    }
    this.handleTitreChange = this.handleTitreChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
}

  addAnnonce(newAnnonce) {
    let Token = localStorage.getItem("token")
    axios.post(process.env.REACT_APP_ADD_ANNONCE_URL, newAnnonce)
    .then(() => {
      this.props.history.push(`/annonce`);
    })
    .catch(err => console.log(err));
  }

  onSubmit(newAnnonce){
    newAnnonce ={
      'userId': localStorage.getItem("userId"),
      'titre': this.state.titre,
      'matieres': this.state.matieres,
      'annonce': this.state.annonce,
      'tarif': this.state.tarif,
      'dateAnnonce': new Date(),
      'localisation': this.state.localisation
    }
    this.addAnnonce(newAnnonce);
  }

  handleTitreChange(e){
    this.setState({titre: e.target.value});
  }

  handleMatieresChange = (e) => {
    this.setState({matieres: e.target.value});
  }

  handleAnnonceChange = (e) => {
    this.setState({annonce: e.target.value});
  }

  handleTarifChange = (e) => {
    this.setState({tarif: e.target.value})
  };

  handleLocalisationChange = (e) => {
    this.setState({localisation: e.target.value});
  }

  render() {
    if(this.props.auth){
      return (
        <form>
          <Card style={{padding: '10px', margin: '10px', backgroundColor: '#eeeeef'}}>
              <Typography className="label" variant="title" gutterBottom> Titre </Typography>
              <TextField
                required
                autoFocus
                style={{width:'300px'}}
                label="Votre titre ici"
                type="text"
                name="titre"
                onChange={this.handleTitreChange}
              />
              <br/><br/>
              <Typography className="label" variant="title" gutterBottom> Votre annonce </Typography>
              <br/>
              <TextField
                variant="outlined"
                multiline
                type="textarea"
                required
                rows="20"
                rowsMax="20"
                fullWidth
                style={{backgroundColor: '#fffffe'}}
                onChange={this.handleAnnonceChange}
                label="Votre annonce ici"
                name="annonce"
              />
              <br/>
              <Typography className="label" variant="title" gutterBottom> Tarif </Typography>
              <TextField
                label="Votre tarif ici"
                type="number"
                required
                style={{width:'110px'}}
                name="tarif"
                onChange={this.handleTarifChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      disableTypography
                      style={{color:'#222222'}}>
                      €
                    </InputAdornment>
                  ),
                }}
              />
              <br/>
              <Typography className="label" variant="title" gutterBottom> Localisation </Typography>
              <TextField
                label="Votre localisation ici"
                type="string"
                required
                onChange={this.handleLocalisationChange}
                style={{width:'200px'}}
              />
              <br/><br/>
              <Button onClick={this.onSubmit} className="blueButton"> Sauvegarder </Button>
            </Card>
        </form>           
      );
    } else {
      return <Redirect to='/home' />
    }
  }
}
AddAnnonce.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddAnnonce));
