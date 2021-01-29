import React from 'react'
import { Pressable, Text, View, StatusBar, Dimensions } from 'react-native'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions'
import HomeMap from '../../components/HomeMap'
import RouteMap from '../../components/RouteMap'
import UberTypes from '../../components/UberTypes'
import styles from './styles'

const SearchResults = () => {
  const dimension = useWindowDimensions()

  const screenHeight = Dimensions.get('screen').height
  const windowHeight = dimension.height
  const navbarHeight = screenHeight - windowHeight + StatusBar.currentHeight

  const confirm = () => console.warn('Comfirmed')


  return (
    <View>
      {/* <HomeMap dimension={dimension} /> */}
      <RouteMap dimension={dimension} />
      <View>
        <UberTypes dimension={dimension} navbarHeight={navbarHeight} />
        <Pressable onPress={confirm} style={styles.confirmButton}>
          <Text style={styles.confirmText}>Confirm Uber</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default SearchResults
