import React, { Component } from 'react'
import Select from 'react-select'
import IconNearby from '@material-ui/icons/NearMeRounded'
import chroma from 'chroma-js';

const options = [
    { value: '5', label: '- 5km', color: '#FF5630'},
    { value: '10', label: '- 10km', color: '#FF8B00'},
    { value: '15', label: '- 15km', color: '#FFC400' },
    { value: '20', label: '- 20km', color: '#00B8D9'},
    { value: '30', label: '- 30km', color: '#0052CC' },
    { value: '50', label: '- 50km', color: '#5243AA' }
]

const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: 'white', width: '95%', marginBottom: '10px'}),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isDisabled
          ? null
          : isSelected ? data.color : isFocused ? color.alpha(0.1).css() : null,
        color: isDisabled
          ? '#ccc'
          : isSelected
            ? chroma.contrast(color, 'white') > 2 ? 'white' : 'black'
            : data.color,
        cursor: isDisabled ? 'not-allowed' : 'default',
      };
    }
}

export default class IntegrationReactSelectNearby extends Component {
    render(){
    return(
        <div style={{display: 'inline-block', width: '10%'}}>
            <Select 
            options={options} 
            placeholder={<IconNearby/>}
            styles={colourStyles}
            />
        </div>
    )
    }
}
/*
import React, { Component} from 'react';
import chroma from 'chroma-js';

import Select from 'react-select';
import IconNearby from '@material-ui/icons/NearMeRounded'

const colourOptions = [
  { value: '5', label: '- 5km', color: '#FF5630'},
  { value: '10', label: '- 10km', color: '#FF8B00'},
  { value: '15', label: '- 15km', color: '#FFC400' },
  { value: '20', label: '- 20km', color: '#00B8D9'},
  { value: '30', label: '- 30km', color: '#0052CC' },
  { value: '50', label: '- 50km', color: '#5243AA' }
];

const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: 'white', width: '95%', marginBottom: '10px'}),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected ? data.color : isFocused ? color.alpha(0.1).css() : null,
      color: isDisabled
        ? '#ccc'
        : isSelected
          ? chroma.contrast(color, 'white') > 2 ? 'white' : 'black'
          : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',
    };
  },
  multiValue: (styles, { data }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ':hover': {
      backgroundColor: data.color,
      color: 'white',
    },
  })
};

class IntegrationReactSelectNearby extends Component {
  state = {
    multi: [],
    matiere: []
  };

  handleChange = name => value => {
    this.setState({[name]: value}) 
    const matiere = this.state.multi.map((i) => i.value);
    this.setState({matiere: matiere})
  };

  render() {
    console.log('States matières : ', this.state)
  return (
    <div style={{display: 'inline-block', width: '10%'}}>
      <Select
        closeMenuOnSelect={false}
        defaultValue={[colourOptions[0], colourOptions[1]]}
        isMulti
        onChange={this.handleChange('multi')}
        value={this.state.multi}
        options={colourOptions}
        styles={colourStyles}
        placeholder={<IconNearby/>}
      />
    </div>
);
}
}

export default IntegrationReactSelectNearby;*/