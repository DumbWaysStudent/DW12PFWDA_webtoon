import React, {Component} from 'react'
import {ImageBackground,Dimensions,FlatList,View} from 'react-native'
import {AsyncStorage,Text,ListItem,Left, Thumbnail,List, Body,Header,Right,Button,Fab}from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import {withNavigation} from 'react-navigation'
import {Dummy} from '../components/Dummy'
import HeaderShare from '../components/Headers/HeaderShare'
import { connect } from 'react-redux'


const data = [...Dummy.data]
const {height,width} = Dimensions.get('window')

class Creation extends Component{
  renderItem = ({item,index}) =>{
    return(
          <ListItem key ={index} thumbnail onPress = {()=>{this.props.navigation.navigate('EditWebtoon',{
            webtoonTitle : item.title})}}>
              <Left>
              <Thumbnail square source={{uri: item.image}}/>
              </Left>   
              <Body>
                  <Text>{item.title}</Text>
                  <Text note numberOfLines={1}>{item.caption}</Text>
              </Body>
              <Right></Right>
          </ListItem>
        )
    }
  render(){
    const {webtoons}=this.props.webtoonsLocal
    return(
      <View>
        <ImageBackground source = {require('../assets/backgroundUser.jpg')} style = {{height,width}}>
        <HeaderShare title = {this.props.navigation.getParam('title')} navigation = {this.props.navigation}/>
              <List>
                <FlatList
                data = {webtoons}
                renderItem = {this.renderItem}
                extraData = {this.state}
                />
              </List>
        </ImageBackground>
        <Fab onPress = {()=>this.props.navigation.navigate('CreateWebtoon')}
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight">            
          <Icon name="plus" />
        </Fab> 
    </View> 
    )
  }
}

const mapStateToProps = state => {
  return {
    webtoonsLocal: state.webtoons,
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(Creation));
