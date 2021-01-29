import React from 'react'
import { Dimensions, FlatList, Image } from 'react-native'
import { Text, View } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions'
import cars from '../../assets/data/cars'

const HomeMap = ({ dimensionPerScreen = 2 }) => {
  const dimension = useWindowDimensions()

  const getImageName = (type) => {
    if (type === 'UberX') return require('../../assets/images/top-UberX.png')
    if (type === 'Comfort')
      return require('../../assets/images/top-Comfort.png')
    if (type === 'UberXL') return require('../../assets/images/top-UberXL.png')
  }

  console.log(getImageName('UberX'))
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
        {cars.map((car) => {
          return (
            <Marker
              key={car.id}
              coordinate={{
                latitude: car.latitude,
                longitude: car.longitude,
              }}
            >
              <Image
                source={getImageName(car?.type)}
                style={{ width: 50, height: 50, resizeMode: 'contain' }}
              />
            </Marker>
          )
        })}
      </MapView>
    </View>
  )
}

export default HomeMap
