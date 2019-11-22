import React, {Component} from 'react'
import {View,Dimensions,ImageBackground,StyleSheet,Image,AsyncStorage} from 'react-native'
import {Text}from 'native-base'
import * as actionWebtoons from '../redux/actions/actionWebtoons'
import * as actionAccount from '../redux/actions/actionAccount'
import { connect } from 'react-redux'



const {height, width } = Dimensions.get('window');
class Loading extends Component{
    async componentDidMount(){
        await AsyncStorage.getItem('data',(err,res)=>{
          const data = JSON.parse(res)
          if(!data){
            this.props.navigation.navigate('Account')
          }
          else{
            console.log(data)
            setTimeout(async () => {
            await this.props.handleStoreData(data)
            await this.props.handleGetWebtoons()
            await this.props.handleGetRecent()
            await this.props.handleGetPopulars()
            await this.props.handleGetEpisodes()
            await this.props.handleGetFavorites({
              id:this.props.loginLocal.login.id
            })
            this.props.navigation.navigate('Home')
            }, 0);
            
          }
        })
    }
    render(){
        return(
        <View>
            <ImageBackground source = {require('../assets/background.png')} style = {styles.loadingBackground}>
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
      loginLocal: state.login,
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      handleGetWebtoons: () => dispatch(actionWebtoons.handleGetWebtoons()),
      handleGetRecent: () => dispatch(actionWebtoons.handleGetRecent()),
      handleGetPopulars: () => dispatch(actionWebtoons.handleGetPopulars()),
      handleGetEpisodes: () => dispatch(actionWebtoons.handleGetEpisodes()),
      handleGetFavorites: (params) => dispatch(actionWebtoons.handleGetFavorites(params)),
      handleStoreData: (params) => dispatch(actionAccount.handleStoreData(params)),
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Loading);
  