
import _ from 'lodash';
import firebase from 'firebase';
import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import ListCard from './ListCard';
import { CardSection, Header, Button } from './common';
import { cardFetch } from '../actions';

class CardList extends Component {
  componentWillMount(){
      this.props.cardFetch(this.props.item);

      this.createDataSource(this.props);
  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps);
    this.createDataSource(nextProps);
  }
  createDataSource({libraries}){
    var i;
    const ds = new ListView.DataSource({
      rowHasChanged:(r1,r2) => r1!==r2
    });
    console.log(this.props);
    const item=this.props.item;
    console.log(libraries.item);
    for(i=0;i<libraries.length;i++)
    {
      console.log('libraries'+libraries[i].v)
      if(libraries[i].v === this.props.item){
        this.dataSource = ds.cloneWithRows(libraries);
      }
      else{
        i++
      }

    }

  }
  renderRow(library){
    console.log(library.questions)
    return <ListCard library= {library.questions}/>
  }
  onButtonPress(){
    Actions.CreateCard(this.props);
  }
  render() {
      return (
        <View style={{flex:1}}>
          <ListView
            enableEmptySections
            dataSource={this.dataSource}
            renderRow = {this.renderRow}
          />
          <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
        </View>
        );
  }
}
const mapStateToProps = state => {
   const libraries = _.map(state.libraries, (k,v) => {
    return {...k, v };
   });
   return {libraries};

 };
export default connect(mapStateToProps, {cardFetch})(CardList);
