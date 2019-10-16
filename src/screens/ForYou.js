import React, {Component} from 'react'
import {TouchableOpacity,View,Dimensions,ImageBackground,StyleSheet,Image} from 'react-native'
import {Text,Content,Container,List,ListItem,Left,Title, Thumbnail, Body,Right,Button}from 'native-base'
import Slideshow from 'react-native-image-slider-show'
import Carousel from 'react-native-anchor-carousel'
import {Dummy} from '../components/Dummy'
import HeaderHome from '../components/Headers/HeaderHome'
import Icon from 'react-native-vector-icons/FontAwesome'
import axios from 'axios'


const data = [...Dummy.data]
const {height, width } = Dimensions.get('window');
class ForYou extends Component{
    constructor(){
        super()
        this.state = {
            position : 0,
            interval : null,
            button : '',
            data:'',
            ready:false
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
    componentDidMount() {
      axios.get('http://192.168.43.24:9876/api/v1/webtoons')
      .then(result=>{
        setTimeout(() => {
        this.setState({data: result.data,ready:true})
        console.log(this.state.data)
        }, 2000);
        
      })
      .catch(error=>{
        console.log(error)
      })
    }
    componentWillUnmount() {
    clearInterval(this.state.interval);
    }
    renderItem = ({ item, index }) => {
        const { image, title, caption } = item;
        return (
          <TouchableOpacity onPress = {()=>this.props.navigation.navigate('Details', {image : item.image, webtoonTitle : item.title})}
                activeOpacity = {0.4}
                style={styles.item}
            >
            <ImageBackground 
              source={{ uri: image }}
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
    
    render(){
      if(this.state.ready==true){
        return(
             <Container>
              <HeaderHome/>
              <Content>
                    <Slideshow 
                        dataSource = {this.state.data}
                        position = {this.state.position}
                        onPositionChanged={position => this.setState({ position })}
                    />
                    <ListItem><Text>Favorites</Text></ListItem>
                    <View style = {styles.carouselContainer2}>
                    <Carousel
                        style={styles.carousel}
                        data={this.state.data}
                        renderItem={this.renderItem}
                        itemWidth={0.7 * width}
                        inActiveOpacity={0.3}
                        containerWidth={width - 10}
                        ref={(c) => {
                        this.numberCarousel = c;
                        }}
                    />
                    </View>
                    <ListItem><Text>Recently Updated</Text></ListItem>
                    {this.state.data.map((item, index) => {
                      return (
                      <List key = {index}>
                        <ListItem thumbnail onPress = {()=>{this.props.navigation.navigate('Details',{title : item.title, url : item.image})}}>
                          <Left>
                          <Thumbnail square source={{uri: item.image}}/>
                          </Left>   
                          <Body>
                              <Text>{item.title}</Text>
                          </Body>
                          <Right>
                            <TouchableOpacity>
                              <Icon color = 'orange' size = {25} name = 'star'/>
                            </TouchableOpacity>
                          </Right>
                        </ListItem>
                      </List>
                      )
                    })}
                  </Content>                      
          </Container>  
        )
      }
    else return(
      <View>
        <ImageBackground source = {require('../assets/background.jpg')} style = {styles.loadingBackground}>
        <View style = {{flexDirection:'row'}}>
        <Image style = {styles.loadingImage} source = {require('../assets/loading.gif')}/>
        <Image style = {styles.loadingImage} source = {require('../assets/loading2.gif')}/>
        </View>
        <Text>Wait</Text>
        </ImageBackground>

      </View>
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
      height:width*0.6, 
      marginTop:10
    }, 
    carousel: {
        flex: 1,
        backgroundColor: 'white'
      },
      item: {
        borderWidth: 5,
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 9,
        borderColor: 'grey',
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
        fontSize: 18,
        textAlign:'center'
      },
      contentText: { 
        fontSize:12,
        textAlign:'center'
      },
      loadingBackground:{
        height,width,
        alignItems:'center',
        justifyContent:'center'
      },
      loadingImage:{
        height: height*0.2,
        width:width*0.3
      }

  });