import React from 'react';
import { AppRegistry } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './Navigation/BottomScreenNavBar'
import StackNavigator from './Navigation/StackNavigator'
import ProfileButtonIcon from './buttons/ProfileButtonIcon'

export default function App() {


  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#0000ff'
    }
  }

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <AppNavigator />
        <StackNavigator/>
        <ProfileButtonIcon />
      </NavigationContainer>
    </PaperProvider>
  );
}

AppRegistry.registerComponent('app', () => App);