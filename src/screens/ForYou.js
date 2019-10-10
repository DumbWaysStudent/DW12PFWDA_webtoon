import React, {Component} from 'react'
import {FlatList,TouchableOpacity,View,Dimensions,ImageBackground,StyleSheet} from 'react-native'
import {Text,Content,Container,List,ListItem,Left, Thumbnail, Body,Button}from 'native-base'
import Slideshow from 'react-native-image-slider-show'
import Carousel from 'react-native-anchor-carousel'
import {Init} from '../components/Init'


const data = [...Init.data]
const { width } = Dimensions.get('window');
class ForYou extends Component{
    constructor(){
        super()
        this.state = {
            position : 0,
            interval : null,
            button : ''
        }
    }

    componentWillMount() {
        this.setState({
            interval: setInterval(() => {
            this.setState({
                position: this.state.position === data.length-1 ? 0 : this.state.position + 1
            });
            }, 3500)
        });
    }
    
    componentWillUnmount() {
    clearInterval(this.state.interval);
    }
    renderFavourites = ({ item, index }) => {
        const { url, title, caption } = item;
        return (
          <TouchableOpacity onPress = {()=>this.props.navigation.navigate('Details', {title : item.title})}
                activeOpacity = {0.4}
                style={styles.item}
            >
            <ImageBackground 
              source={{ uri: url }}
              style={styles.imageBackground}
            >
              <View style={styles.rightTextContainer}>
                <Text style={styles.rightText}>{item.status}</Text>
              </View>
            </ImageBackground>
            <View style={styles.lowerContainer}>
              <Text style={styles.titleText}>{title}</Text>
              <Text style={styles.contentText}>{caption}</Text>
            </View>
          </TouchableOpacity>
        );
      };
    renderRecent = ({item,index}) => {
        return(
            <ListItem thumbnail onPress = {()=>{this.props.navigation.navigate('Details',{id : index})}}>
                <Left>
                <Thumbnail square source={{uri: item.url}}/>
                </Left>   
                <Body>
                    <Text>{item.title}</Text>
                    <Button style = {{width : 150}} iconLeft warning>
                        <Text> + Favourite</Text>
                    </Button>
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
                                    dataSource = {data}
                                    position = {this.state.position}
                                    onPositionChanged={position => this.setState({ position })}
                                />
                            <ListItem itemDivider><Text>Favourites</Text></ListItem>
                                <View style = {styles.carouselContainer2}>
                                <Carousel
                                    style={styles.carousel}
                                    data={data}
                                    renderItem={this.renderFavourites}
                                    itemWidth={0.7 * width}
                                    inActiveOpacity={0.3}
                                    containerWidth={width - 10}
                                    ref={(c) => {
                                    this.numberCarousel = c;
                                    }}
                                />
                                </View>
                            <ListItem itemDivider><Text>Recent Updates</Text></ListItem>
                                <FlatList
                                    data = {data}
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
    carousel: {
        flex: 1,
        backgroundColor: '#141518'
      },
      item: {
        borderWidth: 2,
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        borderColor: 'white',
        elevation: 3
      },
      imageBackground: {
        flex: 2,
        backgroundColor: '#EBEBEB',
        borderWidth: 5,
        borderColor: 'white'
      },
      rightTextContainer: {
        marginLeft: 'auto',
        marginRight: -2,
        backgroundColor: 'rgba(49, 49, 51,0.5)',
        padding: 3,
        marginTop: 3,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
      },
      rightText: { color: 'white' },
      lowerContainer: {
        flex: 1,
        margin: 10
      },
      titleText: {
        fontWeight: 'bold',
        fontSize: 18
      },
      contentText: { 
        fontSize:12
      }
  });