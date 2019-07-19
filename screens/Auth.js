import React, { Component } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

import startTabs from './startMainTabs';

class AuthScreen extends Component {

  loginHandler = () => {
    startTabs();
  }
  
  render() {
    return (
      <View>
        <Text>Please signup</Text>
        <Button title="Switch to Login"/>
        <TextInput placeholder="Your e-mail"/>
        <TextInput placeholder="Your password" />
        <TextInput placeholder="Confirm password" />
        <Button
          title="Login"
          onPress={this.loginHandler}
        />
      </View>
    );
  }
}

export default AuthScreen;
