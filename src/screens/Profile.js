import React, {Component} from 'react'
import {TouchableOpacity,Dimensions} from 'react-native'
import {Text,Content,Container,List,ListItem,Left, Thumbnail, Body,Button, Right,Header}from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'

const { width } = Dimensions.get('window');
class MyFavourites extends Component{
    constructor(){
        super()
        this.state = {
            position : 0,
            interval : null,
            button : ''
        }
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
                        <Text>My Profile</Text>
                    </Body>
                    <Right>
                        <Button transparent onPress={this.onSharePress}>
                        <Icon name='share-alt' />
                        </Button>
                    </Right>
                </Header>
              <Content>
                  <TouchableOpacity>
                      <Body>
                      <Thumbnail large source = {{uri: 'https://i.ytimg.com/vi/01Y1F9mWXiQ/maxresdefault.jpg'}}></Thumbnail>
                        <Text>Jaina P</Text>
                      </Body>
                  </TouchableOpacity>
                  <List>
                    <ListItem noIndent onPress = {()=>{}}>
                        <Left>
                            <Text>My Webtoon Creation</Text>
                        </Left>
                        <Right>
                            <Icon name = "arrow-right"/>
                        </Right>
                    </ListItem>
                    <ListItem noIndent onPress = {()=>this.props.navigation.navigate('Home')}>
                        <Left>
                            <Text>Log Out</Text>
                        </Left>
                    </ListItem>
                  </List>
              </Content>
            </Container>   
                  
        )
    }
}

export default MyFavourites