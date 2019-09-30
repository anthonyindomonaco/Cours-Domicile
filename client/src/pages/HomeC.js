import React, { Component } from 'react';
import HomeV from './HomeV';
import {withRouter} from 'react-router-dom';

class HomeC extends Component {
  render() {
        return (
            <HomeV/>
        );
    }
}

export default withRouter(HomeC);
