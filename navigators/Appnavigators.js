import {createStackNavigator,StackNavigator} from 'react-navigation';
import React from 'react';
import {Button} from 'react-native'
import HomePage from '../page/HomePage';
import Page1 from '../page/Page1';
import Page2 from '../page/Page2';
import Page3 from '../page/Page3';
import Page4 from '../page/Page4';
import Page5 from '../page/Page5';
import Welcome from '../Welcome';
import MainPage from '../MainPage';
// export const AppStackNavigator=createStackNavigator({
//     HomePage:{
//         screen:HomePage
//     },
//     Page1:{
//         screen:Page1,
//         navigationOptions:({navigation})=>({
//             title:navigation.state.params.name
//         })
//     },
//     Page2:{
//         screen:Page2,
//         navigationOptions:{
//             title:'This is Page2'
//         }
//     },
//     Page3:{
//         screen:Page3,
//         navigationOptions:(props)=>{
//             const {navigation} = props;
//             const {state,setParams} = navigation;
//             const {params} = state;
//             return {
//                 title: params.title?params.title:'This is Page3',
//                 headerRight:(
//                     <Button 
//                         title={params.mode === 'edit'?'ä¿�å­˜':'ç¼–è¾‘'}
//                         onPress={()=>setParams({mode:params.mode==='edit'?'':'edit'})}
//                     />
//                 )
//             }
//         }
//     },
// })
export const AppStackNavigator=createStackNavigator({
    Welcome:{
        screen:Welcome
    },
    MainPage:{
        screen:MainPage,
                navigationOptions:{title:'热门'}
            
    },
    
})

