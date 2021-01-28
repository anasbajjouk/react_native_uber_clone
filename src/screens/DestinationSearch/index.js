import React, { useEffect, useState } from 'react'
import { SafeAreaView, TextInput, View } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import styles from './styles'

const DestinationSearch = () => {
  const [originPlace, setOriginPlace] = useState('')
  const [destinationPlace, setDestinationPlace] = useState('')

  useEffect(() => {
    if (originPlace && destinationPlace) {
      console.log('Redirect to results')
    }
  }, [destinationPlace, originPlace])
  
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="From"
          fetchDetails
          styles={{
            textInput: styles.textInput,
            container: {
              // backgroundColor: 'red',
              // position: 'relative',
              // bottom: 350,
            },
          }}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            setOriginPlace({ data, details })
          }}
          query={{
            key: 'AIzaSyCbGck8kWmsUEcHqAm7t62J_5K9RwEBv28',
            language: 'en',
          }}
        />
        <GooglePlacesAutocomplete
          placeholder="Where To?"
          fetchDetails
          styles={{
            textInput: styles.textInput,
            container: {
              // backgroundColor: 'red',
              // position: 'relative',
              // bottom: 350,
            },
          }}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            setDestinationPlace({ data, details })
          }}
          query={{
            key: 'AIzaSyCbGck8kWmsUEcHqAm7t62J_5K9RwEBv28',
            language: 'en',
          }}
        />
      </View>
    </SafeAreaView>
  )
}

export default DestinationSearch
