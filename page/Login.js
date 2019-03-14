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


type Props = {};
export default class Login extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {
      result:0,
      size:''
    };
  }
  render() {
    var params = {name : "xiaomaing",age:18,sex:"ll"};
    return (
      <View  style={styles.container}>
<Text style={styles.welcome}>Welcome to Page1</Text>
 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexWrap:'wrap',
    flexDirection:'row',
  },
  welcome: {
    flex:1,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
