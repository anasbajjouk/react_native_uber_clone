import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  inputBox: {
    backgroundColor: '#e6e6e6',
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  inputText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#6e6e6e',
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 50,
    width: 100,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#bdbdbd',
  },
  iconContainer: {
    backgroundColor: '#b3b3b3',
    padding: 10,
    borderRadius: 25,
  },
  destinationText: {
    fontWeight: '500',
    fontSize: 16,
    marginLeft: 10,
  },
})

export default styles
