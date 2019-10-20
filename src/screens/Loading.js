import React, {Component} from 'react'
import {View,Dimensions,ImageBackground,StyleSheet,Image} from 'react-native'
import {Text}from 'native-base'
import * as actionWebtoons from '../redux/actions/actionWebtoons'
import { connect } from 'react-redux'



const {height, width } = Dimensions.get('window');
class Loading extends Component{
    componentDidMount(){
    setTimeout(async () => {
        await this.props.handleGetWebtoons()
        await this.props.handleGetRecent()
        await this.props.handleGetFavorites()
        this.props.navigation.navigate('Home')
      }, 1000)
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
  
  const mapStateToProps = state => {
    return {
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
      handleGetWebtoons: () => dispatch(actionWebtoons.handleGetWebtoons()),
      handleGetRecent: () => dispatch(actionWebtoons.handleGetRecent()),
      handleGetFavorites: () => dispatch(actionWebtoons.handleGetFavorites()),
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Loading);
  