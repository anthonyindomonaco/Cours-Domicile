import React, { Component } from 'react';
import AnnonceItem from './AnnonceItem';
import axios from 'axios';
import NombreAnnonce from '../utils/NombreAnnonce';
import IntegrationReactSelectMatieres from '../utils/IntegrationReactSelectMatieres';
import IntegrationReactSelectLocalisation from '../utils/IntegrationReactSelectLocalisation';
import IntegrationReactSelectNearby from '../utils/IntegrationReactSelectNearby';
import IntegrationReactSelectPrice from '../utils/IntegrationReactSelectPrice';
import Button from '@material-ui/core/Button'
import '../boutons.css'

class Annonce extends Component {
  constructor() {
    super();
    this.state = {
      annonces: []
    };
  }

  componentDidMount(){
    this.getAnnonce();
  }

  getAnnonce(){
      axios.get(process.env.REACT_APP_GET_ANNONCE_URL)
      .then(res => {
        this.setState({annonces: res.data}, () => {
          })
      })
      .catch(err => console.log(err));
  }

    render() {
        const annonceItems = this.state.annonces.map((annonce, i) => {
          return (
            <AnnonceItem key={annonce.id} item={annonce}/>
          )
        })

        return (
          <div className="d-inline-flex flex-column p-3">
            <div>
            <IntegrationReactSelectMatieres />
            <IntegrationReactSelectLocalisation/>
            <IntegrationReactSelectNearby/>
            <IntegrationReactSelectPrice/>
            <Button className="greenButton" style={{width: '8%'}}>Valider</Button>
            </div>
            <div className="d-inline-flex flex-column p-3" style={{backgroundColor: '#eeeeef'}}>
                <h1 className="d-flex w-100"> Annonces </h1>
                <NombreAnnonce className="d-flex w-100" annonces={this.state.annonces}/>
                <br/>
                <ul>
                  {annonceItems}
                </ul>
              </div>
          </div>
        );
    }
}

export default Annonce;
