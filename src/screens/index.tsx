import React, {Component} from 'react';  
import {View,Text} from 'react-native';  
import Icon from 'react-native-vector-icons/Ionicons';  
export default class HomeScreen extends Component{
    static navigationOptions: { tabBarIcon: ({ tintColor, focused }: { tintColor: any; focused: any; }) => JSX.Element; };  
    render() {  
        return(  
            <View style={{'top':200}}>  
                <Text>This is Home Screen</Text>  
            </View>  
        )  
    }  
}  
HomeScreen.navigationOptions={  
            tabBarIcon:({tintColor, focused})=>(  
            <Icon  
                name={focused ? 'ios-home' : 'md-home'}  
                color={tintColor}  
                size={25}  
            />  
        )  
}  