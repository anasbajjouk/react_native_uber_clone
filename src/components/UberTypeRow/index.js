import React from 'react'
import { Image, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './styles'

const UberTypeRow = ({ types }) => {
  const { type, price, duration } = types || {}

  const getImageName = () => {
    if (type === 'UberX') return require(`../../assets/images/UberX.jpeg`)
    if (type === 'Comfort') return require(`../../assets/images/Comfort.jpeg`)
    if (type === 'UberXL') return require(`../../assets/images/UberXL.jpeg`)
  }
  return (
    <View style={styles.container}>
      <Image source={getImageName()} style={styles.image} />
      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type} <Ionicons name="person" size={16} color="#535353" /> 3
        </Text>
        <Text style={styles.time}>{duration} mins drop-off</Text>
      </View>

      <View style={styles.rightContainer}>
        <Ionicons name="pricetag" size={18} color="#42d742" />
        <Text style={styles.price}>est. ${price}</Text>
      </View>
    </View>
  )
}

export default UberTypeRow
