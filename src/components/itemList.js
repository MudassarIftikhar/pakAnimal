import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';

const itemList = [
  {
    id: '1',
    title: 'Text1',
    price: '5000',
    city: 'Faisalabad',
    discription: 'Text text text',
    image: require('../assets/images/MarkhorHunts.png'),
  },
  {
    id: '2',
    title: 'Text2',
    price: '10000',
    city: 'Lahore',
    discription: 'Text text text',

    image: require('../assets/images/horse.png'),
  },
];

const ItemList = props => {
  console.log('Props', props);
  return (
    <ScrollView
      horizontal={true}
      marginStart={15}
      showsHorizontalScrollIndicator={false}>
      {itemList.map((item, index) => (
        <TouchableOpacity
          style={styles.itemListContaier}
          onPress={() =>
            props.navigation.navigation.navigate('PostViewScreen', {
              postTitle: item.title,
              postPrice: item.price,
              postCity: item.city,
              postDiscription: item.discription,
              postImage: item.image,
            })
          }>
          <View style={{flexDirection: 'column'}}>
            <Image style={styles.itemImage} source={item.image} />
            <View style={{marginStart: 10}}>
              <Text style={styles.itemTitleTxt}>{item.title}</Text>
              <Text style={styles.itemCurrencyTxt}>
                PKR <Text style={styles.itemPriceTxt}>{item.price}</Text>
              </Text>
              <Text style={styles.itemCityTxt}>{item.city}</Text>
              <Text marginBottom={10} style={styles.itemCityTxt}>
                {item.discription}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  itemListContaier: {
    width: 200,
    borderRadius: 15,
    backgroundColor: '#fff',
    margin: 8,
    flexGrow: 1,
    elevation: 5,
  },
  itemImage: {
    width: '100%',
    height: 110,
    marginTop: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  itemTitleTxt: {
    fontSize: 17,
    color: '#000',
    fontWeight: '500',
    marginTop: 10,
  },
  itemCurrencyTxt: {
    fontSize: 20,
    color: '#000',
    marginTop: 5,
  },
  itemPriceTxt: {
    fontWeight: '600',
  },
  itemCityTxt: {
    fontSize: 14,
    marginTop: 5,
  },
});
export default ItemList;
