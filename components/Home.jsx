import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.home}>
      <Text style={styles.text_home}>Home Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text_home: {
    fontSize: 20,
    color: '#000000'
  },
})

export default Home