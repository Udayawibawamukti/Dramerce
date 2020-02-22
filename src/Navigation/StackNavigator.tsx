import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home';
import ProfileScreen from '../screens/profile';
import SettingsScreen from '../screens/settings';
import Login from '../screens/login'


const Stack = createStackNavigator();

export default function StackNavigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Home"
                component={HomeScreen}
            />
            <Stack.Screen 
                name="Profile"
                component={ProfileScreen}
            />
             <Stack.Screen 
                name="Settings"
                component={SettingsScreen}
            />
            <Stack.Screen 
                name="Login"
                component={Login}
            />
        </Stack.Navigator>
    )
}