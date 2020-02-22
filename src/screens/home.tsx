import React, {Component} from 'react';  
import { SafeAreaView, Text } from 'react-native';  
import Icon from 'react-native-vector-icons/Ionicons';  

export default class HomeScreen extends Component{
    static navigationOptions: { tabBarIcon: ({ tintColor, focused }: { tintColor: 'ffffff'; focused: 'ffffff'; }) => JSX.Element; };  
    render() {  
        return( 
            <SafeAreaView style={{zIndex:1, marginTop:200}}> 
                <Text>This is Home Screen</Text>  
            </SafeAreaView>  
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
