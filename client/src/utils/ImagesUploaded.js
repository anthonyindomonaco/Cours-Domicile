import React, { Component } from "react";
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AuthA from '../store/actions/AuthA';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Typography } from "@material-ui/core/es";

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  buttonProgress: {
    color: green[500],
    top: '50%',
    left: '50%',
  }
});

class ImagesUploaded extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      imagePreviewUrl: "",
      nameImage: "",
      disabled: false,
      loading: false,
      success: false,
      uploadText: "Charger l'image"
    };
  }

  changeName() {
    var nameAvecEspace = this.state.file.name;
    var nameAvecTiret = nameAvecEspace.replace(/ /g, "_");
    this.setState({ nameImage: nameAvecTiret });
  }

  _handleSubmit(e) {
    e.preventDefault();
    console.log('e2 :', e);
    this.changeName();

    var formData = new FormData();
    var imagefile = document.querySelector('#file');
    formData.append("image", imagefile.files[0]);
    
    let data = {
            'namePicture' : formData.name,
            'picture' : this.state.imagePreviewUrl
        };
    this.props.authfn.updateImage(data);
    this.props.history.push(`/edit/${this.props.userId}`);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };
    reader.readAsDataURL(file);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    clearTimeout(this.timer2);
  }

  handleButtonClick = (e) => {
    if (!this.state.loading) {
      this.setState(
        {
          success: false,
          loading: true,
        },
        () => {
          this.timer = setTimeout(() => {
            this.setState({
              loading: false,
              success: true,
              uploadText: "Image chargée avec succès"
            });
          }, 1000),
          this.timer = setTimeout(() => {
            this._handleSubmit(e);
          }, 2000)
        }
      );
    }
  };

  render() {
    const { loading, success } = this.state;
    const { classes } = this.props;
    const buttonClassname = classNames({
      [classes.buttonSuccess]: success,
    });
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (
        <img
          src={imagePreviewUrl}
          alt=""
          style={{ maxWidth: "250px", maxHeight: "250px" }}
        />
      );
      this.state.disabled = false;
    } else {
      $imagePreview = (
        <div className="previewText">
          Veuillez selectionner une image pour une prévisualisation
        </div>
      );
      this.state.disabled = true;
    }

    return (
      <div>
        <Button component={Link} to={`/edit/${this.props.userId}`}> 
            Retour
        </Button>
        <Typography variant="display1" style={{marginTop: '5%', marginBottom: '5%'}}>Charger une image :</Typography>
      <hr/><br/>
      <div className={classes.root}>
        <form onSubmit={e => this._handleSubmit(e)}>
          <Button>
          <input
            className="fileInput"
            type="file"
            name="file"
            id="file"
            onChange={e => this._handleImageChange(e)}
          />
          </Button>
          <br/><br/>
           <div className={classes.wrapper}>
          <Button
            variant="contained"
            color="primary"
            className={buttonClassname}
            disabled={this.state.disabled ? this.state.disabled : loading}
            onClick={(e) => this.handleButtonClick(e)}
          >
            {this.state.uploadText}
          </Button>
          {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
          </div>
        </form>
        </div>
        <br/><br/>
        <div className="imgPreview">{$imagePreview}</div>
        <hr/>
      </div>
    );
  }
}

ImagesUploaded.propTypes = {
  auth: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {
    auth: state.AuthR.auth,
    token: state.AuthR.token,
    userId: state.AuthR.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authfn: AuthA(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(withRouter(ImagesUploaded)))