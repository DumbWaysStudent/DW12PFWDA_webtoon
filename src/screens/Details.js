import React, {Component} from 'react'
import {Share, Dimensions,Image} from 'react-native'
import {Content,Container,List,ListItem,Left, Thumbnail, Body,Button,Header,Right,Text}from 'native-base'
import {Dummy} from '../components/DummyDetails'
import Icon from 'react-native-vector-icons/FontAwesome'
import HeaderShare from '../components/Headers/HeaderShare'

const data = [...Dummy.data]
const {height,width} = Dimensions.get('window')

class Details extends Component{
    constructor(){
        super()
        this.state = {
            position : 0,
            interval : null,
            button : ''
        }
    }
    
    render(){
    const webtoonTitle = this.props.navigation.getParam('title')
        return(
            <Container>
                <HeaderShare title = {webtoonTitle} navigation = {this.props.navigation}/>
              <Content>
                  <Image style = {{height : 200,width : width}} source ={{uri :this.props.navigation.getParam('url')}}></Image>
                  {data.map((item, index) => {
                          return (
                          <List key = {index}>
                            <ListItem thumbnail onPress = {()=>this.props.navigation.navigate('Episode',{ title : `${webtoonTitle} Ep ${data.length-index}`})}>
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