import React, { useState } from 'react';
import {
  AppRegistry
} from 'react-native';

import Login from '../screens/login'
import Secured from '../screens/Secured'

export function ReactNativeStormpath(){
    
    let [isLoggedIn, setIsLoggedIn] = useState(false)

    if (isLoggedIn){
        return (
            <Secured onClick={() => setIsLoggedIn(false)} />
        )
    }
    else{
        return (
            <Login onClick={() => setIsLoggedIn(true)} />
        )
    }

  

}

AppRegistry.registerComponent('ReactNativeStormpath' , () => ReactNativeStormpath );