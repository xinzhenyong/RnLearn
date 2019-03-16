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

export default class Girl extends Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
  render(){
    return <View style={{flex:1,backgroundColor:'red',justifyContent:'center'}}>
      <Text style={{fontSize:20,backgroundColor:'red'}}>im a girl</Text>
      <Text style={{fontSize:20,backgroundColor:'red'}}
      onPress={()=>{
          // this.props.navigator.push({
          //       component :Girl,
          //       params:{
          //         word:'一盒玫瑰',
          //         onCallBack:(word)=>{
          //           this.setState({
          //             word:word
          //           });
          //         }
          //       }
          // });
      }}>送男孩巧克力</Text>
      <Text style={{fontSize:20,backgroundColor:'red'}}>我收到了男孩送的{this.props.word}</Text>
      </View>
  }
}

// function HelloCompent(){
//   return <Text style={{fontSize:20,backgroundColor:'red'}}>Helldddo.</Text>;
// }
// module.exports = HelloCompent;
