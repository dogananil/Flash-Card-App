
import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { CardSection, Header } from './common';



import * as actions from '../actions';

class ListItem extends Component {
  render() {
      const { titleStyle, deckStyle } = styles;
      const { item } = this.props.library;
    return (
      <TouchableOpacity onPress = {() => Actions.cards(this.props.library)}>
            <CardSection>
            <View style = {deckStyle}>
              <Text style={titleStyle}>
              {item}
              </Text>
              <Text style = {{color:'#ddf', fontSize: 13}}>
                {Object.keys( this.props.library.uid.questions).length} cards
              </Text>
              </View>
            </CardSection>
      </TouchableOpacity>
    );
  }
}
const styles = {
  titleStyle:{
    fontSize: 18
  },
  deckStyle: {
    flex : 1,
    flexDirection :'column',
    alignItems: 'center',

  }
};

export default ListItem;
