import React,{Component} from 'react';
import {Keyboard}from 'react-native';
import {Button,Input,Item,Text,Container, Content,Form,Label} from 'native-base';


class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            emailInput : '',
            passwordInput : '',
            data : {email : 'a@a.a', password : 'a'},
            emailRegex : '[a-z0-9]*[a-z0-9\.]+@[a-z0-9]+(\.[a-z0-9]+)*(\.[a-z0-9]+)'
        }
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
        return(
            <Container>
                <Content>
                    <Text>LOG IN</Text>
                    <Text>Login with your WEBTOON account</Text>
                    <Form>
                        <Item stackedLabel>
                            <Label>Email</Label>
                            <Input onChangeText = {(e)=>this.setState({emailInput : e})}/>
                        </Item>
                        <Item stackedLabel> 
                            <Label>Password</Label>
                            <Input onChangeText = {(e)=>this.setState({passwordInput : e})}/>
                        </Item>
                        <Button primary onPress = {()=>this.inputChecker()}><Text>Log In</Text></Button>
                    </Form>
                </Content>
            </Container>
        )
    }
}

export default Login;
