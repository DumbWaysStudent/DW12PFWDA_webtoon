import React,{Component} from 'react';
import {Keyboard,View,Image,Dimensions}from 'react-native';
import {Button,Input,Text,Container,Form,Label} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';


const {width} = Dimensions.get('window') 
class Login extends Component{
    constructor(){
        super();
        this.state = {
            emailInput : '',
            passwordInput : '',
            hidePassword : true,
            eye : 'eye-slash',
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
                        this.props.navigation.navigate('Home')
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
        return(
            <Container style = {{justifyContent : 'center'}}>
                    <View style = {{alignItems : 'center'}}>
                    <Image style = {{width : width,height : 200}} source = {{uri : 'https://static01.nyt.com/images/2015/07/06/business/06webtoons/06webtoons-articleLarge.jpg?quality=90&auto=webp'}}/>
                    <Text style = {{paddingBottom : 15,fontSize : 20}} >Login with your WEBTOON account</Text>
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
                        <Button success block rounded style = {{borderColor : 'black', marginHorizontal : 60,marginVertical : 10}} onPress = {()=>this.inputChecker()}><Text>Log In</Text></Button>
                    </Form>   
            </Container>
        )
    }
}

export default Login;
