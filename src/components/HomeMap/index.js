import React from 'react'
import { Dimensions } from 'react-native'
import { Text, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

const HomeMap = ({ dimension, dimensionPerScreen = 2 }) => {
  return (
    <View>
      <MapView
        style={{
          height: dimension.height / dimensionPerScreen,
        }}
        // provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  )
}

export default HomeMap
