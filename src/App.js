
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';
import LoginForm from './components/LoginForm';


class App extends Component {

  componentWillMount(){
    firebase.initializeApp({
  apiKey: "AIzaSyA-pRqCfY_QYNNkqfZttmjneSt89DmxaVk",
  authDomain: "auth-4b880.firebaseapp.com",
  databaseURL: "https://auth-4b880.firebaseio.com",
  projectId: "auth-4b880",
  storageBucket: "auth-4b880.appspot.com",
  messagingSenderId: "685325728811"
    });
}
render(){
  const store=createStore(reducers, {}, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store} >
      <View style={{ flex: 1 }}>
        <Router/>
      </View>
    </Provider>
  );
}
};

export default App;
