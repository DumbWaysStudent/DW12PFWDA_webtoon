import React, {Component} from 'react'
import {FlatList,TouchableOpacity,View,Dimensions,ImageBackground,StyleSheet,Image} from 'react-native'
import {Text,Content,Container,List,ListItem,Left, Thumbnail, Body,Button,Header,Right}from 'native-base'
import {Init} from '../components/Init'
import Icon from 'react-native-vector-icons/FontAwesome'

const data = [...Init.data]
class Episode extends Component{
    constructor(){
        super()
        this.state = {
            position : 0,
            
        }
    }
    
    renderItem = ({item,index}) => {
        return(
            <Image style = {{height : 200,width : 200}} source ={{uri :'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'}}></Image>
        )
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
                            <Text>{this.props.navigation.getParam('title')}</Text>
                        </Body>
                        <Right>
                            <Button transparent onPress={this.onSharePress}>
                            <Icon name='share-alt' />
                            </Button>
                        </Right>
                    </Header>
                    <List>
                        <List>
                            <FlatList
                                data = {data}
                                renderItem = {this.renderItem}
                            />
                        </List>
                    </List>
                </Content>
            </Container>   
                  
        )
    }
}

export default Episode