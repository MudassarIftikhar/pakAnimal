import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Cross from 'react-native-vector-icons/Feather';
const categoryList = [
  {
    id: '1',
    title: 'Pet',
    lable: 'PakWild',
    image: require('../assets/images/markhor.png'),
  },
  {
    id: '2',
    title: 'Farm Animal',
    lable: 'PakWild',
    image: require('../assets/images/markhor.png'),
  },
  {
    id: '3',
    title: 'Accessories',
    lable: 'PakWild',
    image: require('../assets/images/markhor.png'),
  },
  {
    id: '4',
    title: 'Text1',
    lable: 'PakWild',
    image: require('../assets/images/markhor.png'),
  },
];
const Categories = props => {
  return (
    <FlatList
      style={styles.FlatlistStyles}
      data={categoryList}
      horizontal={false}
      numColumns={4}
      renderItem={({item}) => (
        <TouchableOpacity style={styles.categoryMainBox}>
          <View style={{flexDirection: 'column'}}>
            <Image style={styles.categoryImg} source={item.image} />
            <Text numberOfLines={2} style={styles.titleTxt}>
              {item.title}
            </Text>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={this._keyExtractor}
    />
  );
};
const screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  categoryMainBox: {
    width: 40,
    height: 70,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  categoryImg: {
    width: '100%',
    height: (screenHeight * 85) / 96,
  },
});
export default Categories;
