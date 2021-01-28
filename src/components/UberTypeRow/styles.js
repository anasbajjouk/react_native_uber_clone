import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    resizeMode: 'contain',
    height: 50,
    width: 50,
    borderRadius: 100,
  },
  middleContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 5,
  },
  rightContainer: {
    width: 100,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  type: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  time: {
    color: '#5d5d5d',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 5,
  },
})

export default styles
