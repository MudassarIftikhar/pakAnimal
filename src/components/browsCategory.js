import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Text} from 'react-native-paper';

const screenWidth = Dimensions.get('window').width;
const BrowsCategory = () => {
  const [categoryList, setCategoryList] = useState([
    {
      id: '1',
      title: 'Pet',
      lable: 'PakWild',
      image: require('../assets/images/goat.png'),
    },
    {
      id: '2',
      title: 'Farm Animal',
      lable: 'PakWild',
      image: require('../assets/images/goat.png'),
    },
    {
      id: '3',
      title: 'Accessories',
      lable: 'PakWild',
      image: require('../assets/images/goat.png'),
    },
    {
      id: '4',
      title: 'Page1',
      lable: 'PakWild',
      image: require('../assets/images/goat.png'),
    },
    {
      id: '5',
      title: 'Pet',
      lable: 'PakWild',
      image: require('../assets/images/goat.png'),
    },
    {
      id: '6',
      title: 'Farm Animal',
      lable: 'PakWild',
      image: require('../assets/images/goat.png'),
    },
    {
      id: '7',
      title: 'Accessories',
      lable: 'PakWild',
      image: require('../assets/images/goat.png'),
    },
    {
      id: '8',
      title: 'Page1',
      lable: 'PakWild',
      image: require('../assets/images/goat.png'),
    },
  ]);
  return (
    <View>
      <FlatList
        style={styles.FlatlistStyles}
        data={categoryList}
        numColumns={4}
        renderItem={({item, index}) => (
          <TouchableOpacity disabled={true} style={styles.categoryMainBox}>
            <Image style={styles.categoryImg} source={item.image} />
            <Text style={styles.titleTxt}>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={this._keyExtractor}
      />
    </View>
  );
};
const screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  FlatlistStyles: {
    width: '100%',
    marginTop: 20,
  },
  categoryMainBox: {
    flexDirection: 'column',
    width: 90,
    height: 120,
    borderRadius: 10,
    margin: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  categoryImg: {
    width: '50%',
    height: '50%', //(screenHeight * 85) / 96,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  titleTxt: {
    textAlign: 'center',
    numberOfLines: 2,
    marginStart: 6,
    marginEnd: 6,
  },
  centerAlign: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
//   return (
//     <View style={styles.outerBox}>
//       <Image
//         style={{
//           height: 80,
//           width: 80,
//           alignItems: 'center',
//           justifyContent: 'center',
//           alignSelf: 'center',
//         }}
//         source={require('../assets/images/MarkhorHunts.png')}
//       />
//       <Text style={styles.titleTxt}>Pet</Text>
//     </View>
//   );

// };
// const styles = StyleSheet.create({
//   outerBox: {
//     borderRadius: 10,
//     flexDirection: 'column',
//   },
//   titleTxt: {
//     textAlign: 'center',
//   },
// });
export default BrowsCategory;
