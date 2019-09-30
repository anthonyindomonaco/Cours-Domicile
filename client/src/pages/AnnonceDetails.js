import React, { Component } from 'react';
import axios from 'axios';
import AuthA from '../store/actions/AuthA';
import { Link } from 'react-router-dom';
import Redirect from 'react-router-dom/Redirect';
import {connect} from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import userUnknown from '../utils/userUnknown.jpg';
import Button from '@material-ui/core/Button';
import '../boutons.css';

class AnnonceDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details: '',
            client:''
        }
    }
    componentDidMount(){
        this.getAnnonce();
    }
    getAnnonce(){
        let Token = localStorage.getItem("token")
        let REACT_APP_GET_ANNONCE_DETAILS_URL = process.env.REACT_APP_GET_ANNONCE_DETAILS_URL
        axios.get(REACT_APP_GET_ANNONCE_DETAILS_URL.replace(':annonceOffreId:', this.props.match.params.id).replace(':token:', Token))
        .then(res => {
            this.setState({details: res.data}, () => {
            })
            let Token = localStorage.getItem("token")
            let REACT_APP_EDIT_ANNONCE_URL = process.env.REACT_APP_EDIT_ANNONCE_URL
            axios.get(REACT_APP_EDIT_ANNONCE_URL.replace(':DetailsId:', this.state.details.id).replace(':token:', Token))
            .then(res => {
                this.setState({client: res.data}), () => {}
            })
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    }   

    onDelete(){
        let Token = localStorage.getItem("token")
        let REACT_APP_GET_ANNONCE_DETAILS_URL = process.env.REACT_APP_GET_ANNONCE_DETAILS_URL
        axios.delete(REACT_APP_GET_ANNONCE_DETAILS_URL.replace(':annonceOffreId:', this.props.match.params.id).replace(':token:', Token))
        .then(response => {
            this.props.history.push('/annonce');
        })
        .catch(err => console.log(err));
    }
    render(){
        if (this.props.auth) {
            if (this.state.details.userId === localStorage.getItem("userId")) {
                return (
                    <div style={{backgroundColor: '#eeeeef'}}>
                    <br/>
                    <Link className="btn grey" to="/annonce"> Retour </Link>
                    <Card className={'d-flex flex-fill w-100 flex-wrap m-2 p-2'}>
                        <div className={'d-flex flex-fill w-25'} style={{border: '2px solid black', height: 153}}>
                            <CardMedia style={{width: 151, height: 151, border: '1px solid black'}}
                            image={this.state.client.picture ? this.state.client.picture : userUnknown} 
                            />
                            <Typography component="h5" variant="title" className={'d-flex flex-fill justify-content-center'} style={{padding: 5}}>
                            {this.state.client.firstName}
                            </Typography>
                            <hr/>
                        </div>
                        <div className={'d-flex flex-fill flex-column w-75'}>
                            <CardContent>
                                <div className={"d-flex flex-fill"}>
                               <Typography component="h5" variant="title" className="d-flex w-75" style={{display: 'inline'}}>
                                    {this.state.details.titre}
                                </Typography>
                                <Typography component="h5" variant="title" className="d-flex w-25 justify-content-end" style={{display: 'inline', color: 'green'}}>
                                    {this.state.details.tarif}€/h
                                </Typography>
                                </div>
                                <hr/>
                                <Typography className="d-flex flex-fill w-100" style={{whiteSpace: 'pre-line'}}> 
                                    {this.state.details.annonce}
                                </Typography>
                                <br/>
                            <div className={"d-flex flex-fill w-100 justify-content-end"}>
                                <Button component={Link} variant="outlined" className="blueButton" to={`/annoncesOffre/edit/${this.state.details.id}`}> Éditer </Button>
                                <Button onClick={this.onDelete.bind(this)} variant="contained" className="redButton"> Supprimer </Button>
                            </div>
                            </CardContent>
                        </div>
                    </Card>
                    </div>
                )
            } else {
                return (
                    <div className="w-100 p-2 m-4 pr-4" style={{backgroundColor: '#eeeeef'}}>
                    <br/>
                    <Link className="btn grey" to="/annonce"> Retour </Link>
                    <Card className={'d-flex flex-fill w-100 flex-wrap m-2 p-2'}>
                        <div className={'d-flex flex-fill w-25'} style={{border: '2px solid black', height: 153}}>
                            <CardMedia style={{width: 151, height: 151, border: '1px solid black'}}
                            image={this.state.client.picture ? this.state.client.picture : userUnknown} 
                            />
                            <Typography component="h5" variant="title" className={'d-flex flex-fill justify-content-center'} style={{padding: 5}}>
                            {this.state.client.firstName}
                            </Typography>
                            <hr/>
                        </div>
                        <div className={'d-flex flex-fill flex-column w-75'}>
                            <CardContent>
                                <div className={"d-flex flex-fill"}>
                               <Typography component="h5" variant="title" className="d-flex w-75" style={{display: 'inline'}}>
                                    {this.state.details.titre}
                                </Typography>
                                <Typography component="h5" variant="title" className="d-flex w-25 justify-content-end" style={{display: 'inline', color: 'green'}}>
                                    {this.state.details.tarif}€/h
                                </Typography>
                                </div>
                                <hr/>
                                <Typography className="d-flex flex-fill w-100" style={{whiteSpace: 'pre-line'}}> 
                                    {this.state.details.annonce}
                                </Typography>
                                <br/>
                            </CardContent>
                        </div>
                    </Card>
                    </div>
                )
            }
        } else {
            return <Redirect to='/'/>
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

export default connect(mapStateToProps, mapDispatchToProps)(AnnonceDetails);