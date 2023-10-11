/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Component} from 'react';
import {} from 'react-native';
import Router from './src/router/index.js';
// import SplashScreen from 'react-native-splash-screen';
class App extends Component {
  componentDidMount() {
    // SplashScreen.hide();
  }
  render() {
    return <Router />;
  }
}

export default App;
