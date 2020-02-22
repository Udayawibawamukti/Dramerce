import React from 'react';
import {StyleSheet, TouchableHighlight} from 'react-native'; 
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { StackNavProp } from '../types/Navigation'

export default function ProfileButtonIcon(){
    let { navigate } = useNavigation<StackNavProp<'Login'>>();
    return(
        <TouchableHighlight style={style.profilePerson} onPress={()=> navigate('Login')}>
            <Icon name="md-person" size={30} color="black" />
        </TouchableHighlight>
    )
}

const style = StyleSheet.create({
    profilePerson: {
        zIndex: 1,
        alignSelf: 'flex-end',
        top: 50,
        paddingRight:25
    }
})