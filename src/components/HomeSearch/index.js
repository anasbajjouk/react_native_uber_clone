import React from 'react'
import { Text, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import styles from './styles'

const HomeSearch = () => {
  return (
    <View>
      <View style={styles.inputBox}>
        <Text style={styles.inputText}>Where To?</Text>
        <View style={styles.timeContainer}>
          <AntDesign name="clockcircle" size={16} color="#535353" />
          <Text>Now</Text>
          <MaterialIcons name="keyboard-arrow-down" size={16} color="black" />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <AntDesign name="clockcircle" size={20} color="#fff" />
        </View>
        <Text style={styles.destinationText}>That Place!</Text>
      </View>

      <View style={styles.row}>
        <View style={[styles.iconContainer, { backgroundColor: '#218cff' }]}>
          <AntDesign name="home" size={20} color="#fff" />
        </View>
        <Text style={styles.destinationText}>Home</Text>
      </View>
    </View>
  )
}

export default HomeSearch
