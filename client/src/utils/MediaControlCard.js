import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import userUnknown from './userUnknown.jpg'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import AuthA from '../store/actions/AuthA';
import DateIlYA from './DateIlYA';
import '../boutons.css';

const styles = ({
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  cover: {
    width: 151,
    height: 151,
    border: '1px solid black'
  }
});

class MediaControlCard extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const { classes} = this.props;
        if (this.props.auth) {
            return (
                <Card className="d-flex flex-fill w-100 flex-wrap m-2 p-2 pr-4" style={{backgroundColor: 'efffff'}}>
                    <CardMedia
                        className={classes.cover}
                        image={this.props.client.picture ? this.props.client.picture : userUnknown} 
                    />
                    <div className={classes.details + 'd-flex flex-fill w-75'}>
                        <CardContent className={"d-flex flex-fill"}>
                        <Typography component="h5" variant="title" className="d-flex w-75" style={{display: 'inline'}}>
                            {this.props.item.titre}
                        </Typography>
                        <Typography component="h5" variant="title" className="d-flex w-25 justify-content-end" style={{display: 'inline', color: 'green'}}>
                        <DateIlYA dateAnnonce={this.props.item.dateAnnonce}/>&nbsp;-&nbsp;{this.props.item.tarif}€/h
                        </Typography>
                        </CardContent>
                        <hr className="w-100 m-1"/>
                        <CardContent>
                        </CardContent>
                        <div style={{marginLeft:'120px'}}>
                        <Button component={Link} className="blueButton" to={`/annonce/${this.props.item.id}`}>
                            En savoir plus
                        </Button>
                        </div>
                    </div>
                </Card>
            );
        } else {
            return (
                <Card className="d-flex flex-fill w-100 flex-wrap m-2 p-2 pr-4" style={{backgroundColor: 'efffff'}}>
                    <CardMedia
                        className={classes.cover}
                        image={this.props.client.picture ? this.props.client.picture : userUnknown} 
                    />
                    <div className={classes.details + 'd-flex flex-fill w-75'}>
                        <CardContent className={"d-flex flex-fill"}>
                        <Typography component="h5" variant="title" className="d-flex w-75" style={{display: 'inline'}}>
                            {this.props.item.titre}
                        </Typography>
                        <Typography component="h5" variant="title" className="d-flex w-25 justify-content-end" style={{display: 'inline', color: 'green'}}>  
                            <DateIlYA dateAnnonce={this.props.item.dateAnnonce}/>&nbsp;-&nbsp;{this.props.item.tarif}€/h
                        </Typography>
                        </CardContent>
                        <hr className="w-100 m-1"/>
                        <CardContent>
                        </CardContent>
                        <div style={{marginLeft:'120px'}}>
                        Veuillez vous &nbsp; 
                        <Link className="greenLink" to={`/register`}>
                          enregistrer 
                        </Link>
                        &nbsp; ou vous &nbsp;
                        <Link className="blueLink" to={`/login`}>
                        connecter
                        </Link>
                        &nbsp; si vous souhaitez en savoir plus et contacter la personne 
                        </div>
                    </div>
                </Card>
            )
        }
    } 
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired
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
  
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MediaControlCard));
