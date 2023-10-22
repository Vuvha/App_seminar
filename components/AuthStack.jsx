// import { View, Text } from 'react-native'
import MainBottom from './MainBottom'
import Login from './Login'
import Signup from './Signup'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();
const AuthStack = () => {
  return (
      <Stack.Navigator
        screenOptions={{header: () => null}}
      >
        <Stack.Screen 
          name="Login"
          component={Login}
        />
        <Stack.Screen 
          name="Signup"
          component={Signup}
        />
      </Stack.Navigator>
  )
}

export default AuthStack