/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {createAppContainer} from 'react-navigation';
import {AppStackNavigator} from './navigators/Appnavigators';
import MainPage from './MainPage';
import setup from './setup';

const AppStackNavigatorContainer = createAppContainer(AppStackNavigator);

AppRegistry.registerComponent(appName, () => AppStackNavigatorContainer);

// AppRegistry.registerComponent(appName, () => MainPage);
// AppRegistry.registerComponent(appName, () => setup);
