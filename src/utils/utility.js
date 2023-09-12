// const redColor = '#b63439';
// const pageName = 'Ho gya';

import {StyleSheet} from 'react-native';

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
  // Add more utility styles as needed
});

export const PageName = () => {
  const pageName = 'Ho hayyy';
  return pageName;
};
