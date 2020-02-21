import { createAppContainer } from 'react-navigation';  
// import {createMaterialBottomTabNavigator} from 'react-navigation-tabs'
import HomeScreen from "../screens/index"; 
import ProfileScreen from "../screens/profile";  
import SettingScreen from "../screens/settings";  
  
export const AppNavigator = createMaterialTopTabNavigator(  
    {  
        Home: HomeScreen,  
        Profile: ProfileScreen,  
        Settings: SettingScreen,  
    },  
    {  
        tabBarOptions: {  
            activeTintColor: 'white',  
            showIcon: true,  
            showLabel:false,  
            style: {  
                backgroundColor:'red'  
            }  
        },  
    }  
)  
export default createAppContainer(AppNavigator); 