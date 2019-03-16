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
import ScrollableTabBarView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';

const URL = 'https://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=stars';
export default class PopularPage extends Component{
  constructor(props){
    super(props);
    this.state={
      result:'',
      tabLabel:'ios'
    }
  }
  componentDidMount(){
    this.onLoad();
  }
  renderRow(item){
    return <View>
      <Text>{item.email}</Text>
      <Text>{item.fullName}</Text>
    </View>
  }
  onLoad(){
    let url = URL + this.state.tabLabel+QUERY_STR;
    // let url = "http://www.baidu.com";
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
      <ScrollableTabBarView renderTabBar={()=><ScrollableTabBar/>}>
        <Text tabLabel="ios">ios</Text>
        <Text tabLabel="java">java</Text>
        <Text tabLabel="rn">rn</Text>
      </ScrollableTabBarView>
      <Text >{this.state.result}}</Text>
      </View>
  }
}


