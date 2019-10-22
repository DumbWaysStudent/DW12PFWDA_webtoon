import React, { Component } from 'react'
import { TouchableOpacity, Dimensions, TextInput, View, StyleSheet, Image } from 'react-native'
import { Content, Container,Body} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import ImagePicker from 'react-native-image-picker';
import HeaderEdit from '../components/Headers/HeaderEdit'
import { connect } from 'react-redux'


const { width } = Dimensions.get('window');
class EditProfile extends Component {
    constructor() {
        super()

        this.state = {
            imageUrl: ''
        }
    }

    handlerCamera() {
        const options = {
            title: 'Select Avatar',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    imageUrl: source,
                });
            }
        });
    }



    render() {
        const{login}=this.props.loginLocal
        return (
            <Container>
                <HeaderEdit title = {this.props.navigation.getParam('title')} navigation = {this.props.navigation}/>
                <Content>
                    <Body>
                        <Image source={{ uri: 'https://i.ytimg.com/vi/01Y1F9mWXiQ/maxresdefault.jpg' }} style={styles.profilePic} />
                        <TouchableOpacity style={styles.cameraStyle}>
                            <Icon name='camera' size={25} />
                        </TouchableOpacity>
                        <TextInput style={{ borderWidth: 2, width: width * 0.6, textAlign: 'center', marginTop: 20 }}/>
                    </Body>
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
  )(EditProfile);

const styles = StyleSheet.create({
    cameraStyle: {
        marginTop: -width*0.07,
        marginLeft: width*0.4
    },
    textinput : {
        borderWidth : 2,
        width : width*0.6,
    },
    profilePic:{
        height:width*0.5,
        width:width*0.5,
        borderRadius:width*0.25
    }
});