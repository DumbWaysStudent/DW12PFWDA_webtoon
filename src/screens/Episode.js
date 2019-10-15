import React, {Component} from 'react'
import {Image,Dimensions} from 'react-native'
import {Content,Container,List}from 'native-base'
import {Dummy} from '../components/Dummy'
import HeaderShare from '../components/Headers/HeaderShare'


const { width,height } = Dimensions.get('window');
const data = [...Dummy.data]

class Episode extends Component{ 
    render(){
        
        const webtoonTitle = this.props.navigation.getParam('title')
        return(
            <Container>
                <Content>
                    <HeaderShare title = {webtoonTitle} navigation = {this.props.navigation}/>
                    <List>
                        <List>
                        {data.map((item, index) => {
                          return (
                          <List key = {index}>
                                <Image style = {{height : height,width : width}} source ={{uri : item.url}}></Image>
                          </List>
                          )
                        })}
                        </List>
                    </List>
                </Content>
            </Container>            
        )
    }
}

export default Episode