import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import PropTypes from 'prop-types';
export default class PropsTest extends Component{
    state = {
        size:80
    }
    static defaultProps={
        name:'xiao hong'
    }
    static  propTypes={
        name:PropTypes.string,
        sex:PropTypes.string.isRequired
    }
    getSize(){
        return this.state.size;
    }
    render(){
      return <View>
          <Text/>
          <Text style={{fontSize:20,backgroundColor:'red'}}>Hello{this.props.name}</Text>
          <Text onPress={()=>{
              this.setState({
                  size:this.state.size+10
              })
          }} style={{fontSize:20,backgroundColor:'red'}}>我吹啊吹！</Text>
          <Image style={{width:this.state.size,height:this.state.size}} source={require('./qiqiu.jpg')}/>
          </View>
    }
  }