import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

const CovidMsg = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necessary</Text>
      <Text style={styles.text}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
        optio accusantium quidem aliquid beatae quae quam? Dolorum sint expedita
        cupiditate quidem qui, aut obcaecati vero, magni ullam vel voluptatum
        quis.
      </Text>
      <Text style={styles.learnMore}>Learn More.</Text>
    </View>
  )
}

export default CovidMsg
