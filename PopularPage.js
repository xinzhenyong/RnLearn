/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ListView,RefreshControl} from 'react-native';
import ScrollableTabBarView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';
import DataRepository from './js/expand/dao/DataRepository';
import RespositoryCell from './js/common/RespositoryCell';
import NavigationBar from './NavigationBar';
const URL = 'https://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=stars';

export default class PopularPage extends Component{
  constructor(props){
    super(props);
    this.dataRepository = new DataRepository();
    this.state={
      result:'',
    }
  }
  componentDidMount(){
    // this.onLoad();
  }
  renderRow(item){
    return <View>
      <Text>{item.email}</Text>
      <Text>{item.fullName}</Text>
    </View>
  }
  onLoad(){
    let url = URL + this.state.tabLabel+QUERY_STR;
    this.dataRepository.fetchNetRepository(url)
    .then((result)=>{
      this.setState({
        result:JSON.stringify(result)
      })
    })
    .catch((error)=>{
      this.setState({
        result:JSON.stringify(error)
      })
    })
    // let url = "http://www.baidu.com";
    // fetch(url)
    // .then(response=>response.json())
    // .then(result=>{
    //   this.setState({
    //     result:JSON.stringify(result)
    //   })
    // })
    // .catch(error=>{
    //   this.setState({
    //     result:JSON.stringify(error)
    //   })
    // })
  }
  render(){
    return <View style={{flex:1,backgroundColor:'white',justifyContent:'center'}}>
      <NavigationBar
      title="最热"
      />
      <ScrollableTabBarView
      tabBarBackgroundColor="#2196f3"
      tabBarInactiveTextColor="mintcream"
      tabBarActiveTextColor="white"
      tabBarUnderlineStyle={{backgroundColor:"#e7e7e7",height:2}}
      renderTabBar={()=><ScrollableTabBar/>}>
        <PopularTab tabLabel="IOS">IOS</PopularTab>
        <PopularTab tabLabel="JAVA">JAVA</PopularTab>
        <PopularTab tabLabel="ANDROID">ANDROID</PopularTab>
        <PopularTab tabLabel="JAVASCRIPT">js</PopularTab>
      </ScrollableTabBarView>
      </View>
  }
}
class PopularTab extends Component{
  constructor(props){
    super(props);
    this.dataRepository = new DataRepository();
    this.state={
      result:'',
      isLoading:false,
      dataSource:new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2})
    }
  }
  componentDidMount(){
    this.onLoad();
  }
  renderRow(data){
    return <RespositoryCell data={data}>
    </RespositoryCell>
  }
  onLoad(){
    this.setState({
      isLoading:true
    });
    let url = URL + this.props.tabLabel+QUERY_STR;
    this.dataRepository.fetchNetRepository(url)
    .then((result)=>{
      this.setState({
        dataSource:this.state.dataSource.cloneWithRows(result.items),
        isLoading:false
      })
    })
    .catch((error)=>{
      this.setState({
        result:JSON.stringify(error)
      })
    })
  }
  render(){
    return <View style={{flex:1}}>
      <ListView 
      dataSource={this.state.dataSource}
      renderRow={(data=>this.renderRow(data))}
      refreshControl={<RefreshControl
        refreshing={this.state.isLoading}
        onRefresh={()=>this.onLoad()}
        colors={['#2196f3']}
        tintColor={'#2196f3'}
        title='Loading...'
        titleColor={'#2196f3'}
      />}/>
      
    </View>
  }
}


