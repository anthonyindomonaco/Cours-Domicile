/*import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Select from 'react-select';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NoSsr from '@material-ui/core/NoSsr';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import CancelIcon from '@material-ui/icons/Cancel';
import { emphasize } from '@material-ui/core/styles/colorManipulator';
import { NativeSelect } from '@material-ui/core/es';

const suggestions = [
  { label: 'Anglais' },
  { label: 'Français' },
  { label: 'Géographie' },
  { label: 'Histoire' },
  { label: 'Mathématiques' },
  { label: 'Philosophie' },
  { label: 'Physique' },
  { label: "Sciences de l'ingénieur" },
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label,
}));

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 100,
    width: '20%'
  },
  input: {
    display: 'flex',
    padding: 0,
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden'
  },
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
    color: '#CA4F2C',
    borderColor: '#CA4F2C'
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
      0.08,
    ),
  },
  noOptionsMessage: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  singleValue: {
    fontSize: 16,
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    fontSize: 16,
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  }
});

function NoOptionsMessage(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      Plus d'options
    </Typography>
  );
}

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

function Control(props) {
  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps,
        },
      }}
      {...props.selectProps.textFieldProps}
    />
  );
}

function Option(props) {
  return (
    <MenuItem
      buttonRef={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400,
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

function Placeholder(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function ValueContainer(props) {
  return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}

function MultiValue(props) {
  return (
    <Chip
      tabIndex={-1}
      label={props.children}
      variant="outlined"
      className={classNames(props.selectProps.classes.chip, {
        [props.selectProps.classes.chipFocused]: props.isFocused,
      })}
      onDelete={props.removeProps.onClick}
      deleteIcon={<CancelIcon style={{color: '#CA4F2C'}} {...props.removeProps} />}
    />
  );
}

function Menu(props) {
  return (
    <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
      {props.children}
    </Paper>
  );
}

const components = {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  Option,
  Placeholder,
  ValueContainer,
};

class IntegrationReactSelect extends React.Component {
  state = {
    multi: null,
  };

  handleChange = name => value => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { classes, theme } = this.props;

    const selectStyles = {
      input: base => ({
        ...base,
        color: theme.palette.text.primary,
        '& input': {
          font: 'inherit',
        },
      }),
    };

    console.log('selection :', this.state.multi)
    return (
      <div className={classes.root}>
        <NoSsr>
          <Select
            classes={classes}
            styles={selectStyles}
            textFieldProps={{
              label: 'Sélectionner les matières que vous recherchez',
              InputLabelProps: {
                shrink: true,
              },
            }}
            options={suggestions}
            components={components}
            value={this.state.multi}
            onChange={this.handleChange('multi')}
            placeholder="Quelles matières ?"
            isMulti
          />
        </NoSsr>
      </div>
    );
  }
}

IntegrationReactSelect.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(IntegrationReactSelect);*/

import React, { Component} from 'react';
import chroma from 'chroma-js';

import Select from 'react-select';
import IconResearch from '@material-ui/icons/SearchRounded'

const colourOptions = [
  { value: 'mathematiques', label: 'Mathématiques', color: '#00B8D9', isFixed: true },
  { value: 'francais', label: 'Français', color: '#0052CC', disabled: true },
  { value: 'anglais', label: 'Anglais', color: '#5243AA' },
  { value: 'histoire', label: 'Histoire', color: '#FF5630', isFixed: true },
  { value: 'geographie', label: 'Géographie', color: '#FF8B00' },
  { value: 'physique', label: 'Physique', color: '#FFC400' },
  { value: 'philosophie', label: 'Philosophie', color: '#36B37E' },
  { value: 'sciencesDeLIngenieur', label: "Sciences de l'ingénieur", color: '#00875A' },
  { value: 'programmation', label: 'Programmation', color: '#253858' },
  { value: 'autres', label: 'Autres...', color: '#666666' },
];

const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: 'white', marginLeft: '2px', marginRight: '2px', width: '95%', marginBottom: '10px'}),
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

class IntegrationReactSelectMatieres extends Component {
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
  return (
    <div style={{display: 'inline-block', width: '40%'}}>
      <Select
        closeMenuOnSelect={false}
        defaultValue={[colourOptions[0], colourOptions[1]]}
        isMulti
        onChange={this.handleChange('multi')}
        value={this.state.multi}
        options={colourOptions}
        styles={colourStyles}
        placeholder={<IconResearch/>}
      />
    </div>
);
}
}

export default IntegrationReactSelectMatieres;