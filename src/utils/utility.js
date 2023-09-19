// const redColor = '#b63439';
// const pageName = 'Ho gya';

import {Dimensions, StyleSheet} from 'react-native';
const screenHeight = Dimensions.get('window').height;
export const utilityStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
  buttonNext: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingTop: 2,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    marginTop: 150,
  },
  headerBackGround: {
    backgroundColor: '#b63439',
  },
  // Add more utility styles as needed
});
