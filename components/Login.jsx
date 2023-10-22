import {  View, Text, StyleSheet, Image, Pressable, TouchableOpacity, Alert, TextInput } from 'react-native'
import React, { useState } from 'react'
import Input from './Input'
import ModalComponent from './Modal'
import { useAuth } from './AuthContext'


function Login({navigation}){

  const {email, password, setCredentials, setIsAuthenticated} = useAuth()
  const [isModalVisible, setModalVisible] = useState(false)
  
  const onPressHandler = () => {
    navigation.navigate('Signup')
  }
  const onPressLogin = () => {
    if ( email === '20522169@gm.uit.edu.vn' && password ==='vhav' ) {
      setIsAuthenticated(true);
    } else {
      setModalVisible(true)
    }
  } 

  return (
    <View style={styles.main}>
      <ModalComponent 
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
        onPressFunction={() => setModalVisible(false)}
      />
      <View style={styles.logo}>
        <Image
          style={styles.logo_img}
          source={{uri: 'https://ionicframework.com/docs/icons/logo-react-icon.png'}}
        />
        <Text style={styles.text_logo}>Welcome</Text>
      </View>

      <View style={styles.input_container}>
        <TextInput placeholder='Email Address' style={styles.input} 
          name = 'envelope'
          onChangeText={(value) => setCredentials(value, password)}
          value = {email}
          multiline={false}
          secureTextEntry={false}></TextInput>
        <TextInput placeholder='Password' style={styles.input}
        name = 'lock'
        onChangeText={(value) => setCredentials(email, value)}
        value = {password}
        multiline = {false}
        secureTextEntry = {true}></TextInput>
      </View>

      <Pressable
        style={styles.forgot}
        android_ripple={{color: '#808080'}}
      >
        <Text style={styles.forgot_text}>Forgot password?</Text>
      </Pressable>

      <View style={styles.button_container}>
        <TouchableOpacity
          style={styles.button}
          onPress={onPressLogin}
        >
          <Text style={styles.text_button}>LOG IN</Text>
        </TouchableOpacity>
      </View> 

      <View style={styles.other_login}>
        <Text style={styles.other_text_login}>Or login with</Text>
        <View style={styles.fb_gg_logo}>
          <Image
            style={styles.fb_gg}
            source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png'}}
          />
          <Image
            style={styles.fb_gg}
            source={{uri: 'https://newsinitiative.withgoogle.com/hownewsworks/static/images/products-googlesearch.png'}}
          />
        </View>

        <View style={styles.sign_up}>
          <Text style={styles.text_sign_up}>
            Don't have an account?
          </Text>
          <TouchableOpacity
            onPress={onPressHandler}
            style={styles.sign_up_button}
          >
            <Text style={[styles.text_sign_up, {fontWeight: '700', color: '#1a1add'}]}> Sign up here!</Text>
          </TouchableOpacity>
        </View>
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
      marginTop: 80,
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
    forgot: {
      marginTop: 10,
      marginLeft: 235,
      marginRight: 35,
    },
    forgot_text: {
      color: '#e183bb',
      fontWeight: '700',
      fontSize: 15,
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

    other_login: {
      marginTop: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    other_text_login: {
      fontSize: 23,
      color: '#000000',
      fontWeight: '700',
    },
    fb_gg_logo: {
      width: 140,
      marginTop: 20,
      flexDirection: 'row',
      // backgroundColor: '#808080',
      justifyContent: 'space-between'
    },
    fb_gg: {
      height: 60,
      width: 60,
    },
  
    sign_up: {
      marginTop: 20,
      flexDirection: 'row',
    },
    sign_up_button: {
      // backgroundColor: '#000000',
    },
    text_sign_up: {
      fontSize: 20,
      color: '#000000',
    }
  })

export default Login