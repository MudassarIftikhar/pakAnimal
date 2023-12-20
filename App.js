/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Component, useEffect} from 'react';
import {} from 'react-native';
import Router from './src/router/index.js';
import SplashScreen from 'react-native-splash-screen';
import {AuthProvider} from './src/context/auth.context';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}
