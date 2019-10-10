import React, {Component} from 'react'
import {FlatList,TouchableOpacity,View,Dimensions,ImageBackground,StyleSheet} from 'react-native'
import {Text,Content,Container,List,ListItem,Left, Thumbnail, Body,Button}from 'native-base'
import Slideshow from 'react-native-image-slider-show'
import Carousel from 'react-native-anchor-carousel'


const data = [{
    title: 'The Secret of Angel',
    url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
    caption : 'Romance',
    status : 'new !'
    }, {
    title: 'Solo Leveling',
    url : 'data:image/jpeg;base64,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',
    caption : 'Most Watched',
    status : 'Most Watched'
    }, {
    title: 'Tower of God',
    url: 'data:image/jpeg;base64,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',
    caption : 'Peak Viewer',
    status : 'New Episode'              
    }, {
    title: 'How to Be a Dog',
    url: 'https://pm1.narvii.com/6935/943756440206c245ab0a0bf050ef5a0a474a6436r1-510-510v2_hq.jpg',
    caption : 'Highest Rating',
    status : 'Debut'            
    }
]

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
          <TouchableOpacity
                style={styles.item}
                onPress={() => {
                this.props.navigation.navigate('Details',{webtoonId : index});
                }}
            >
            <ImageBackground onPress
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
            <ListItem thumbnail onPress = {()=>this.props.navigation.navigate('Details',{webtoonId : index})}>
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