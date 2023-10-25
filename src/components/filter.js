import React, {useRef, useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import LocationSvg from '../assets/SVGIcon/Location.svg';
import ColorSvg from '../assets/SVGIcon/Color.svg';
import PriceSvg from '../assets/SVGIcon/Price.svg';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RangeSlider from './rangeSlider';
import SelectCity from '../screens/appScreens/screensForPost/selectCity';

const FilterHeader = props => {
  return (
    <View style={styles.headerview}>
      <TouchableOpacity onPress={() => props.navigation.navigation.goBack()}>
        <Icon
          name="arrowleft"
          size={30}
          color="#fff"
          style={styles.backarrow}
        />
      </TouchableOpacity>
      <Text style={styles.headercontent}>Refine Your Search</Text>
    </View>
  );
};
const Filter = navigation => {
  const colorsList = [
    {
      imag: require('../assets/images/silver.png'),
      name: 'White',
    },
    {
      imag: require('../assets/images/black.png'),
      name: 'Black',
    },
    {
      imag: require('../assets/images/grey.png'),
      name: 'Gray',
    },
    {
      imag: require('../assets/images/blue.png'),
      name: 'Blue',
    },
    {
      imag: require('../assets/images/green.png'),
      name: 'Green',
    },
    {
      imag: require('../assets/images/red.png'),
      name: 'Red',
    },
    {
      imag: require('../assets/images/gold.png'),
      name: 'Golden',
    },
    {
      imag: require('../assets/images/maroon.png'),
      name: 'Cream',
    },
    {
      imag: require('../assets/images/brown.png'),
      name: 'Brown',
    },

    {
      imag: require('../assets/images/orange.png'),
      name: 'Orange',
    },
  ];
  const [checked, setChecked] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  //   const handleColorPress = index => {
  //     setSelectedIndex(index);
  //   };
  const [selectedIndices, setSelectedIndices] = useState([]);

  const handleColorPress = index => {
    // Check if the index is already selected
    if (selectedIndices.includes(index)) {
      // If selected, remove it from the selectedIndices array
      setSelectedIndices(selectedIndices.filter(item => item !== index));
    } else {
      // If not selected, add it to the selectedIndices array
      setSelectedIndices([...selectedIndices, index]);
    }
  };

  // Color List Code end

  const [tagLable, setTagLable] = useState([]);
  const [newItem, setNewItem] = useState(props.route.params.lable); // State to hold the new item

  const addItemToList = () => {
    if (newItem) {
      // Make sure newItem is not empty
      setTagLable([...tagLable, newItem]); // Add the new item to the list
      setNewItem(''); // Clear the input field
    }
  };

  return (
    <View flex={1} backgroundColor={'#fff'}>
      <FilterHeader navigation={props.navigation} />
      <View>
        {items.map((item, index) => (
          <SelectedTags Lable={tagLable} />
        ))}
      </View>
      <ScrollView>
        <View style={styles.horizontolLine} />
        <SelectCity />
        <View style={styles.horizontolLine2} />

        <TouchableOpacity style={styles.infoContainer}>
          <View style={styles.iconBack}>
            <LocationSvg height={30} width={240} />
          </View>
          <View flex={1} paddingStart={13}>
            <Text style={styles.text1}>Categery</Text>
          </View>
          <MaterialIcons
            name={'keyboard-arrow-down'}
            size={30}
            color={'#808080'}
          />
        </TouchableOpacity>
        <View style={styles.horizontolLine2} />

        <View style={styles.RangePickerContainer}>
          <View style={styles.AgeContainer}>
            <View style={styles.iconBack}>
              <LocationSvg height={30} width={240} />
            </View>
            <Text style={styles.textPrice}>Age</Text>
          </View>
          <RangeSlider />
        </View>
        <View style={styles.horizontolLine2} />

        <View style={styles.RangePickerContainer}>
          <View style={styles.priceContainer}>
            <View style={styles.iconBack}>
              <PriceSvg height={30} width={240} />
            </View>
            <Text style={styles.textPrice}>Price Range (PKR)</Text>
          </View>
          <RangeSlider />
        </View>
        <View style={styles.horizontolLine2} />

        <TouchableOpacity style={styles.infoContainer}>
          <View style={styles.iconBack}>
            <ColorSvg height={30} width={240} />
          </View>
          <View flex={1} paddingStart={13}>
            <Text style={styles.text1}>color</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.flatlist}>
          {/* {colorsList.map((item, index) => {
            return (
              <TouchableOpacity
                style={styles2().colornname}
                onPress={() => {
                  setNewItem(item.name);
                  addItemToList();
                  handleColorPress(index);
                }}>
                <View style={styles2().colorandnameview}>
                  <Image
                    source={item.imag}
                    style={styles2(selectedIndices.includes(index)).colorimage}
                  />
                  <Text style={styles2().namesofcolors}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            );
          })} */}
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={colorsList}
            horizontal={true}
            renderItem={({item, index}) => (
              <TouchableOpacity
                style={styles().colornname}
                onPress={
                  (() => handleColorPress(index),
                  setNewItem(item.name),
                  addItemToList)
                }>
                <View style={styles().colorandnameview}>
                  <Image
                    source={item.imag}
                    style={styles(selectedIndices.includes(index)).colorimage}
                  />
                  <Text style={styles().namesofcolors}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </ScrollView>
      <View style={styles.buttonsview}>
        <TouchableOpacity style={[styles.appButtonContainer]}>
          <Text style={styles.appButtonText}>Reset All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.appButton2Container]}>
          <Text style={styles.appButton2Text}>Apply Filters</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles2 = checked =>
  StyleSheet.create({
    colorimage: {
      width: 45,
      height: 45,
      borderRadius: 30,
      marginLeft: 22,

      borderWidth: checked ? 2 : 0,
      borderColor: checked ? '#b63439' : '',
    },
    colorandnameview: {
      alignItems: 'center',
    },
    namesofcolors: {
      alignItems: 'center',
      marginLeft: 20,
      fontSize: 12,
    },
    colornname: {
      // Add other styles for the color item
    },
  });
const styles = StyleSheet.create({
  headerview: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#b63439',
  },
  backarrow: {
    marginLeft: 13,
  },
  headercontent: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  horizontolLine2: {
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    marginLeft: 50,
    marginRight: 15,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    paddingVertical: 20,
  },
  iconBack: {
    backgroundColor: '#eee',
    borderRadius: 20,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    backgroundColor: '#fff',
    borderTopColor: '#eee',
    borderTopWidth: 1,
  },
  appButtonContainer: {
    backgroundColor: 'white',
    height: 40,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
  },
  appButton2Container: {
    backgroundColor: '#b63439',
    height: 40,
    width: 210,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
  },
  appButtonText: {
    color: 'black',
  },
  appButton2Text: {
    color: 'white',
  },
  horizontolLine: {
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    marginTop: 15,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  AgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    paddingStart: 13,
  },
  text1: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  RangePickerContainer: {
    flexDirection: 'column',
    marginHorizontal: 10,
    paddingVertical: 20,
  },
  colorimage: {
    width: 45,
    height: 45,
    borderRadius: 30,
    marginLeft: 22,
  },
  colorandnameview: {
    alignItems: 'center',
  },
  flatlist: {
    marginStart: 40,
  },
  namesofcolors: {
    alignItems: 'center',
    marginLeft: 20,
    fontSize: 12,
  },
});
export default Filter;
