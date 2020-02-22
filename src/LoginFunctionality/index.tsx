import React, { useState } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    AppRegistry,
    StyleSheet,
    
} from 'react-native';
import { blue } from 'color-name';

export default function ReactNativeStormpath(){
    
    let [isLoggedIn, setIsLoggedIn] = useState(false)
    
    if (isLoggedIn){
        return (
            <ScrollView contentContainerStyle={{padding: 20}}>
            <Text 
                style={{fontSize: 27}}>
                Welcome
            </Text>
            <View style={{margin:20}} />
            <Button onPress={() => setIsLoggedIn(false)} title="Logout"/>
            </ScrollView>
        )
    }
    else{
        return (
            <ScrollView contentContainerStyle={styles.form}>
                <Text style={styles.title}>
                    Login
                </Text>
                <TextInput style={styles.username} placeholder='Username' />
                <TextInput style={styles.password} placeholder='Password' />
                <View style={styles.submit} >
                    <Button title="Submit" onPress={() => setIsLoggedIn(true)}/>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 27,
        alignSelf: 'center',
        right:5
    },
    form: {
        alignItems: 'flex-start',
        top: 100,
        paddingLeft:10
    },
    username: { 
        fontSize:18,
        top: 50,
        alignSelf: 'flex-start',
        marginTop: 24,
        marginBottom: 24,
        flexDirection: 'row'
    },
    password : {
        fontSize:18,
        top: 40,
        alignSelf: 'flex-start',
        marginTop: 24,
        
    },
    inputLabel: { 
        fontSize: 24, 
        marginBottom: 12 
    },
    submit: {
        fontSize: 24, 
        alignSelf: 'stretch',
        backgroundColor: 'blue',
        top:80,
        right:7,
        marginHorizontal:0
    }
})



AppRegistry.registerComponent('ReactNativeStormpath' , () => ReactNativeStormpath );