import React, {Component} from 'react'
import {TouchableOpacity,Dimensions,TextInput} from 'react-native'
import {Text,Content,Container,List,ListItem,Left, Thumbnail, Body,Button, Right,Header}from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'

const { width } = Dimensions.get('window');
class MyFavourites extends Component{
    constructor(){
        super()

        this.state = {
            profileName : 'Jaina P'
        }
    }
    render(){
        const profileName =  this.props.navigation.getParam('profileName')
        return(
            <Container>
                <Header style = {{backgroundColor : 'white'}}>
                    <Left>
                        <Button transparent>
                        <Icon name='arrow-left' />
                        </Button>
                    </Left>
                    <Body>
                        <Text>Edit Profile</Text>
                    </Body>
                    <Right>
                        <Button transparent onPress={()=>this.props.navigation.navigate('Profile',{profileName : this.state.profileName})}>
                        <Icon color = '#ffcc00' name='check' />
                        </Button>
                    </Right>
                </Header>
              <Content>
                  <Body>
                    <TouchableOpacity>

                      <Thumbnail large source = {{uri: 'https://i.ytimg.com/vi/01Y1F9mWXiQ/maxresdefault.jpg'}}></Thumbnail>
                    </TouchableOpacity>
                    
                    <TextInput value = {this.state.profileName}onChangeText = {(text) =>{this.setState({profileName : text})}}/>

                    </Body>
              </Content>
            </Container>   
                  
        )
    }
}

export default MyFavourites