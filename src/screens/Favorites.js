import React, {Component} from 'react'
import {Text,Content,Container,List,ListItem,Left, Thumbnail, Body,Right,Button,View,Input}from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {Dummy} from '../components/Dummy'
import HeaderMain from '../components/Headers/HeaderMain'


const data = [...Dummy.data]

class Favorites extends Component{
  constructor(){
    super()
    this.state = {
      input : ''
    }
  }
  render(){
    return(
      <Container>
      <HeaderMain title = 'My Favourites'/>
        <Content>
            <View style = {{flexDirection : 'row',borderWidth : 2, marginHorizontal : 40,marginVertical : 10}}>
                <Input onChangeText = {(e)=>this.setState({input : e})}/>
                <TouchableOpacity>
                  <Icon style={{paddingVertical: 10,paddingRight : 10}} name = 'pencil' size={25}></Icon>
                </TouchableOpacity>
            </View>
            {data.map((item, index) => {
              return (
              <List key = {index}>
                <ListItem thumbnail onPress = {()=>{this.props.navigation.navigate('Favorites',{title : item.title, url : item.url})}}>
                    <Left>
                    <Thumbnail square source={{uri: item.url}}/>
                    </Left>   
                    <Body>
                        <Text>{item.title}</Text>
                        <Text note numberOfLines={1}>{item.caption}</Text>
                    </Body>
                    <Right>
                        <Button transparent>
                          <Text>View</Text>
                        </Button>
                      </Right>
                </ListItem>
              </List>
              )
            })}
        </Content>
    </Container> 
    )
  }
}
export default Favorites