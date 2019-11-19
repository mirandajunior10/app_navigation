import React, { Component } from 'react';
import Orientation  from 'react-native-orientation';
import Navigator from './navigator';

export default class App extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount = () => {
    Orientation.lockToPortrait();
  };

  render() {
    return <Navigator/>
  }
}
