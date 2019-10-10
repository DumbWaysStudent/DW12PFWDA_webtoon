import React, {Component} from 'react'
import {FlatList,TouchableOpacity,View,Dimensions,ImageBackground,Image,StyleSheet,ScrollView} from 'react-native'
import {Text,Content,Container,List,ListItem,Left, Thumbnail, Body}from 'native-base'
import Slideshow from 'react-native-image-slider-show'
import Carousel from 'react-native-anchor-carousel'
const data = [{
    title: 'The Secret of Angel',
    url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
    caption : 'Lorem Ipsum'
    }, {
    title: 'Pasutri Gaje',
    url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
    caption : 'Dolor Sit Amet'
    }, {
    title: 'Young Mom',
    url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
    caption : 'Lorem Ipsum 1'              
    }, {
    title: 'Lorem Ipsum',
    url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
    caption : 'Lorem Ipsum 1'              
    }
]

class Details extends Component{
  render(){
    return(
      <View><Text>Profile</Text></View>
    )
  }
}
export default Details