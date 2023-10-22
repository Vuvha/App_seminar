// npm install @react-navigation/native
// npm install react-native-screens react-native-safe-area-context
// npm install @react-navigation/stack
// npm install react-native-gesture-handler
// npm install @react-native-masked-view/masked-view
// npm install @react-navigation/material-bottom-tabs react-native-paper react-native-vector-icons

import React from 'react'
import MainNavigator from './components/MainNavigator'
import { AuthProvider } from './components/AuthContext'


const App = () => {
  return (
    <AuthProvider>
      <MainNavigator/>
    </AuthProvider>
  )
}

export default App;