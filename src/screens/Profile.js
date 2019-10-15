import React, {Component} from 'react'
import {TouchableOpacity,Share} from 'react-native'
import {View,Text,Content,Container,ListItem,Left, Thumbnail, Body,Button, Right,Header}from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import HeaderMain from '../components/Headers/HeaderMain'

const shareOptions = {
    title: 'Title',
    message: 'Message to share', // Note that according to the documentation at least one of "message" or "url" fields is required
    url: 'www.example.com',
    subject: 'Subject'
  };
class Profile extends Component{
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
        this.props.navigation.getParam('profileName')==''?profileName = 'Jaina P'
        : profileName = this.props.navigation.getParam('profileName')
        this.props.navigation.getParam('imageUrl')==''?imageUrl = 'https://i.ytimg.com/vi/01Y1F9mWXiQ/maxresdefault.jpg'
        : imageUrl = this.props.navigation.getParam('imageUrl')
        return(
            <Container>
                <Content>
                <HeaderMain title = 'My Profile'/>
                  <View>
                    <TouchableOpacity  onPress = {()=>this.props.navigation.navigate('EditProfile',{profileName : profileName,title : 'Edit Profile'})}>
                        <Body>
                        <Thumbnail large 
    
                        ></Thumbnail>
                            {this.props.navigation.getParam('profileName')==null? 
                            <Text>Jaina P</Text>
                            : 
                            <Text>{this.props.navigation.getParam('profileName')}</Text>}
                        </Body>
                    </TouchableOpacity>
                    <View>
                        <ListItem noIndent onPress = {()=>this.props.navigation.navigate('Creation',{title : 'My Webtoon Creation'})}>
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