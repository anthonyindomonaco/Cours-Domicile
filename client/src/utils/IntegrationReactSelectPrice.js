import React, { Component } from 'react'
import Select from 'react-select'
import IconPrice from '@material-ui/icons/EuroSymbolRounded'
import chroma from 'chroma-js';

const options = [
    { value: '15', label: '- 15€', color: '#FF5630'},
    { value: '20', label: '- 20€', color: '#FF8B00'},
    { value: '25', label: '- 25€', color: '#FFC400' },
    { value: '30', label: '- 30€', color: '#00B8D9'},
    { value: '40', label: '- 40€', color: '#0052CC' },
    { value: '50', label: '- 50€', color: '#5243AA' }
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

export default class IntegrationReactSelectPrice extends Component {
    render(){
    return(
        <div style={{display: 'inline-block', width: '10%'}}>
            <Select 
            options={options} 
            placeholder={<IconPrice/>}
            styles={colourStyles}
            />
        </div>
    )
    }
}