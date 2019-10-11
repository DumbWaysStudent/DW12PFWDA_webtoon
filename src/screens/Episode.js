import React, {Component} from 'react'
import {Image,Dimensions} from 'react-native'
import {Text,Content,Container,List,Left, Body,Button,Header,Right}from 'native-base'
import {Init} from '../components/Init'
import Icon from 'react-native-vector-icons/FontAwesome'


const { width,height } = Dimensions.get('window');
const data = [...Init.data]
class Episode extends Component{
    constructor(){
        super()
        this.state = {
            position : 0,
            
        }
    }
    onSharePress = () => Share.share(shareOptions);    
    render(){
        return(
            <Container>
                <Content>
                    <Header style = {{backgroundColor : 'white'}}>
                        <Left>
                            <Button transparent onPress = {()=>this.props.navigation.navigate('Details')}>
                            <Icon name='arrow-left' />
                            </Button>
                        </Left>
                        <Body>
                            <Text>{this.props.navigation.getParam('title')} Episode {this.props.navigation.getParam('episode')}</Text>
                        </Body>
                        <Right>
                            <Button transparent onPress={this.onSharePress}>
                            <Icon name='share-alt' />
                            </Button>
                        </Right>
                    </Header>
                    <List>
                        <List>
                        {data.map((item, index) => {
                          return (
                          <List key = {index}>
                                <Image style = {{height : height,width : width}} source ={{uri :'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'}}></Image>
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