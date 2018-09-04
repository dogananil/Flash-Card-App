
import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import { CardSection, Header } from './common';
import { deckFetch } from '../actions';

class DeckList extends Component {
  componentWillMount(){
    this.props.deckFetch();

    this.createDataSource(this.props);

  }
  componentWillReceiveProps(nextProps){
    this.createDataSource(nextProps);
  }
  createDataSource({libraries}){
    const ds = new ListView.DataSource({
      rowHasChanged:(r1,r2) => r1!==r2
    });
    this.dataSource = ds.cloneWithRows(libraries);
  }
  renderRow(library){
    return <ListItem library= {library}/>
  }
  render() {
    return (

      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow = {this.renderRow}
      />
    );
  }
}
const mapStateToProps = state => {
   const libraries = _.map(state.libraries, (k,v) => {
    return {uid:k, item: v };
   });
   return {libraries};
 };
export default connect(mapStateToProps, {deckFetch})(DeckList);
