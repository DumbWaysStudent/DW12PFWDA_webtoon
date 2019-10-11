import React, {Component} from 'react'

import {Text,Content,Container,ListItem,Left, Thumbnail, Body,Header,Right,Button, Label,View,Input,List}from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import {Init} from '../components/Details'


const data = [...Init.data]

class EditEpisode extends Component{
  renderRecent = ({item,index}) => {
    return(
        <ListItem thumbnail onPress = {()=>{this.props.navigation.navigate('Details',{id : index})}}>
            <Left>
            <Thumbnail square source={{uri: item.url}}/>
            </Left>   
            <Body>
                <Text>{item.title}</Text>
                <Text note numberOfLines={1}>Lorem Ipsum</Text>
            </Body>
            <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
        </ListItem>
    )
  }
  render(){
    return(
      <Container>
      <Header style = {{backgroundColor : 'white'}}>
            <Left>
            <Button transparent onPress = {()=>this.props.navigation.goBack()}>
                <Icon name='arrow-left'/>
                </Button>
            </Left>
            <Body>
                <Text>Edit Episode</Text>
            </Body>
            <Right>
                <Button transparent>
                <Icon color = 'orange' name='check' />
            </Button>
            </Right>
        </Header>
        <Content>
            <Label style = {{marginHorizontal : 20,marginTop : 10}}>Title</Label>
            <View style = {{flexDirection : 'row',borderWidth : 2, marginHorizontal : 40,marginVertical : 10}}>
                <Input value = {'Episode '+this.props.navigation.getParam('episode')}/>
            </View>
            {data.map((item, index) => {
              return (
              <List key = {index}>
                <ListItem thumbnail onPress = {()=>this.props.navigation.navigate('EditEpisode',{episode :data.length-index})}>
                    <Left>
                    <Thumbnail square source={{uri: item.url}}/>
                    </Left>   
                    <Body>
                        <Text>Episode {data.length-index}</Text>
                        <Text note numberOfLines={1}>Lorem Ipsum</Text>
                    </Body>
                    <Right>
                      </Right>
                </ListItem>
              </List>
              )
            })}
            <Button  transparent style = {{color : 'black', marginBottom : 20,marginHorizontal : 80,borderWidth : 2,borderColor : 'black'}} block bordered><Text style = {{color : 'black'}}>+ Image</Text></Button>  
            <Button block danger style = {{marginHorizontal : 80,borderWidth : 2,borderColor : 'black'}}><Text>Delete Episode</Text></Button>                  
        </Content>
    </Container> 
    )
  }
}
export default EditEpisode