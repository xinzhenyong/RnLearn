/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


type Props = {};
export default class HomePage extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      size: ''
    };
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to HomePage!</Text>
        <Button title={'Go to Page1'}
          onPress={() => {
            navigation.navigate('Page1', { name: '动态的' })
          }} />
        <Button title={'Go to Page2'}
          onPress={() => {
            navigation.navigate('Page2')
          }} />
        <Button title={'Go to Page3'}
          onPress={() => {
            navigation.navigate('Page3', { name: 'Devio' })
          }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',
  },
  welcome: {
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
