import React, {Component} from 'react'
import {TouchableOpacity,Share,Image,Dimensions,StyleSheet,AsyncStorage} from 'react-native'
import {View,Text,Content,Container,ListItem,Left, Body, Right}from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import HeaderMain from '../components/Headers/HeaderMain'
import { connect } from 'react-redux'


const {height,width} = Dimensions.get('window')
const shareOptions = {
    title: 'Title',
    message: 'Message to share', // Note that according to the documentation at least one of "message" or "url" fields is required
    url: 'www.example.com',
    subject: 'Subject'
  };
class Profile extends Component{
    componentDidMount(){
        if(AsyncStorage.getItem('token')=='') this.props.navigation.navigate('Account')
    }
    onSharePress = () => Share.share(shareOptions);
    render(){
        const{login}=this.props.loginLocal
        return(
            <Container>
                <Content>
                <HeaderMain title = 'My Profile'/>
                  <View>
                    <TouchableOpacity  onPress = {()=>this.props.navigation.navigate('EditProfile',{title : 'Edit Profile'})}>
                        <Body>
                        <Image source = {{uri:login.image}} style={styles.profilePic} ></Image>
                            <Text>{login.name}</Text>
                        </Body>
                    </TouchableOpacity>
                    <View>
                        <ListItem noIndent onPress = {()=>this.props.navigation.navigate('Creation',{title : 'My Webtoon Creation'})}>
                            <Left>
                                <Text>My Webtoon Creation</Text>
                            </Left>
                            <Right>
                                <Icon name = "arrow-right"/>
                            </Right>
                        </ListItem>
                        <ListItem noIndent onPress = {()=>this.props.navigation.navigate('Login')}>
                            <Left>
                                <Text>Log Out</Text>
                            </Left>
                        </ListItem>
                    </View>
                  </View>
                </Content>
            </Container>   
                  
        )
    }
}

const mapStateToProps = state => {
    return {
        loginLocal: state.login,
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
    }
  }
  
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Profile);
  
  const styles = StyleSheet.create({
    profilePic:{
        height:width*0.5,
        width:width*0.5,
        borderRadius:width*0.25
    }
})