import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, LoginUser } from '../actions/AuthActions';
import { Card, CardSection, Button, Input, Spinner } from './common';

class LoginForm extends Component {
  onEmailChange(text){
    this.props.emailChanged(text);
  }
  onPasswordChange(text){
    this.props.passwordChanged(text);
  }
  onButtonPress(){
    const {email, password}=this.props;
    this.props.LoginUser({email, password});
  }
  renderError(){
    if(this.props.error){
      return(
        <View style={{backgroundColor: 'white'}}>
          <Text style={ styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      );
    }
    return null;
  }
  renderButton(){
    if(this.props.loading){
      return <Spinner size="large"/>;
    }
    return(
      <Button onPress={this.onButtonPress.bind(this)}>
      Login
    </Button>
  );
}
  render(){
    return(
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder = "email@mail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value = {this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            placeholder = "password"
            secureTextEntry
            onChangeText = {this.onPasswordChange.bind(this)}
            value = {this.props.password}
          />
        </CardSection>
        {this.renderError()}
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}
const mapStateToProps = ({auth}) => {
  const {email, password, error, loading}= auth;
  return{email,password,error,loading};
};
const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'

  }
};
export default connect(mapStateToProps, {emailChanged, passwordChanged, LoginUser})(LoginForm) ;
