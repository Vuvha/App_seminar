// import { View, Text } from 'react-native'
import MainBottom from './MainBottom'
import { useAuth } from './AuthContext';
import React from 'react'
import AuthStack from './AuthStack';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
const MainNavigator = () => {
  
    const {isAuthenticated} = useAuth()

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{header: () => null}}
      >
      {
        isAuthenticated ? (
          <Stack.Screen 
            name="MainBottom"
            component={MainBottom}
          />
        ) : (
          <Stack.Screen 
            name="AuthStack"
            component={AuthStack}
          />
        )
      }
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator