import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useAuth } from './AuthContext'

const Profile = ({navigation}) => {

    const {setIsAuthenticated} = useAuth()
    const goBackLogIn = () => {
        setIsAuthenticated(false);
    }
  return (
    <View style={styles.profile}>
        <Text style={styles.text_profile}>Profile Screen</Text>
        <TouchableOpacity
            onPress={goBackLogIn}
            style={styles.button}
        >
            <Text style={styles.text_logout}>LOG OUT</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    profile: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text_profile: {
        fontSize: 20,
        color: '#000000'
    },
    text_logout: {
        fontWeight: '400',
        fontSize: 20,
        color: '#ffffff'
    },
    button: {
        backgroundColor: '#4190f4',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 10,
        width: 120,
        height: 40,
    }
})

export default Profile