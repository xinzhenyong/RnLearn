/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


export default class HelloCompent extends Component{
  render(){
    return <Text style={{fontSize:20,backgroundColor:'red'}}>Hello{this.props.name}</Text>
  }
}

// function HelloCompent(){
//   return <Text style={{fontSize:20,backgroundColor:'red'}}>Helldddo.</Text>;
// }
// module.exports = HelloCompent;
