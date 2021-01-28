import React from 'react'
import { Text, View } from 'react-native'
import types from '../../assets/data/types'
import UberTypeRow from '../UberTypeRow'
import styles from './styles'

const UberTypes = () => {
  return (
    <View style={styles}>
      {types.map((type) => (
        <UberTypeRow types={type} />
      ))}
    </View>
  )
}

export default UberTypes
