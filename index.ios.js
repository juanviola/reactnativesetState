/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var MiButton = require('./MiButton');

export default class reactnativesetState extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: 'Hello dickinson!'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.text}</Text>
        <MiButton mainState={this.setState.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('reactnativesetState', () => reactnativesetState);
