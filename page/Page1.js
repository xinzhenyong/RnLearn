/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';


type Props = {};
export default class Page1 extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {
      result:0,
      size:''
    };
  }
  render() {
    const {navigation} = this.props;
    return (
      <View  style={styles.container}>
<Text style={styles.welcome}>Welcome to Page1</Text>
 <Button title={'Go Back'}
          onPress={()=>{
            navigation.goBack();
          }}/>
           <Button title={'跳转到页面4'}
          onPress={()=>{
            navigation.navigate('Page4');
          }}/>
          <Text>{navigation.state.params.name}</Text>
      </View>
    );
  }
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection:'column',
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
