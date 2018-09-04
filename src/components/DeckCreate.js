import { Actions } from 'react-native-router-flux';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DeckUpdate, deckCreate } from '../actions';
import { Button, Card, CardSection, Input } from './common';

class DeckCreate extends Component {
  onButtonPress(){
    console.log(this.props);
    const {title} = this.props;
    this.props.deckCreate( title);
  }
  render(){
    return(
      <Card>
        <CardSection>
          <Input
          label="Title"
          placeholder = "title"
          value={this.props.title}
          onChangeText={value => this.props.DeckUpdate({prop:'title', value})}
          />
        </CardSection>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
        </CardSection>
      </Card>
    );
  }
}
const mapStateToProps = (state) => {
    const {title} = state.deckForm;

    return { title };

};
export default connect(mapStateToProps, {DeckUpdate, deckCreate })(DeckCreate);
