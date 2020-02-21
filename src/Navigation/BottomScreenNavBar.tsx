import { createAppContainer } from 'react-navigation';  
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import HomeScreen from "../screens/home"; 
import ProfileScreen from "../screens/profile";  
import SettingsScreen from "../screens/settings";  
import Login from "../screens/login"
  
const AppNavigator = createMaterialBottomTabNavigator(
    {
      Home: { screen: HomeScreen },
      Profile: { screen: ProfileScreen },
      Setting: { screen: SettingsScreen },
      Login: { screen: Login}
    },
    {
      initialRouteName: 'Home',
      activeColor: '#F44336',
    },
  );
export default createAppContainer(AppNavigator); 