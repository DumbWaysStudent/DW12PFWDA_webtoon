import React, { Component } from 'react';
import {
  Share,
  Text,
  TouchableOpacity
} from 'react-native';

const shareOptions = {
  title: 'Title',
  message: 'Message to share', // Note that according to the documentation at least one of "message" or "url" fields is required
  url: 'www.example.com',
  subject: 'Subject'
};

export default class ShareExample extends React.Component {

  onSharePress = () => Share.share(shareOptions);

  render(){
    return(
      <TouchableOpacity onPress={this.onSharePress} >
        <Text>Share data</Text>
      </TouchableOpacity>
    );
  }
}