import {  View, Text, StyleSheet, Image, TextInput, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
// import Icon from 'react-native-vector-icons/FontAwesome'
import Input from './Input'

function Signup({navigation}) {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
    
  const onPressHandler = () => {
    navigation.goBack();
  }

  return (
    <View style={styles.main}>
      <View style={styles.logo}>
          <Image
            style={styles.logo_img}
            source={{uri: 'https://ionicframework.com/docs/icons/logo-react-icon.png'}}
          />
          <Text style={styles.text_logo}>Create New Account</Text>
      </View>

      <View style={styles.input_container}>
        <TextInput 
          style={styles.input}
          name = 'user'
          onChangeText={(value) => setUsername(value)}
          value = {username}
          placeholder = 'Enter username'
          multiline={false}
          secureTextEntry={false}
        />
        <TextInput 
          style={styles.input}
          name = 'envelope'
          onChangeText={(value) => setEmail(value)}
          value = {email}
          placeholder = 'Email'
          multiline={false}
          secureTextEntry={false}
        />
        <TextInput 
          style={styles.input}
          name = 'lock'
          onChangeText = {(value) => setPassword(value)}
          value = {password}
          placeholder = 'Enter password'
          multiline = {false}
          secureTextEntry = {true}
        />
        <TextInput 
          style={styles.input}
          name = 'lock'
          onChangeText = {(value) => setConfirmPassword(value)}
          value = {confirmPassword}
          placeholder = 'Comfirm password'
          multiline = {false}
          secureTextEntry = {true}
        />
      </View>

      <View style={styles.button_container}>
        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.text_button}>CREATE</Text>
        </TouchableOpacity>
      </View> 

      <View style={styles.login}>
        <Text style={styles.text_login}>
          Already have an account?
        </Text>
        <TouchableOpacity
          style={styles.login_button}
          onPress={onPressHandler}
        >
          <Text style={[styles.text_login, {fontWeight: '700', color: '#1a1add'}]}> Login now!</Text>
        </TouchableOpacity>
      </View>

    </View>
    )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#f2f2f2'
  },
  logo: {
    marginTop: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo_img: {
    width: 100,
    height: 100,
  },
  text_logo: {
    fontSize: 25,
    marginTop: 10,
    color: '#000000',
    fontWeight: '700',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: 'gray',
    height: 30,
    marginHorizontal: 40,
    marginTop: 20,
  },
  button_container: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 320,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#e77105',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_button: {
    fontSize: 25,
    fontWeight: '400',
    color: '#ffffff'
  },
  login: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text_login: {
    fontSize: 20,
    color: '#000000',
  }

  })

export default Signup