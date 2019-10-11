import React, {Component} from 'react'
import {List,Text,Content,Container,ListItem,Left, Thumbnail, Body,Header,Right,Button, Label,View,Input}from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import {Init} from '../components/Details'


const data = [...Init.data]
class CreateEpisode extends Component{
  render(){
    return(
      <Container>
      <Header style = {{backgroundColor : 'white'}}>
            <Left>
                <Button transparent onPress = {()=>{}}>
                <Icon name='list'/>
                </Button>
            </Left>
            <Body>
                <Text>Create Episode</Text>
            </Body>
            <Right>
                <Button transparent>
                <Icon color = 'orange' name='check' />
            </Button>
            </Right>
        </Header>
        <Content>
            <Label style = {{marginLeft : 20}}>Name</Label>
            <View style = {{flexDirection : 'row',borderWidth : 2, marginHorizontal : 40,marginVertical : 10}}>
                <Input value = {'Episode ' + (data.length+1)}/>
            </View>
            {data.map((item, index) => {
              return (
              <List key = {index}>
                <ListItem thumbnail>
                    <Left>
                    <Thumbnail square source={{uri: item.url}}/>
                    </Left>   
                    <Body>
                        <Text style = {{marginBottom : 10}}>Episode {data.length-index}</Text>
                        <Button block danger style = {{height : 35,marginRight :150,borderWidth : 2,borderColor : 'black'}}><Text>Delete</Text></Button>                  
                    </Body>
                    <Right></Right>
                </ListItem>
              </List>
              )
            })}
            <Button  transparent style = {{color : 'black', marginBottom : 20,marginHorizontal : 80,borderWidth : 2,borderColor : 'black'}} block bordered><Text style = {{color : 'black'}}>+ Image</Text></Button>  
        </Content>
    </Container> 
    )
  }
}
export default CreateEpisode