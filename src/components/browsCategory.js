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
import SellNowModal from './sellNowModal';

const screenWidth = Dimensions.get('window').width;
const BrowsCategory = props => {
  const [show, setShow] = useState(false);
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
  ]);
  const handleClick = () => {
    // Call a callback function passed as a prop to send the event to ComponentB
    // this.props.onButtonClick();
    //  console.log('brows>>>', props);
  };
  return (
    <View>
      <FlatList
        style={styles.FlatlistStyles}
        data={categoryList}
        scrollEnabled={false}
        numColumns={3}
        renderItem={({item, index}) => (
          <View style={styles.mainBox}>
            <TouchableOpacity disabled={false} style={styles.categoryMainBox}>
              <Image style={styles.categoryImg} source={item.image} />
              <Text style={styles.titleTxt}>{item.title}</Text>
            </TouchableOpacity>
          </View>
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
  mainBox: {
    width: '35%',
    justifyContent: 'space-between',
    marginStart: 5,
  },
});

export default BrowsCategory;
