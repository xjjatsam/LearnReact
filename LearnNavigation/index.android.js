/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';

import {
  AppRegistry,
} from 'react-native';

import {
  StackNav,
  TabNav,
  DrawerNav,
} from './src/components/navigators/nav';



//const AppContainer = () => <StackNav/>;
//const AppContainer = () => <TabNav/>;
const AppContainer = () => <DrawerNav/>;


// registerComponent parm1:与MainActivity返回的值对应
AppRegistry.registerComponent('LearnNavigation', () => AppContainer);
