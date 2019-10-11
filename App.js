import React, { Component } from 'react'
import Login from './src/screens/Login'
import Episode from './src/screens/Episode'
import ForYou from './src/screens/ForYou'
import Details from './src/screens/Details'
import Favourites from './src/screens/Favourites'
import Profile from './src/screens/Profile'
import EditProfile from './src/screens/EditProfile'
import Icon from 'react-native-vector-icons/FontAwesome';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs'

const BottomStack = createBottomTabNavigator({
  ForYou: ForYou,
  Favourites: Favourites,
  MyProfile: Profile
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Home') {
        iconName = `home`;
      } else if (routeName === 'Favourites') {
        iconName = `star`;
      }
      else iconName = `user`;

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      return <Icon name={iconName} size={25} color={tintColor} />;
    },
  }
  ),
  tabBarOptions: {
    activeTintColor: 'orange',
    inactiveTintColor: 'black',
  },
}
)

const HomeStack = createStackNavigator({
  BottomStack : {screen: BottomStack,navigationOptions : ()=>({header : null})},
  Details : {screen : Details, navigationOptions : ()=>({header : null})},
  Episode : {screen : Episode, navigationOptions : ()=>({header : null})},
  EditProfile : {screen : EditProfile, navigationOptions : ()=>({header : null})}
},{initialRouteName : 'BottomStack'}
)



export default createAppContainer(createSwitchNavigator(
  {
    Login : HomeStack,
    Home: HomeStack,   
  },  
));

//FAVBEXAMOPLE
// import React, { Component } from 'react';
// import { Container, Header, View, Button, Icon, Fab } from 'native-base';
// export default class FABExample extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       active: false
//     };
//   }
//   render() {
//     return (  
//       <Container>
//         <Header />
//         <View style={{ flex: 1 }}>
//           <Fab
//             active={this.state.active}
//             direction="up"
//             containerStyle={{ }}
//             style={{ backgroundColor: '#5067FF' }}
//             position="bottomRight">            
//             <Icon name="share" />
            
//           </Fab>
//         </View>
//       </Container>
//     );
//   }
// }
