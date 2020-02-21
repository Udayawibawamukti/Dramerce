import { createAppContainer } from 'react-navigation';  
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import HomeScreen from "../screens/index"; 
import ProfileScreen from "../screens/profile";  
import SettingsScreen from "../screens/settings";  
  
const AppNavigator = createMaterialBottomTabNavigator(
    {
      Home: { screen: HomeScreen },
      Profile: { screen: ProfileScreen },
      Setting: { screen: SettingsScreen },
    },
    {
      initialRouteName: 'Home'
    },
  );
export default createAppContainer(AppNavigator); 