/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native';
import Girl from './Girl';
import NavigationBar from './NavigationBar';

export default class Boy extends Component{
  constructor(props){
    super(props);
    this.state={
      word:''
    }
  }
   getLeftButton(callBack) {
    return <TouchableOpacity
        style={{padding: 8}}
        onPress={callBack}>
        <Image
            style={{width: 26, height: 26,}}
            source={require('./res/images/ic_arrow_back_white_36pt.png')}/>
    </TouchableOpacity>
}
  render(){
    return <View style={{flex:1}}>
      <NavigationBar
                    leftButton={this.getLeftButton(()=>this.onBack())}
                    popEnabled={false}
                    title={"Boy"}
                />
      <Text style={{fontSize:20,backgroundColor:'red'}}>im a boy</Text>
      <Text style={{fontSize:20,backgroundColor:'red'}}
      onPress={()=>{
          this.props.navigator.push({
                component :Girl,
                params:{
                  word:'一枝玫瑰',
                  onCallBack:(word)=>{
                    this.setState({
                      word:word
                    });
                  }
                }
          });
      }}>送女孩一支玫瑰</Text>
      <Text style={{fontSize:20,backgroundColor:'red'}}>{this.state.word}</Text>
      </View>
  }
}

// function HelloCompent(){
//   return <Text style={{fontSize:20,backgroundColor:'red'}}>Helldddo.</Text>;
// }
// module.exports = HelloCompent;
