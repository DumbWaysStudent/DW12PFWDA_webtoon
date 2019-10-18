import React,{Component} from 'react';
import {Keyboard,View,Image,Dimensions,StyleSheet}from 'react-native';
import {Button,Input,Text,Container,Form,Label} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';


const {width} = Dimensions.get('window') 
class Login extends Component{
    constructor(){
        super();
        this.state = {
            emailInput : '',
            passwordInput : '',
            confirmPasswordInput : '',
            form:'login',
            hidePassword : true,
            hideConfirmPassword : true,
            eye : 'eye-slash',
            eye2 : 'eye-slash',
            data : {email : 'a@a.a', password : 'a'},
            emailRegex : '[a-z0-9]*[a-z0-9\.]+@[a-z0-9]+(\.[a-z0-9]+)*(\.[a-z0-9]+)'
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
                        this.props.navigation.navigate('Loading')
                    }
                    else alert('Invalid Email / Password')
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
                        <Image style = {styles.Image} source = {{uri : 'https://static01.nyt.com/images/2015/07/06/business/06webtoons/06webtoons-articleLarge.jpg?quality=90&auto=webp'}}/>
                        <Text style = {{paddingBottom : 15,fontSize : 20}} >Login with your WTHub account</Text>
                        </View>
                        <Form>
                            <Label style = {{marginLeft : 20}}>Email</Label>
                            <View style = {styles.form}>
                                <Input onChangeText = {(e)=>this.setState({emailInput : e})}/>
                            </View>
                            <Label style = {{marginLeft : 20}}>Password</Label>
                            <View style = {styles.form}>
                                <Input secureTextEntry = {this.state.hidePassword} onChangeText = {(e)=>this.setState({passwordInput : e})}/>
                                <Icon style={styles.Button} onPress = {()=>this.changeeyeState()}></Icon>
                            </View>
                            <View style = {styles.form}>
                                <Input secureTextEntry = {this.state.hidePassword} onChangeText = {(e)=>this.setState({passwordInput : e})}/>
                                <Icon style={styles.Button} onPress = {()=>this.changeeyeState()}></Icon>
                            </View>
                            <Button success block rounded style = {styles.Button} onPress = {()=>this.inputChecker()}><Text>Log In</Text></Button>                              
                            <View>
                                <Text>Don't have an account? </Text><Text onPress={()=>this.setState({form:'register'})} style = {{textDecorationLine:'underline'}}>Sign Up</Text>
                            </View>
                        </Form>   
                </Container>
            )    
        }
        else {
            return(
                <Container style = {{justifyContent : 'center'}}>
                        <View style = {{alignItems : 'center'}}>
                        <Text style = {{paddingBottom : 15,fontSize : 20}} >Become a Hubbers</Text>
                        </View>
                        <Form>
                            <Label style = {{marginLeft : 20}}>Email</Label>
                            <View style = {styles.form}>
                                <Input onChangeText = {(e)=>this.setState({emailInput : e})}/>
                            </View>
                            <Label style = {{marginLeft : 20}}>Password</Label>
                            <View style = {styles.form}>
                                <Input secureTextEntry = {this.state.hidePassword} onChangeText = {(e)=>this.setState({passwordInput : e})}/>
                                <Icon style={styles.Button} onPress = {()=>this.changeeyeState()}></Icon>
                            </View>
                            <Button success block rounded style = {styles.Button} onPress = {()=>this.inputChecker()}><Text>Log In</Text></Button>                              
                        </Form>   
                </Container>
            )
    
        }
    }
}

export default Login;
const styles = StyleSheet.create({
  Button : {
    marginBottom : 20,
    marginHorizontal : 80,
    borderWidth : 2,
    borderColor : 'black'
  },
  Image : {
      width,
      height : 200
  },
  form : {
    flexDirection : 'row',
    borderWidth : 2,
    marginHorizontal : 40,
    marginVertical : 10
  }

})