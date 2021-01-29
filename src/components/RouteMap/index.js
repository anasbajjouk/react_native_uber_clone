import React from 'react'
import { Dimensions, FlatList, Image } from 'react-native'
import { Text, View } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions'
import cars from '../../assets/data/cars'

const GOOGLE_MAPS_APIKEY = 'AIzaSyCbGck8kWmsUEcHqAm7t62J_5K9RwEBv28'

const RouteMap = ({ dimensionPerScreen = 2 }) => {
  const dimension = useWindowDimensions()

  const origin = { latitude: 28.461999, longitude: -16.263045 }
  const destination = { latitude: 28.453127, longitude: -16.269045 }

  return (
    <View>
      <MapView
        style={{
          height: dimension.height / dimensionPerScreen,
        }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 28.450627,
          longitude: -16.263045,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0121,
        }}
      >
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={5}
          strokeColor={'#1b1919'}
        />
        <Marker coordinate={origin} title={'Origin'} />

        <Marker coordinate={destination} title={'Destination'} />
      </MapView>
    </View>
  )
}

export default RouteMap
