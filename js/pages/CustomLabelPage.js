import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,ListView,TouchableOpacity,AsyncStorage} from 'react-native';
import NavigationBar from  '../../NavigationBar';
import ViewUtils from '../util/ViewUtils';
import NavigatorUtil from '../util/NavigatorUtil';
import languagesData from '../../res/data/langs.json';
import CheckBox from 'react-native-check-box'
export default class CustomLabelPage extends Component{
    constructor(props){
        super(props);
        this.state={
            dataArray:languagesData
        }
    }
    renderCheckBox(data) {
        let leftText = data.name;
        let isChecked = this.isRemoveKey ? false : data.checked;
        return (
            <CheckBox
                style={{flex: 1, padding: 10}}
                onClick={()=>this.onClick(data)}
                isChecked={isChecked}
                leftText={leftText}
                checkedImage={<Image source={require('../pages/img/ic_check_box.png')}
                                    //  style={this.params.theme.styles.tabBarSelectedIcon}
                                     />}
                unCheckedImage={<Image source={require('../pages/img/ic_check_box_outline_blank.png')}
                                    //    style={this.params.theme.styles.tabBarSelectedIcon}
                                       />}
            />);
    }
    renderView() {
        if (!this.state.dataArray || this.state.dataArray.length === 0)return;
        var len = this.state.dataArray.length;
        var views = [];
        for (var i = 0, l = len - 2; i < l; i += 2) {
            views.push(
                <View key={i}>
                    <View style={styles.item}>
                        {this.renderCheckBox(this.state.dataArray[i])}
                        {this.renderCheckBox(this.state.dataArray[i + 1])}
                    </View>
                    <View style={styles.line}/>
                </View>
            )
        }
        views.push(
            <View key={len - 1}>
                <View style={styles.item}>
                    {len % 2 === 0 ? this.renderCheckBox(this.state.dataArray[len - 2]) : null}
                    {this.renderCheckBox(this.state.dataArray[len - 1])}
                </View>
            </View>
        )
        return views;

    }
    render(){
        return <View>
            <NavigationBar 
            title='自定义标签' 
            leftButton={ViewUtils.getLeftButton(()=>{
                NavigatorUtil.goBack(this.props.navigation);
            })}/>
            {this.renderView()}
        </View>
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f2f2'
    },
    item: {
        flexDirection: 'row',
    },
    line: {
        flex: 1,
        height: 0.3,
        backgroundColor: 'darkgray',
    },
})