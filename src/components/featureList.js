import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const appFeatureList = [
  {
    id: '1',
    title: 'Title',
    lable: 'PakWild',
    image: require('../assets/images/markhor.png'),
  },
  {
    id: '2',
    title: 'Text1',
    lable: 'PakWild',
    image: require('../assets/images/markhor.png'),
  },
  {
    id: '3',
    title: 'Text1',
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
const FeatureList = props => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        style={styles.FlatlistStyles}
        data={appFeatureList}
        horizontal={false}
        numColumns={2}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.featuredListContainer}>
            <View style={{flexDirection: 'column'}}>
              <Image style={styles.featureImg} source={item.image} />
              <Text style={styles.lblTxt}>{item.lable}</Text>
              <View style={styles.titleContainer}>
                <Text numberOfLines={2} style={styles.titleTxt}>
                  {item.title}
                </Text>
                <Ionicons
                  style={styles.btnNext}
                  name="chevron-forward-sharp"
                  size={20}
                />
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={this._keyExtractor}
      />
    </View>
  );
};
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  FlatlistStyles: {
    width: '100%',
    margin: (screenWidth * 0.055) / 1.9,
  },
  featuredListContainer: {
    height: (screenHeight * 0.45) / 2, //170,
    width: screenWidth * 0.45, //'45%',
    borderRadius: 15,
    backgroundColor: '#fff',
    margin: 5,
    elevation: 5,
    borderWidth: 2,
    borderColor: '#eee',
  },
  featureImg: {
    width: '100%',
    height: (screenHeight * 0.3) / 2.5,
    resizeMode: 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  lblTxt: {
    color: '#b63439',
    paddingStart: 10,
    marginTop: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    paddingEnd: 10,
    marginBottom: 10,
  },
  titleTxt: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
    paddingStart: 10,
    marginEnd: 10,
    marginTop: 5,
    flex: 1,
  },
  btnNext: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
export default FeatureList;
