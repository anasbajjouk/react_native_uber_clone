import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import DestinationSearch from './src/screens/DestinationSearch'
import HomeScreen from './src/screens/HomeScreen'
import SearchResults from './src/screens/SearchResults'

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      {/* <HomeScreen /> */}
      {/* <DestinationSearch /> */}
      <SearchResults />
    </>
  )
}

export default App
