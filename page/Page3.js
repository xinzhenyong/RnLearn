/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { TextInput, StyleSheet, Text, View } from 'react-native';


type Props = {};
export default class Page3 extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      size: ''
    };
  }
  render() {
    const { navigation } = this.props;
    const { state, setParams } = navigation;
    const { params } = state;
    const showText = params && params.mode === 'edit' ? '正在编辑' : '编辑完成';
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Page3</Text>
        <Text style={styles.welcome}>{showText}</Text>

        <TextInput
          onChangeText={(text) => {
            setParams({ title: text });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexWrap: 'wrap',
    flexDirection: 'column',
  },
  welcome: {
    flex: 1,
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
