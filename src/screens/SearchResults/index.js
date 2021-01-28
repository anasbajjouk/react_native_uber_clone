import React from 'react'
import { Pressable, Text, View } from 'react-native'
import HomeMap from '../../components/HomeMap'
import UberTypes from '../../components/UberTypes'
import styles from './styles'

const SearchResults = () => {
  const confirm = () => console.warn('Comfirmed')

  return (
    <View>
      <HomeMap />
      <View>
        <UberTypes />
        <Pressable onPress={confirm} style={styles.confirmButton}>
          <Text style={styles.confirmText}>Confirm Uber</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default SearchResults
