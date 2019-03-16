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
import MainPage from './MainPage';
import { NavigationActions, StackActions } from 'react-navigation';

export default class Welcome extends Component{
  componentDidMount(){
      this.timer=setTimeout(()=>{
        this.goToPage('MainPage');
        // this.props.navigator.resetTo({
        //   component:App
        // })
      },2000);
  }
  goToPage(routeName) {
    const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName })],
    });
    this.props.navigation.dispatch(resetAction);
}

  componentWillUnmount(){
      this.timer&& clearTimeout(this.timer);
  }
  render(){
    return <Text style={{fontSize:20,backgroundColor:'red'}}>Welcome</Text>
  }
}

// function HelloCompent(){
//   return <Text style={{fontSize:20,backgroundColor:'red'}}>Helldddo.</Text>;
// }
// module.exports = HelloCompent;
