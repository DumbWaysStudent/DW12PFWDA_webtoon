import React, {Component} from 'react'
import {Dimensions,Image} from 'react-native'
import {Content,Container,List,ListItem,Left, Thumbnail, Body,Button,Header,Right,Text}from 'native-base'
import {Dummy} from '../components/DummyDetails'
import HeaderShare from '../components/Headers/HeaderShare'
import { connect } from 'react-redux'

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
    async componentDidMount(){
    }
    
    render(){
    const id = this.props.navigation.getParam('id')
    const episodes = this.props.episodesLocal.episodes.filter(item=>item.id_webtoon==id).reverse()
    const webtoonTitle = this.props.navigation.getParam('title')
        return(
            <Container>
                <HeaderShare title = {webtoonTitle} navigation = {this.props.navigation}/>
              <Content>
                  <Image style = {{height : height*0.3,width}} source ={{uri :this.props.navigation.getParam('banner')}}></Image>
                  {episodes.map((item, index) => {
                          return (
                          <List key = {index}>
                            <ListItem thumbnail onPress = {()=>this.props.navigation.navigate('Episode',{ 
                              title : `${webtoonTitle} Ep ${item.episode}`,
                              id_webtoon:item.id_webtoon,
                              episode:item.episode
                              })}>
                                <Left>
                                <Thumbnail square source={{uri: item.image}}/>
                                </Left>   
                                <Body>
                                    <Text>Episode {item.episode}</Text>
                                    <Text note numberOfLines = {1}>{item.title}</Text>
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
const mapStateToProps = state => {
    return {
      episodesLocal: state.episodes
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Details);