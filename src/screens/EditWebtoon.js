import React, {Component} from 'react'
import {Text,Content,Container,ListItem,Left, Thumbnail, Body,Header,Right,Button, Label,View,Input,List}from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import {Init} from '../components/Init'


const data = [...Init.data]

class EditWebtoon extends Component{
  renderRecent = ({item,index}) => {
    return(
        <ListItem thumbnail onPress = {()=>{this.props.navigation.navigate('Details',{id : index})}}>
            <Left>
            <Thumbnail square source={{uri: item.url}}/>
            </Left>   
            <Body>
                <Text>{item.title}</Text>
                <Text note numberOfLines={1}>{item.caption}</Text>
            </Body>
            <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
        </ListItem>
    )
  }
  render(){
    return(
      <Container>
      <Header style = {{backgroundColor : 'white'}}>
            <Left>
                <Button transparent onPress = {()=>{}}>
                <Icon name='list'/>
                </Button>
            </Left>
            <Body>
                <Text>Edit Webtoon</Text>
            </Body>
            <Right>
                <Button transparent>
                <Icon color = 'orange' name='check' />
            </Button>
            </Right>
        </Header>
        <Content>
            <Label>Title</Label>
            <View style = {{flexDirection : 'row',borderWidth : 2, marginHorizontal : 40,marginVertical : 10}}>
                <Input value = {this.props.navigation.getParam('title')}/>
            </View>
            {data.map((item, index) => {
              return (
              <List key = {index}>
                <ListItem thumbnail>
                    <Left>
                    <Thumbnail square source={{uri: item.url}}/>
                    </Left>   
                    <Body>
                        <Text>{item.title}</Text>
                        <Text note numberOfLines={1}>{item.caption}</Text>
                    </Body>
                    <Right>
                        <Button transparent></Button>
                      </Right>
                </ListItem>
              </List>
              )
            })}
            <Button  transparent dark style = {{marginBottom : 20}} onPress = {()=>this.props.navigation.navigate('CreateEpisode')} block bordered><Text>+ Add Episode</Text></Button>  
            <Button block danger borderWidth = {2}><Text>- Delete Webtoon</Text></Button>                  
        </Content>
    </Container> 
    )
  }
}
export default EditWebtoon