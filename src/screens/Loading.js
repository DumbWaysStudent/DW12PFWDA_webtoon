import React, {Component} from 'react'
import {TouchableOpacity,View,Dimensions,ImageBackground,StyleSheet,Image} from 'react-native'
import {Text,Content,Container,List,ListItem,Left,Title, Thumbnail, Body,Right,Button}from 'native-base'
import Slideshow from 'react-native-image-slider-show'
import Carousel from 'react-native-anchor-carousel'
import {Dummy} from '../components/Dummy'
import HeaderHome from '../components/Headers/HeaderHome'
import Icon from 'react-native-vector-icons/FontAwesome'
import axios from 'axios'

const {height, width } = Dimensions.get('window');
class Loading extends Component{
    componentDidMount = async() => {
        try {
        const result = await axios.get('http://192.168.43.24:9876/api/v1/webtoons')
        setTimeout(() => {
        this.props.navigation.navigate('ForYou',{data:result.data})
        }, 2000);
          
        }
        catch (error) {
            console.log(error)
            alert("There's Problem while Fetching Data")
        }
        
    }
    render(){
        return(
        <View>
            <ImageBackground source = {require('../assets/background.jpg')} style = {styles.loadingBackground}>
            <View style = {{flexDirection:'row'}}>
            <Image style = {styles.loadingImage} source = {require('../assets/loading.gif')}/>
            <Image style = {styles.loadingImage} source = {require('../assets/loading2.gif')}/>
            </View>
            <Text>Wait</Text>
            </ImageBackground>
        </View>
        )
    }
}

export default Loading
const styles = StyleSheet.create({
      loadingBackground:{
        height,width,
        alignItems:'center',
        justifyContent:'center'
      },
      loadingImage:{
        height: height*0.2,
        width:width*0.3
      }

  });