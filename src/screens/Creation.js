import React, {Component} from 'react'
import {ImageBackground,Dimensions} from 'react-native'
import {AsyncStorage,Text,Content,Container,List,ListItem,Left, Thumbnail, Body,Header,Right,Button,Fab}from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import {Dummy} from '../components/Dummy'
import HeaderShare from '../components/Headers/HeaderShare'


const data = [...Dummy.data]
const {height,width} = Dimensions.get('window')

class Creation extends Component{
  async componentDidMount(){
    const token= await AsyncStorage.getItem('token')
    if(!token) this.props.navigation.navigate('Account')
  }
  render(){
    return(
      <Container>
        <ImageBackground source = {require('../assets/backgroundUser.jpg')} style = {{height,width}}>
        <HeaderShare title = {this.props.navigation.getParam('title')} navigation = {this.props.navigation}/>
        <Content>
        {data.map((item, index) => {
              return (
              <List key = {index}>
                <ListItem thumbnail onPress = {()=>{this.props.navigation.navigate('EditWebtoon',{
                  webtoonTitle : item.title})}}>
                    <Left>
                    <Thumbnail square source={{uri: item.url}}/>
                    </Left>   
                    <Body>
                        <Text>{item.title}</Text>
                        <Text note numberOfLines={1}>{item.caption}</Text>
                    </Body>
                    <Right></Right>
                </ListItem>
              </List>
              )
            })}
        </Content>  
        </ImageBackground>
        <Fab onPress = {()=>this.props.navigation.navigate('CreateWebtoon')}
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight">            
          <Icon name="plus" />
        </Fab> 
    </Container> 
    )
  }
}
export default Creation