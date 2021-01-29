import React from 'react'
import { Platform } from 'react-native'
import { Text, View } from 'react-native'
import types from '../../assets/data/types'
import UberTypeRow from '../UberTypeRow'
import styles from './styles'

const UberTypes = ({ dimension, dimensionPerScreen = 2.4, navbarHeight }) => {
  const OS = Platform.OS
 
  
  return (
    <View
      style={[
        styles.container,
        // height: dimension.height - navbarHeight
        {
          height:
            OS === 'android'
              ? dimension.height / navbarHeight - navbarHeight
              : dimension.height / dimensionPerScreen,
        },
      ]}
    >
      {types.map((type) => (
        <UberTypeRow types={type} />
      ))}
    </View>
  )
}

export default UberTypes
