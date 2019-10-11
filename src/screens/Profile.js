import React, {Component} from 'react'
import {TouchableOpacity} from 'react-native'
import {View,Text,Content,Container,List,ListItem,Left, Thumbnail, Body,Button, Right,Header}from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'

const name = "Jaina P"
class Profile extends Component{
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
                <Content>
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
                  <View>
                    <TouchableOpacity  onPress = {()=>this.props.navigation.navigate('EditProfile',{profileName : 'Jaina P'})}>
                        <Body>
                        <Thumbnail large 
                        source = {{uri: 'https://i.ytimg.com/vi/01Y1F9mWXiQ/maxresdefault.jpg'}}
                        ></Thumbnail>
                            {this.props.navigation.getParam('profileName')==null? 
                            <Text>Jaina P</Text>
                            : 
                            <Text>{this.props.navigation.getParam('profileName')}</Text>}
                        </Body>
                    </TouchableOpacity>
                    <View>
                        <ListItem noIndent onPress = {()=>this.props.navigation.navigate('Creation')}>
                            <Left>
                                <Text>My Webtoon Creation</Text>
                            </Left>
                            <Right>
                                <Icon name = "arrow-right"/>
                            </Right>
                        </ListItem>
                        <ListItem noIndent onPress = {()=>this.props.navigation.navigate('Login')}>
                            <Left>
                                <Text>Log Out</Text>
                            </Left>
                        </ListItem>
                    </View>
                  </View>
                </Content>
                
               
            </Container>   
                  
        )
    }
}

export default Profile