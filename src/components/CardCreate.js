import { Actions } from 'react-native-router-flux';
import React, { Component } from 'react';
import {Picker, Text} from 'react-native';
import { connect } from 'react-redux';
import { CardUpdate, cardCreate } from '../actions';
import { Button, Card, CardSection, Input } from './common';

class CardCreate extends Component {
  onButtonPress(){
    const title =this.props.library.item;
    const {question, answer} = this.props;
    this.props.cardCreate( {question, answer, title});
  }
  render(){
    return(
      <Card>
        <CardSection>
          <Input
          label="Question"
          placeholder = "Question"
          value={this.props.question}
          onChangeText={value => this.props.CardUpdate({prop:'question', value})}
          />
        </CardSection>
        <CardSection>
        <Text>Answer</Text>
          <Picker style = {{flex:1}}
          selectedValue = {this.props.answer}
          onValueChange = {value => this.props.CardUpdate({prop:'answer', value})}
          >
          <Picker.Item label= "True" value="True"/>
          <Picker.Item label= "False" value="False"/>
          </Picker>
        </CardSection>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
        </CardSection>
      </Card>
    );
  }
}
const mapStateToProps = (state) => {
    const {question, answer, title} = state.cardForm;
    return { question, answer, title };

};
export default connect(mapStateToProps, { CardUpdate, cardCreate } )(CardCreate);
