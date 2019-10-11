import React, {Component} from 'react'
import {Text,Content,Container,List,ListItem,Left, Thumbnail, Body,Header,Right,Button,View}from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import {Init} from '../components/Init'
import { TouchableOpacity } from 'react-native-gesture-handler'


const data = [...Init.data]

class Details extends Component{
  constructor(){
    super()
    this.state = {
      input : ''
    }
  }
  onSharePress = () => Share.share(shareOptions);
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
                <Text>My Favourites</Text>
            </Body>
            <Right>
                <Button transparent onPress={this.onSharePress}>
                <Icon name='share-alt' />
                </Button>
            </Right>
        </Header>
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
                <ListItem thumbnail onPress = {()=>{this.props.navigation.navigate('Episode',{title : item.title, episode : data.length-index})}}>
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
export default Details