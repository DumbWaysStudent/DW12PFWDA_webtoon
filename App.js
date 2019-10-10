import React from 'react';
import ForYou from './src/screens/ForYou';
import Details from './src/screens/Details'
import { Ionicons } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from'react-navigation-tabs'

class HomeScreen extends React.Component {
  render() {
    return (
      <ForYou/>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <Details/>
    );
  }
}


const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Settings: { screen: SettingsScreen },
});

export default createAppContainer(createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Settings: { screen: HomeStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }
        else iconName = `ios-options${focused ? '' : '-outline'}`;

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
));