import React,{Component} from 'react';
import {Keyboard,View,Image,Dimensions,StyleSheet}from 'react-native';
import {Button,Input,Text,Container,Form,Label} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as actionLogin from '../redux/actions/actionLogin'

import { connect } from 'react-redux'



const {width} = Dimensions.get('window') 
class Login extends Component{
    constructor(){
        super();
        this.state = {
            emailInput : '',
            passwordInput : '',
            confirmPasswordInput : '',
            hidePassword : true,
            eye : 'eye-slash',
            emailRegex : '[a-z0-9]*[a-z0-9\.]+@[a-z0-9]+(\.[a-z0-9]+)*(\.[a-z0-9]+)',
            form:'login'
        }
    }
    changeeyeState = ()=>{
        {this.state.eye=='eye' ? this.setState({eye : 'eye-slash',hidePassword : true}): this.setState({eye : 'eye',hidePassword : false})}
    }
    inputChecker=()=>{  
        Keyboard.dismiss()
        const email = String(this.state.emailInput).toLowerCase()
        const password = String(this.state.passwordInput)
        const regex = this.state.emailRegex
        let regexResult = email.match(regex)
        {regexResult==null? regexResult = '' : regexResult = regexResult[0]}
        if(email!==''){
            if(password!==''){
                if(regexResult==email){
                    if(email == this.state.data.email && password == this.state.data.password){
                        this.props.navigation.navigate('Home')
                    }
                    else console.log(this.state.data.password)
                }
                else alert('Invalid Email Syntax')
            }
            else alert('Password cannot be blank')
        }
    else alert('Email cannot be blank')

        
    }
    render(){
        if(this.state.form=='login'){
            return(
                <Container style = {{justifyContent : 'center'}}>
                        <View style = {{alignItems : 'center'}}>
                        <Image style = {{width : width,height : 200}} source = {{uri : 'https://static01.nyt.com/images/2015/07/06/business/06webtoons/06webtoons-articleLarge.jpg?quality=90&auto=webp'}}/>
                        <Text style = {{paddingBottom : 15,fontSize : 20}} >Login with your WTHub account</Text>
                        </View>
                        <Form>
                            <Label style = {{marginLeft : 20}}>Email</Label>
                            <View style = {{flexDirection : 'row',borderWidth : 2, marginHorizontal : 40,marginVertical : 10}}>
                                <Input onChangeText = {(e)=>this.setState({emailInput : e})}/>
                            </View>
                            <Label style = {{marginLeft : 20}}>Password</Label>
                            <View style = {{flexDirection : 'row',borderWidth : 2, marginHorizontal : 40,marginVertical : 10}}>
                                <Input secureTextEntry = {this.state.hidePassword} onChangeText = {(e)=>this.setState({passwordInput : e})}/>
                                <Icon style={{paddingVertical: 10,paddingRight : 10}} name = {this.state.eye} size={25} onPress = {()=>this.changeeyeState()}></Icon>
                            </View>
                            <Button success block rounded style = {styles.Button} onPress = {()=>this.inputChecker()}><Text>Log In</Text></Button>
                        </Form> 
                        <Text>Don't have an account?</Text><Text onPress={()=>this.setState({form:'register',eye:'eye-slash'})} style = {styles.Text}>Become a Hubbers</Text>  
                </Container>
            )
        }
        else{
            return(
                <Container style = {{justifyContent : 'center'}}>
                        <Form>
                            <Label style = {{marginLeft : 20}}>Email</Label>
                            <View style = {{flexDirection : 'row',borderWidth : 2, marginHorizontal : 40,marginVertical : 10}}>
                                <Input onChangeText = {(e)=>this.setState({emailInput : e})}/>
                            </View>
                            <Label style = {{marginLeft : 20}}>Password</Label>
                            <View style = {{flexDirection : 'row',borderWidth : 2, marginHorizontal : 40,marginVertical : 10}}>
                                <Input secureTextEntry = {this.state.hidePassword} onChangeText = {(e)=>this.setState({passwordInput : e})}/>
                                <Icon style={{paddingVertical: 10,paddingRight : 10}} name = {this.state.eye} size={25} onPress = {()=>this.changeeyeState()}></Icon>
                            </View>
                            <Label style = {{marginLeft : 20}}>Confirm Password</Label>
                            <View style = {{flexDirection : 'row',borderWidth : 2, marginHorizontal : 40,marginVertical : 10}}>
                                <Input secureTextEntry = {true} onChangeText = {(e)=>this.setState({confirmPasswordInput : e})}/>
                            </View>
                            <Button success block rounded style = {styles.Button} onPress = {()=>this.inputChecker()}><Text>Register</Text></Button>
                        </Form> 
                        <Text>Already have an account?</Text><Text onPress={()=>this.setState({form:'login',eye:'eye-slash'})} style = {styles.Text}>Log in</Text>  
                </Container>
            )
        }
    }
}
const mapStateToProps = state => {
    return {
        usersLocal: state.users
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
      handleLogin: () => dispatch(actionLogin.handleLogin()),
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login);
  
const styles = StyleSheet.create({
  Button : {
    marginBottom : 20,
    marginHorizontal : 80,
    borderWidth : 2,
    borderColor : 'black'
  },
  Text : {
    textDecorationLine:'underline',
    color:'blue'
  }
})