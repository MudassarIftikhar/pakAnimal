import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const tabButton = [
  {
    id: '1',
    name: 'Pets',
  },
  {
    id: '2',
    name: 'Farm Animal',
  },
  {
    id: '3',
    name: 'Accessories',
  },
];
const HomeTabButton = props => {
  return (
    <View style={styles.tabBtnContainer}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {tabButton.map((item, index) => (
          <TouchableOpacity style={styles.btnContainer}>
            <Text style={styles.tabBtnTxt}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBtnContainer: {
    flexDirection: 'row',
    height: 60,
    width: '100%',
    alignSelf: 'flex-start',
    alignItems: 'center',
    right: 0,
    marginStart: 5,
  },
  btnContainer: {
    backgroundColor: '#eee',
    height: 30,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    paddingStart: 5,
    paddingEnd: 5,
    margin: 10,
  },
  tabBtnTxt: {
    color: '#000',
    fontSize: 17,
    padding: 4,
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexGrow: 1,
    marginStart: 4,
    marginEnd: 4,
  },
});
export default HomeTabButton;
