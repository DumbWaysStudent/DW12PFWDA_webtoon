import React, {Component} from 'react'
import {FlatList} from 'react-native'
import {Text,Content,Container,List,ListItem,Left, Thumbnail, Body,Header,Right,Button}from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import {Init} from '../components/Init'


const data = [...Init.data]

class Details extends Component{
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
                <Button transparent>
                <Icon name='arrow-left' />
                </Button>
            </Left>
            <Body>
                <Text>My Fvourites</Text>
            </Body>
            <Right>
                <Button transparent onPress={this.onSharePress}>
                <Icon name='share-alt' />
                </Button>
            </Right>
        </Header>
        <Content>
                <List>
                    <ListItem itemDivider><Text>Recent Updates</Text></ListItem>
                        <FlatList
                            data = {data}
                            renderItem = {this.renderRecent}
                        />
                </List>
        </Content>
    </Container> 
    )
  }
}
export default Details