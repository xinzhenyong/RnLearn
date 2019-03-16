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
var data={
  "result":[
    {
      "email":"1111",
      "fullName":"张三1"
    },
    {
      "email":"11112",
      "fullName":"张三2"
    },
    {
      "email":"11113",
      "fullName":"张三3"
    },
    {
      "email":"11114",
      "fullName":"张三4"
    },
    {
      "email":"11115",
      "fullName":"张三5"
    },
    {
      "email":"11116",
      "fullName":"张三6"
    },
    {
      "email":"11117",
      "fullName":"张三7"
    },
  ]
}
export default class ListViewTest extends Component{
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
    this.state={
      dataSource:ds.cloneWithRows(data),
    }
  }
  renderRow(item){
    return <View>
      <Text>{item.email}</Text>
      <Text>{item.fullName}</Text>
    </View>
  }
  render(){
    return <View style={{flex:1,backgroundColor:'red',justifyContent:'center'}}>
      <ListView dataSource={this.state.dataSource}
        renderRow={(item)=>this.renderRow(item)}/>
      </View>
  }
}


