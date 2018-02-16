/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import { AppRegistry
  } from 'react-native';
  import { StackNavigator } from 'react-navigation';


 import Splash from './Splash';
 import Login from './src/components/Login/Login';
 import Register from './src/components/Register/Register';
 import Main from './src/components/Main';
 import Password from './src/components/Password';
/*
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
*/
export const App = StackNavigator({

  Login: { screen: Login },
  Register: { screen: Register },
  Main: { screen: Main },
  Password: { screen: Password }

});

type Props = {};
export default class Tadaa extends Component<Props> {
  render() {
    return (
      < App/>
    );
  }
}

AppRegistry.registerComponent('Tadaa', () => Tadaa);
