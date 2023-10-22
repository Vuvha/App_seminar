import { View, Text, Modal, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const ModalComponent = ({visible, onRequestClose, onPressFunction}) => {
  return (
    <Modal
        hardwareAccelerated
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onRequestClose}
    >
        <View style={styles.centered_modal}>
            <View style={styles.showModal}>
                <Text style={styles.text_modal}>Incorrect email or password.</Text>
                <View style={styles.accept}>
                    <Pressable
                        android_ripple={{color: '#d6d6d6'}}
                        style={styles.accept_btn}
                        onPress={onPressFunction}
                    >
                    <Text style={styles.text_accept}>OK</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    </Modal>

  )
}
const styles = StyleSheet.create({
    showModal: {
      width: 350,
      height: 180,
      alignItems: 'center',
      backgroundColor: '#ffffff',
      borderWidth: 1,
      borderColor: '#000000',
      borderRadius: 5,
    },
    centered_modal: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#00000099',
    },
    text_modal: {
      fontSize: 20,
      color: '#000000',
      fontWeight: '600',
      marginTop: 25,
    },
    accept_btn:{
      marginTop: 60,
      marginLeft: 250,
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    text_accept: {
      fontSize: 20,
      color: '#5596b8',
      fontWeight: '600',
    },
})  

export default ModalComponent