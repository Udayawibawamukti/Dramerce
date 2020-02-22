import React, { useState } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    AppRegistry,
    StyleSheet,
    
} from 'react-native';
import { Button } from 'exoflex'

export default function Login(){
    
    let [isLoggedIn, setIsLoggedIn] = useState(false)
    
    if (isLoggedIn){
        return (
            <View>
                <Text style={{
                    fontSize: 27, 
                    alignSelf: 'center',
                    right:5,
                    top:200
                    }}>
                        CREATE PROFILE PAGE HERE
                    </Text>
                    <Button>Logout button</Button>
            </View>
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
                    <Button onPress={() => setIsLoggedIn(true)}>
                        Submit
                    </Button>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 27,
        alignSelf: 'center',
        right:5,
        textDecorationLine: 'underline'
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
    },
    button: {
        color: 'red'
    }
})



AppRegistry.registerComponent('Login' , () => Login );