import React from 'react';
import {StyleSheet, TouchableHighlight} from 'react-native'; 
import Icon from 'react-native-vector-icons/Ionicons';

export default function ProfileButton(){
    return(
        <TouchableHighlight style={style.profilePerson} onPress={()=> alert('hi')}>
            <Icon name="md-person" size={30} color="black" />
        </TouchableHighlight>
    )
}

const style = StyleSheet.create({
    profilePerson: {
        zIndex: 1,
        alignSelf: 'flex-end',
        top: -150,
        paddingRight:25
    }

})