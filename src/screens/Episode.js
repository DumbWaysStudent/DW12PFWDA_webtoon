import React, {Component} from 'react'
import {Image,Dimensions} from 'react-native'
import {Content,Container,List}from 'native-base'
import {Dummy} from '../components/Dummy'
import HeaderShare from '../components/Headers/HeaderShare'
import { connect } from 'react-redux'
import * as actionWebtoons from '../redux/actions/actionWebtoons'

 


const { width,height } = Dimensions.get('window');

class Episode extends Component{ 
    componentDidMount=async()=>{
        await this.props.handleGetDetailEpisodes({
            id_webtoon:this.props.navigation.getParam('id_webtoon'),
            episode:this.props.navigation.getParam('episode')
        })
    }
    render(){
        const {detailEpisodes}=this.props.detailEpisodesLocal
        console.log(detailEpisodes)
        const webtoonTitle = this.props.navigation.getParam('title')
        return(
            <Container>
                <Content>
                    <HeaderShare title = {webtoonTitle} navigation = {this.props.navigation}/>
                    <List>
                        <List>
                        {detailEpisodes.map((item, index) => {
                          return (
                          <List key = {index}>
                                <Image style = {{height,width}} source ={{uri : item.image}}></Image>
                          </List>
                          )
                        })}
                        </List>
                    </List>
                </Content>
            </Container>            
        )
    }
}

const mapStateToProps = state => {
    return {
        detailEpisodesLocal: state.detailEpisodes
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        handleGetDetailEpisodes: (params) => dispatch(actionWebtoons.handleGetDetailEpisodes(params)),
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Episode);