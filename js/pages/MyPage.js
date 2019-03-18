import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,ListView} from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
export default class MyPage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const { navigation } = this.props;
        return <View>
            <Text style={{fontSize:22,color:'blue'}}
            onPress={()=>{
                navigation.navigate('CustomLabelPage');
            }}>跳转到自定义标签</Text>
        </View>
    }
}