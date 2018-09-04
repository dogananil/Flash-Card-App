
import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { CardSection, Header } from './common';



import * as actions from '../actions';

class ListCard extends Component {
  render() {
var i=0;
      const { titleStyle } = styles;
      console.log(this.props.library);
      var x= Object.keys(this.props.library);
      const { question, answer} = this.props.library[x[++i]];
//debugger;
    return (
            <CardSection>
              <Text style={titleStyle}>
              {question}
              </Text>
            </CardSection>
    );
  }
}
const styles = {
  titleStyle:{
    fontSize: 18,
    paddingLeft: 15
  }
};

export default ListCard;
