import React, { Component } from 'react';
import {connect} from 'react-redux'
import AuthA from '../store/actions/AuthA';
import Redirect from 'react-router-dom/Redirect';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import { Typography } from '@material-ui/core/es';
import Card from '@material-ui/core/Card';
import AccountBox from '@material-ui/icons/AccountBoxRounded';
import Edit from '@material-ui/icons/EditRounded';
import FileCopy from '@material-ui/icons/FileCopyRounded';
import Settings from '@material-ui/icons/SettingsRounded';
import './option.css'

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state={}
    }
    render() {
        if (this.props.auth) {
            return (
                <div>
                    <Button component={Link} to='/annonce'> 
                        Retour
                    </Button>
                    <br/>
                    <Typography variant="display1" style={{marginTop: '5%', marginBottom: '5%'}} gutterBottom>Mon profil</Typography>
                    <div className="d-flex justify-content-center">
                    <Button component={Link} to={`/edit/${this.props.userId}/imageProfile`}>
                        <Card className="CardOption">
                            <AccountBox className="LogoOption"/>
                            <Typography variant="title">Modifier <br/>mon image</Typography>
                        </Card>
                    </Button>
                    <Button component={Link} to={`#`}>
                        <Card className="CardOption">
                            <Edit className="LogoOption"/>
                            <Typography variant="title">Éditer <br/>mon profil</Typography>
                        </Card>
                    </Button>
                    <Button component={Link} to={`/edit/${this.props.userId}/editProfile`}>
                        <Card className="CardOption">
                            <FileCopy className="LogoOption"/>
                            <Typography variant="title">Voir mes annonces</Typography>
                        </Card>
                    </Button>
                    <Button component={Link} to={`#`}>
                        <Card className="CardOption">
                            <Settings className="LogoOption"/>
                            <Typography variant="title">Voir mes <br/>options</Typography>
                        </Card>
                    </Button>
                    </div>
                </div>
            )
        } else {
            return <Redirect to='/annonce'/>
        }
    }
}

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
    
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditProfile));