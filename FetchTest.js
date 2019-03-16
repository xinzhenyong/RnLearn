/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ListView} from 'react-native';

export default class FetchTest extends Component{
  constructor(props){
    super(props);
    this.state={
      result:"",
    }
  }
  renderRow(item){
    return <View>
      <Text>{item.email}</Text>
      <Text>{item.fullName}</Text>
    </View>
  }
  onLoad(url){
    fetch(url)
    .then(response=>response.json())
    .then(result=>{
      this.setState({
        result:JSON.stringify(result)
      })
    })
    .catch(error=>{
      this.setState({
        result:JSON.stringify(error)
      })
    })
  }
  render(){
    return <View style={{flex:1,backgroundColor:'red',justifyContent:'center'}}>
      <Text
        onPress={()=>{
          this.onLoad("http://www.baidu.com")
        }}
      >get data</Text>
      <Text>result:{this.state.result}</Text>
      </View>
  }
}


