import React, {Component} from 'react'
import {FlatList,TouchableOpacity,View,Dimensions,ImageBackground,StyleSheet,Image} from 'react-native'
import {Text,Content,Container,List,ListItem,Left, Thumbnail, Body,Button}from 'native-base'
import {Init} from '../components/Init'

const data = [...Init.data]
const { width } = Dimensions.get('window');
class Details extends Component{
    constructor(){
        super()
        this.state = {
            position : 0,
            interval : null,
            button : ''
        }
    }
    
    renderItem = ({item,index}) => {
        return(
          <ListItem thumbnail onPress = {()=>this.props.navigation.navigate('Episode',{episode : index+1})}>
              <Left>
              <Thumbnail square source={{uri: item.url}}/>
              </Left>   
              <Body>
                  <Text>{item.title}</Text>
                  <Text note numberOfLines = {1}>{item.date}</Text>
              </Body>
          </ListItem>
        )
    }
    
    render(){
        return(
            <Container>
              <Content>
                  <Image style = {{height : 200,width : 200}} source ={{uri :'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'}}></Image>
                  <List>
                    <FlatList
                        data = {data}
                        renderItem = {this.renderItem}
                    />
                  </List>
              </Content>
            </Container>   
                  
        )
    }
}

export default Details