import React, {Component} from 'react'
import {FlatList,TouchableHighlight,Image,StyleSheet} from 'react-native'
import {Text,Content,Container,List,ListItem,Left, Thumbnail, Body}from 'native-base'
import Slideshow from 'react-native-image-slider-show'
import Carousel from 'react-native-anchor-carousel'


class ForYou extends Component{
    constructor(){
        super()
        this.state = {
            data : [{
                title: 'The Secret of Angel',
                url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
                caption : 'Lorem Ipsum'
                }, {
                title: 'Pasutri Gaje',
                url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
                caption : 'Dolor Sit Amet'
                }, {
                title: 'Young Mom',
                url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
                caption : 'Lorem Ipsum 1'              
                }],
            position : 1,
            interval : null
        }
    }

    componentWillMount() {
        this.setState({
            interval: setInterval(() => {
            this.setState({
                position: this.state.position === this.state.data.length ? 0 : this.state.position + 1
            });
            }, 2000)
        });
    }
    
    componentWillUnmount() {
    clearInterval(this.state.interval);
    }
    renderFavourites = ({item,index}) => {
        return(
            <Container>
                <Content>
                    <Text>{item.title}</Text>
                    <TouchableHighlight onPress = {()=>this.props.navigation.navigate('Details',{title : item.title})}>
                        <Image source = {item.favourites}></Image>
                    </TouchableHighlight>
                </Content>
            </Container>
        )
    }
    renderForYou = ({item,index}) => {
        return(
            <Container>
                <Text>{item.title}</Text>
                <Image source = {item.recent}></Image>
            </Container>
        )
    }
    renderRecent = ({item,index}) => {
        return(
            <ListItem thumbnail>
                <Left>
                <Thumbnail square source={{uri: item.url}}/>
                </Left>   
                <Body>
                    <Text>{item.title}</Text>
                    <Text note numberOfLines={1}>{item.caption}</Text>
                </Body>
            </ListItem>
        )
    }
    
    render(){
        return(
            <Container>
                <Content>
                    <List>
                        <ListItem itemDivider><Text>For You</Text></ListItem>
                            <Slideshow 
                                dataSource = {this.state.data}
                                position = {this.state.position}
                                onPositionChanged={position => this.setState({ position })}
                            />
                        <ListItem itemDivider><Text>Recent Updates</Text></ListItem>
                            <FlatList
                                data = {this.state.data}
                                renderItem = {this.renderRecent}
                            />
                    </List>
                </Content>
                

            </Container>
        )
    }
}

export default ForYou

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ecf0f1',
      padding: 8,
    }, 
      carouselContainer: {
      height: 150,
      width: width,
      borderWidth: 5,
      borderColor: 'white',
      marginTop:10
    },
    carouselContainer2: { 
      width: width,
      height:width*0.8, 
      marginTop:10
    }, 
  });