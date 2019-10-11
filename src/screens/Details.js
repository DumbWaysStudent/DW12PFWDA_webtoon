import React, {Component} from 'react'
import {Share, FlatList,Image} from 'react-native'
import {Content,Container,List,ListItem,Left, Thumbnail, Body,Button,Header,Right,Text}from 'native-base'
import {Init} from '../components/Init'
import Icon from 'react-native-vector-icons/FontAwesome'

const data = [...Init.data]
const shareOptions = {
  title: 'Title',
  message: 'Message to share', // Note that according to the documentation at least one of "message" or "url" fields is required
  url: 'www.example.com',
  subject: 'Subject'
};
class Details extends Component{
    constructor(){
        super()
        this.state = {
            position : 0,
            interval : null,
            button : ''
        }
    }
    onSharePress = () => Share.share(shareOptions);
    
    render(){
        return(
            <Container>
                <Header style = {{backgroundColor : 'white'}}>
                    <Left>
                        <Button transparent onPress = {()=>this.props.navigation.goBack()}>
                        <Icon name='arrow-left' />
                        </Button>
                    </Left>
                    <Body>
                        <Text>{this.props.navigation.getParam('title')}</Text>
                    </Body>
                    <Right>
                        <Button transparent onPress={this.onSharePress}>
                        <Icon name='share-alt' />
                        </Button>
                    </Right>
                </Header>
              <Content>
                  <Image style = {{height : 200,width : 200}} source ={{uri :'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'}}></Image>
                  {data.map((item, index) => {
                          return (
                          <List key = {index}>
                            <ListItem thumbnail onPress = {()=>this.props.navigation.navigate('Episode',{title : item.title, episode : data.length-index})}>
                                <Left>
                                <Thumbnail square source={{uri: item.url}}/>
                                </Left>   
                                <Body>
                                    <Text>Episode {data.length-index}</Text>
                                    <Text note numberOfLines = {1}>Lorem Ipsum</Text>
                                </Body>
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