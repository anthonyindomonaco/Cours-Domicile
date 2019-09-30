import React, { Component} from 'react';
import IconLocation from '@material-ui/icons/LocationCityRounded';
import axios from 'axios';
import Autosuggest from 'react-autosuggest';

class IntegrationReactSelectLocalisation extends Component {
  state = {
    communes: '',
    commune: [],
    communne: [],
    ville:''
  };

  componentDidMount() {
    axios.get('https://geo.api.gouv.fr/communes?nom=l&fields=departement&boost=population')
    .then((res) => this.setState({communes: res.data}))
  }

  handleChange = name => value => {
    this.setState({[name]: value}) 
    const ville = this.state.multi.map((i) => i.value);
    this.setState({ville: ville})
  };

  render() {

    /*const commune = this.state.communes.map( name => name.nom)
    console.log(this.state)
    this.state.communne = commune.map(function(item) { 
        return {  
            label: item
        } 
    })
*/

  return (
    <div style={{display: 'inline-block', width: '30%'}}>
      <div style={{display: 'inline-block', width: '58%'}}>
        <Autosuggest
          closeMenuOnSelect={false}
          onChange={this.handleChange('ville')}
          value={this.state.communes}
          suggestions= {this.state.communes}
          options={this.state.communne}
          placeholder={<IconLocation/>}
          isClearable
        />
      </div>
    </div>
);
}
}

export default IntegrationReactSelectLocalisation;