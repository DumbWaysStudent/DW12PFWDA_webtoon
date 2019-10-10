import React, { Component } from 'react'

import Login from './src/screens/Login'
import ForYou from './src/screens/ForYou'
import Details from './src/screens/Details'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


const AppNavigator = createStackNavigator(
  {
    Index: Login,
    Home : ForYou,
    Details : Details
    
  },
  {
    initialRouteName: 'Home'
  }
)

const AppContainer = createAppContainer(AppNavigator)

export default class App extends Component{
  render() {
    return (
      <AppContainer/>
    )
  }
}