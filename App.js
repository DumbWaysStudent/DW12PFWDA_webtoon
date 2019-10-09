import React, { Component } from 'react'

import Login from './src/screens/Login'
import ForYou from './src/screens/ForYou'
import scratch from './src/screens/scratch'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


const AppNavigator = createStackNavigator(
  {
    Index: Login,
  },
  {
    initialRouteName: 'Index'
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