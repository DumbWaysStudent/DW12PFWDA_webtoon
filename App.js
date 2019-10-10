import React, { Component } from 'react'

import Login from './src/screens/Login'
import Episode from './src/screens/Episode'
import ForYou from './src/screens/ForYou'
import Details from './src/screens/Details'
import Favourites from './src/screens/Favourites'
import Profile from './src/screens/Profile'
import Icon from 'react-native-vector-icons/FontAwesome';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs'

const ForYouStack = createStackNavigator({
  ForYou : {screen : ForYou},
  DetailsStack : {screen : DetailsStack}
})

const DetailsStack = createStackNavigator({
  Details : {screen : Details},
  Episode : {screen : Episode}
})

const BottomStack = createBottomTabNavigator({
  Home: { screen: ForYouStack },
  Favourites: { screen: Favourites },
  Profile: { screen: Profile },  
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Home') {
        iconName = `th-list`;
      } else if (routeName === 'Favourites') {
        iconName = `star`;
      }
      else iconName = `user`;

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      return <Icon name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'orange',
    inactiveTintColor: 'black',
  },
}
)

export default createAppContainer(createSwitchNavigator(
  {
    Login : {screen : Login},
    Home: { screen: BottomStack },   
  },  
));
