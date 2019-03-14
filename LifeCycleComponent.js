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


export default class LifeCycleComponent extends Component{
  constructor(props){
    super(props);
    console.log('----------constructor-----------');
    this.state = {
      count:0
    };
  }
  componentWillMount(){
    console.log('----------componentWillMount-----------');
  }
  componentDidMount(){
    console.log('----------componentDidMount-----------');
  }
  componentWillReceiveProps(nextProps){
    console.log('----------componentWillReceiveProps-----------');
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log('----------shouldComponentUpdate-----------');
    return true;
  }
  componentWillUpdate(nextProps,nextState){
    console.log('----------componentWillUpdate-----------');
  }
  componentDidUpdate(nextProps,nextState){
    console.log('----------componentDidUpdate-----------');
  }
  componentWillUnmount(){
    console.log('----------componentWillUnmount-----------');
  }
  render(){
    return <View>
      <Text onPress={()=>{this.setState({
        count:this.state.count+1
      })}} 
      style={{fontSize:20,backgroundColor:'red'}
      
    }>有本事你打我啊!</Text>
    <Text style={{fontSize:20,backgroundColor:'blue'}
    }>被打了{this.state.count}次</Text>
      </View>
  }
}

