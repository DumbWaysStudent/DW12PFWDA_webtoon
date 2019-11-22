import React, { Component } from 'react'
import Login from '../screens/Login'
import Splash from '../screens/Splash'
import Loading from '../screens/Loading'
import Episode from '../screens/Episode'
import Register from '../screens/Register'
import ForYou from '../screens/ForYou'
import Creation from '../screens/Creation'
import Details from '../screens/Details'
import Favorites from '../screens/Favorites'
import Profile from '../screens/Profile'
import EditProfile from '../screens/EditProfile'
import EditWebtoon from '../screens/EditWebtoon'
import EditEpisode from '../screens/EditEpisode'
import CreateWebtoon from '../screens/CreateWebtoon'
import CreateEpisode from '../screens/CreateEpisode'
import Icon from 'react-native-vector-icons/FontAwesome';
import {Dimensions} from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createDrawerNavigator,DrawerItems} from 'react-navigation-drawer'

const {height, width } = Dimensions.get('window');
const BottomStack = createBottomTabNavigator({
  ForYou: ForYou,
  Favorites: Favorites,
  Profile: Profile
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'ForYou') {
        iconName = `home`;
      } else if (routeName === 'Favorites') {
        iconName = `star`;
      }
      else iconName = `user`;

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      return <Icon name={iconName} size={25} color={tintColor} />;
    },
    // tabBarOnPress: ({ navigation, defaultHandler }) => {
    //   // if(navigation.state.index > 0) {
    //   //   navigation.dispatch(StackActions.popToTop());
    //   // }
    //   // defaultHandler();
    //   console
    // },
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
  EditProfile : {screen : EditProfile, navigationOptions : ()=>({header : null})},
  Creation : {screen : Creation, navigationOptions : ()=>({header : null})},
  EditWebtoon : {screen : EditWebtoon, navigationOptions : ()=>({header : null})},
  EditEpisode : {screen : EditEpisode, navigationOptions : ()=>({header : null})},
  CreateWebtoon : {screen : CreateWebtoon, navigationOptions : ()=>({header : null})},
  CreateEpisode : {screen : CreateEpisode, navigationOptions : ()=>({header : null})}
},{initialRouteName : 'BottomStack'}
)
const Navigator = createDrawerNavigator({
  HomeStack:{screen:HomeStack,navigationOptions: {
    drawerLabel: () => null,
    drawerIcon: () => null
  }}
  },
  {
    drawerType: 'slide',
    // drawerPosition: 'right',
    drawerWidth: width*0.6,
    drawerBackgroundColor: '#f2fcfc',
    contentComponent: CustomDrawerContentComponent
  },
)

const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}>
      <View style={{alignItems:'center',marginTop:height*0.05,marginBottom:height*0.03}}>
      {/* <Image
        style={styles.image}
        source={require('../assets/logo.png')}
      /> */}
      <Text style={{fontSize:18,textAlign:'center'}}>Polley Pool Arena</Text>
      </View>

      <DrawerItems {...props} />
      <View style={{marginLeft:width*0.045,flexDirection:'row'}}>
      <Button transparent onPress={()=>props.navigation.navigate("Account")}>
      <Icon color="#615c5c" size={24}  name ="sign-out-alt"/>
      <Text style={{color:'black',fontSize:14,fontWeight:'bold',marginLeft:width*0.09}}>Sign Out</Text>
      </Button>
      </View>
    </SafeAreaView>
  </ScrollView>
);

const AccountStack = createStackNavigator({
  Login : {screen : Login, navigationOptions : ()=>({header : null})},
  Register : {screen : Register, navigationOptions : ()=>({header : null})}
},{initialRouteName : 'Login'}
)

const RootNavigator = createSwitchNavigator({
  Splash : Splash,
  Account : AccountStack,
  Loading: Loading,
  Home: Navigator,   
},{initialRouteName:"Splash"})

export default createAppContainer(RootNavigator);
