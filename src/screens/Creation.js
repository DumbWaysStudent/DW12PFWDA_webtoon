import React, {Component} from 'react'
import {FlatList} from 'react-native'
import {Text,Content,Container,List,ListItem,Left, Thumbnail, Body,Header,Right,Button,Fab}from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import {Init} from '../components/Init'


const data = [...Init.data]

class Creation extends Component{
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
                <Text>My Webtoon Creation</Text>
            </Body>
            <Right>
            </Right>
        </Header>
        <Content>
        {data.map((item, index) => {
              return (
              <List key = {index}>
                <ListItem thumbnail onPress = {()=>{this.props.navigation.navigate('EditWebtoon',{title : item.title, episode : data.length-index})}}>
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
            <Fab
              style={{ backgroundColor: '#5067FF' }}
              position="bottomRight">            
              <Icon onPress = {()=>this.props.navigation.navigate('CreateWebtoon')} name="plus" />
            </Fab>
        </Content>
    </Container> 
    )
  }
}
export default Creation