export { default } from './src/index'
import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';  
import App from './src/index'
import {expo as expo} from './app.json';  

AppRegistry.registerComponent(expo.name, () => App);  