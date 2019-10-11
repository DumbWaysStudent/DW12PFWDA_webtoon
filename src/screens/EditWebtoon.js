import React, {Component} from 'react'
import {FlatList} from 'react-native'
import {Text,Content,Container,ListItem,Left, Thumbnail, Body,Header,Right,Button, Label}from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import {Init} from '../components/Init'


const data = [...Init.data]

class EditWebtoon extends Component{
  renderRecent = ({item,index}) => {
    return(
        <ListItem thumbnail onPress = {()=>{this.props.navigation.navigate('Details',{id : index})}}>
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
                <Text>Edit Webtoon</Text>
            </Body>
            <Right>
                <Button transparent>
                <Icon color = 'orange' name='check' />
            </Button>
            </Right>
        </Header>
        <Content>
            <Label>Title</Label>
            <Input onChangeText = {(e)=>this.setState({input : e})}/>
            <FlatList
                data = {data}
                renderItem = {this.renderRecent}
            /> 
            <Button onPress = {()=>this.props.navigation.navigate('CreateEpisode')} block bordered><Text>+ Add Episode</Text></Button>          
        </Content>
    </Container> 
    )
  }
}
export default Creation