import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Home from './Home'
import Profile from './Profile'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const MainBottom = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator  
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home'
            size = focused ? 30 : 25
            color = focused ? '#4190f4' : '#808080'
          } else if (route.name === 'Categories') {
              iconName = 'bars'
              size = focused ? 30 : 25
              color = focused ? '#4190f4' : '#808080'
          } else if (route.name === 'Favourites') {
              iconName = 'heart'
              size = focused ? 30 : 25
              color = focused ? '#4190f4' : '#808080'
          } else if (route.name === 'Profile') {
              iconName = 'user'
              size = focused ? 30 : 25
              color = focused ? '#4190f4' : '#808080'
          }
          return (
            <Icon 
              name={iconName}
              color={color}
              size={size}
            />
          )
        },
        tabBarLabelStyle: {fontSize: 15}
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{header: () => null}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{header: () => null}}
      />
    </Tab.Navigator>
  )
}

export default MainBottom