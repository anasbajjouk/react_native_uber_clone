import React from 'react'
import { View } from 'react-native'
import CovidMsg from '../../components/CovidMsg'
import HomeMap from '../../components/HomeMap'
import HomeSearch from '../../components/HomeSearch'

const HomeScreen = () => {
  return (
    <View>
      <HomeMap />
      <CovidMsg />
      <HomeSearch />
    </View>
  )
}

export default HomeScreen
