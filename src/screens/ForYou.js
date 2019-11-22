import React, {Component} from 'react'
import {TouchableOpacity,View,Dimensions,ImageBackground,StyleSheet,AsyncStorage} from 'react-native'
import {Text,Content,Container,List,ListItem,Left,Title, Thumbnail, Body,Right,Button}from 'native-base'
import {withNavigation} from 'react-navigation'
import Slideshow from 'react-native-image-slider-show'
import Carousel from 'react-native-anchor-carousel'
import HeaderHome from '../components/Headers/HeaderHome'
import Icon from 'react-native-vector-icons/FontAwesome'
import * as actionAccount from '../redux/actions/actionAccount'
import { connect } from 'react-redux'


const {height, width } = Dimensions.get('window');
class ForYou extends Component{
    constructor(props){
        super(props)
        this.state = {
            position : 0,
            interval : null,
            starId:[-1],
        }
    }
    async componentDidMount(){
      const {navigation}=this.props
      this.focusListener = navigation.addListener('didFocus', () => {
        this.setState(this.state)
      });
      this.getFav()
      this.setState({
        interval: setInterval(() => {
        this.setState({
            position: this.state.position === this.props.recentLocal.recent.length-1 ? 0 : this.state.position + 1
        });
        }, 3500)
      });
      clearInterval(this.state.interval);
    }
    componentWillUnmount() {
      // Remove the event listener
      this.focusListener.remove();
    }
  
    getFav(){
      const favorites=this.props.favoritesLocal.favorites
      console.log(favorites)
      let fav = []
      if(favorites.length!=0){
      favorites.forEach(item => {
        fav.push(item.id_webtoon)
      });
      this.setState({starId:fav})
      }
    }

    renderItem = ({ item, index }) => {
        const { image, title, favorites } = item;
        return (
          <TouchableOpacity onPress = {()=>this.props.navigation.navigate('Details', {id:item.id, banner : item.image, title : item.title})}
                activeOpacity = {0.4}
                style={styles.item}
            >
            <ImageBackground 
              source={{ uri: image }}
              style={styles.imageBackground}
            >
              <View style={styles.rightTextContainer}>
                <Text style={styles.rightText}>Hype!</Text>
              </View>
            </ImageBackground>
            <View style={styles.lowerContainer}>
              <Text style={styles.titleText}>{title}</Text>
              <Text style={styles.contentText}>{favorites} Stars</Text>
            </View>
          </TouchableOpacity>
        );
      };
    
    async handlerStar(webtoonId){
      const starChecker=this.state.starId.filter(e=>e==webtoonId)
      let stars=[...this.state.starId]  
      if(starChecker==''){ 
        const token= this.props.loginLocal.login.token
        await this.props.handleAddFavorite({
            token:String('Bearer '+token),
            userId:this.props.loginLocal.login.id,
            webtoonId:webtoonId
        })
        stars.push(webtoonId)
        this.setState({starId:stars})
        alert('Added to favorites')
      }
      else {
        const token= this.props.loginLocal.login.token
        await this.props.handleDeleteFavorite({
            token:String('Bearer '+token),
            userId:this.props.loginLocal.login.id,
            webtoonId:webtoonId
        })
        const newArr=stars.filter(e=>e!==webtoonId)
        this.setState({starId:newArr})
        alert('Removed from Favorites')
      }
    }
    render(){
      const {webtoons}=this.props.webtoonsLocal
      const {recent}=this.props.recentLocal
      const {populars}=this.props.popularsLocal
        return(
             <Container>
              <ImageBackground source = {require('../assets/background.png')} style = {styles.loadingBackground}>
              <HeaderHome/>
              <Content>
                    <Slideshow 
                        dataSource = {recent}
                        position = {this.state.position}
                        onPositionChanged={position => this.setState({ position })}
                    />
                    <ListItem><Text>Populars</Text></ListItem>
                    <View style = {styles.carouselContainer2}>
                    <Carousel
                        style={styles.carousel}
                        data={populars}
                        renderItem={this.renderItem}
                        itemWidth={0.7 * width}
                        inActiveOpacity={0.3}
                        containerWidth={width - 10}
                        ref={(c) => {
                        this.numberCarousel = c;
                        }}
                    />
                    </View>
                    <ListItem><Text>All Content</Text></ListItem>
                    {webtoons.map((item, index) => {
                      return (
                      <List key = {index}>
                        <ListItem thumbnail onPress = {()=>{this.props.navigation.navigate('Details',{id:item.id, title : item.title, banner : item.image})}}>
                          <Left>
                          <Thumbnail square source={{uri: item.image}}/>
                          </Left>   
                          <Body>
                              <Text>{item.title}</Text>
                          </Body>
                          <Right>
                            <TouchableOpacity onPress={()=>this.handlerStar(item.id)}>
                              <Icon color ={this.state.starId.filter(e=>e==item.id)=='' ? 'grey':'orange'} size = {25} name = 'star'/>
                            </TouchableOpacity>
                          </Right>
                        </ListItem>
                      </List>
                      )
                    })}
                  </Content>    
              </ImageBackground>          
          </Container>  
        )
      
  }
}
const mapStateToProps = state => {
  return {
    webtoonsLocal: state.webtoons,
    recentLocal: state.recent,
    popularsLocal: state.populars,
    loginLocal: state.login,
    favoritesLocal: state.favorites
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleAddFavorite: (params) => dispatch(actionAccount.handleAddFavorite(params)),
    handleDeleteFavorite: (params) => dispatch(actionAccount.handleDeleteFavorite(params)),

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(ForYou));

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
        height,width
      },
      loadingImage:{
        height: height*0.2,
        width:width*0.3
      }

  });