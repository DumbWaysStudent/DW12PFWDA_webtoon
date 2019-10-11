import React, {Component} from 'react'
import {List,Text,Content,Container,ListItem,Left, Thumbnail, Body,Header,Right,Button, Label,View,Input}from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import {Init} from '../components/Init'


const data = [...Init.data]

class CreateEpisode extends Component{
  renderRecent = ({item,index}) => {
    return(
        <ListItem thumbnail onPress = {()=>{this.props.navigation.navigate('Details',{id : index})}}>
            <Left>
            <Thumbnail square source={{uri: item.url}}/>
            </Left>   
            <Body>
                <Button transparent>
                    <Text>View</Text>
                </Button>
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
            <Label>Name</Label>
            <View style = {{flexDirection : 'row',borderWidth : 2, marginHorizontal : 40,marginVertical : 10}}>
                <Input value = {this.props.navigation.getParam('title')}/>
            </View>
            {data.map((item, index) => {
              return (
              <List key = {index}>
                <ListItem thumbnail>
                    <Left>
                    <Thumbnail square source={{uri: item.url}}/>
                    </Left>   
                    <Body>
                        <Text>{item.title}</Text>
                        <Text note numberOfLines={1}>{item.caption}</Text>
                    </Body>
                    <Right>
                        <Button transparent></Button>
                      </Right>
                </ListItem>
              </List>
              )
            })}
            <Button onPress = {()=>this.props.navigation.navigate('CreateEpisode')} block bordered><Text>+ Image</Text></Button>          
        </Content>
    </Container> 
    )
  }
}
export default CreateEpisode