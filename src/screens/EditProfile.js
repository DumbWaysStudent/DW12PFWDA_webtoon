import React, { Component } from 'react'
import { TouchableOpacity, Dimensions, TextInput, View, StyleSheet, Image } from 'react-native'
import { Text, Content, Container,Body} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import ImagePicker from 'react-native-image-picker';
import HeaderEdit from '../components/Headers/HeaderEdit'


const { width } = Dimensions.get('window');
class EditProfile extends Component {
    constructor() {
        super()

        this.state = {
            profileName: 'Jaina P',
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

    renderProfile() {
        if (this.state.imageUrl === '') {
            return <Image source={{ uri: 'https://i.ytimg.com/vi/01Y1F9mWXiQ/maxresdefault.jpg' }} style={styles.profileStyle} />;
        }
        return <Image source={this.state.imageUrl} style={styles.profileStyle} />;
    }

    render() {
        return (
            <Container>
                <HeaderEdit title = {this.props.navigation.getParam('title')} navigation = {this.props.navigation}/>
                <Content>
                    <Body>
                        {this.renderProfile()}
                        <TouchableOpacity onPress={() => console.log(this.props)} style={styles.cameraStyle}>
                            <Icon name='camera' size={25} />
                        </TouchableOpacity>
                        <TextInput style={{ borderWidth: 2, width: width * 0.6, textAlign: 'center', marginTop: 20 }} value={this.state.profileName} onChangeText={(text) => { this.setState({ profileName: text }) }} />
                    </Body>
                </Content>
            </Container>

        )
    }
}

export default EditProfile;

const styles = StyleSheet.create({
    profileStyle: {
        height: 140,
        width: 140,
        borderRadius: 70
    },
    cameraStyle: {
        marginTop: -30,
        marginLeft: 80
    },
    textinput : {
        borderWidth : 2,
        width : width*0.6,
        
    }
});