/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AlbumList from './components/AlbumList';
import React, { Component } from 'react';

const MyApp = () => {

    return( <AlbumList/>);
}

AppRegistry.registerComponent(appName, () => MyApp);
