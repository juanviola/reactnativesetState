'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

class MiButton extends Component {
  constructor(props){
    super(props);
  }

  _press(){
    this.props.mainState({text: 'ok'})
  }

  render(){
    return(
      <View>
        <TouchableHighlight
          style={{
            backgroundColor: 'red', color: 'white', fontSize: 20, margin:10
          }}
          onPress={()=>{
            this._press()
          }}>
          <Text style={{
            margin:10, padding:10, alignItems: 'center', justifyContent:'center'
          }}>Press Me!!</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

module.exports = MiButton
