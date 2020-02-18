import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from './HomeScreen'

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator   
        tabBarOptions={{
        labelStyle: { fontSize: 12 },
        tabStyle: { width: 100 },
        style: { backgroundColor: 'powderblue' },
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />

    </Tab.Navigator>
  );
}