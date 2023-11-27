import {useFocusEffect} from '@react-navigation/native';
import React, {useRef, useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  FlatList,
  Image,
  ScrollView,
  BackHandler,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RBSheet from 'react-native-raw-bottom-sheet';
import RadioButton from 'radio-buttons-react-native';
import PriceSvg from '../assets/SVGIcon/Price.svg';
import RangeSlider from '../components/rangeSlider';
import LocationSvg from '../assets/SVGIcon/Location.svg';
import ColorBottomSheet, {
  colorBottomSheet,
} from '../components/colorBottomSheet';

const BrowsePostHeader = props => {
  return (
    <View style={styles.headerview}>
      <TouchableOpacity>
        <Icon
          name="arrowleft"
          size={30}
          color="#fff"
          style={styles.backarrow}
          onPress={() => props.navigation.navigation.goBack()}
        />
      </TouchableOpacity>
      <View style={styles.searchBarContainer}>
        <AntDesign name="search1" size={20} color="black" />
        <TextInput
          style={styles.txtInput}
          placeholderTextColor="black"
          placeholder="Search animal"
        />
      </View>
      <AntDesign name="heart" size={30} color={'white'} />
    </View>
  );
};
const BrowsePost = (props, {navigation}) => {
  const [selectedFilter, setSelectedFilter] = useState('');
  const [selectsize, setselectsize] = useState('');
  // console.log('BrowsPost>>>>', props.navigation.lable);
  const FiltersList = [
    {
      id: 3,
      title: 'price',
    },
    {
      id: 4,
      title: 'location',
    },
    {
      id: 5,
      title: 'age',
    },
    {
      id: 6,
      title: 'color',
    },
    // {
    //   id: 8,
    //   title: 'disability',
    // },
  ];
  const animalsdata = [
    {
      id: 1,
      src: require('../assets/images/cat.png'),
      title: 'Persion cat',
      price: 'PKR 50000',
      age: '1 Year',
      location: 'Faisalabad',
    },
    {
      id: 2,
      src: require('../assets/images/cat.png'),
      title: 'Persion cat',
      price: 'PKR 50000',
      age: '1 Year',
      location: 'Faisalabad',
    },
  ];
  const data = [
    {
      label: 'Date updated (New to Old)',
    },
    {
      label: 'Date updated (Old to New)',
    },
    {
      label: 'Price high to Low',
    },
    {
      label: 'Price Low to High',
    },
    {
      label: 'Manufectured year (New to Old)',
    },
    {
      label: 'Manufectured year (Old to New)',
    },
    {
      label: 'Milage (Hight to Low)',
    },
    {
      label: 'Milage (Low to High)',
    },
  ];
  const refRBSheet = useRef();
  const [data1, setData] = useState([]);
  const [selectedIndices, setSelectedIndices] = useState([]);
  const getApiData = async () => {
    const url = 'http://10.0.2.2:3000/cities';
    let result = await fetch(url);
    result = await result.json();
    // console.log('City>>>>', result);
    setData(result);
  };

  useEffect(() => {
    getApiData();
  }, []);
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.goBack();
        return true;
      };

      // Add Event Listener for hardwareBackPress
      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => {
        // Once the Screen gets blur Remove Event Listener
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      };
    }, []),
  );

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
  return (
    <SafeAreaView>
      <BrowsePostHeader navigation={props.navigation} />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 5,
            }}
            onPress={() => {
              setSelectedFilter('sort');
              refRBSheet.current.open();
            }}>
            <MaterialIcons name="sort" size={25} />
            <Text style={styles.sort}>Sort</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 5,
            }}
            onPress={() =>
              props.navigation.navigation.navigate('Filter', {
                lable: props.navigation.lable,
              })
            }>
            <MaterialIcons name="sort" size={25} />
            <Text style={styles.filter}>filter</Text>
          </TouchableOpacity>

          {FiltersList.map(item => (
            <TouchableOpacity
              style={styles.txtContainer}
              onPress={() => {
                setSelectedFilter(item.title);
                refRBSheet.current.open();
              }}>
              <Text style={styles.filterlist}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View>
        <View style={styles.savesearchview}>
          <Text style={styles.resultcounting}>47202 results</Text>
          <AntDesign name="hearto" size={25} color={'#b63439'} />
          <Text style={styles.savesearch}>Save Search</Text>
        </View>
      </View>
      <View>
        <FlatList
          data={animalsdata}
          renderItem={({item}) => (
            <View style={styles.maincardview}>
              <Image source={item.src} style={styles.image} />
              <MaterialIcons
                name="stars"
                size={35}
                color="#b63439"
                style={styles.staricon}
              />
              <View>
                <Text style={styles.name}>{item.title}</Text>
                <Text style={styles.price}>{item.price}</Text>
                <View style={styles.agelocationview}>
                  <Text style={styles.age}>{item.age}</Text>
                  <EvilIcons
                    name="location"
                    size={20}
                    style={styles.locationicon}
                  />
                  <Text style={styles.location}>{item.location}</Text>
                </View>
              </View>
              <AntDesign
                name="heart"
                size={20}
                color={'#b63439'}
                style={styles.hearticon}
              />
            </View>
          )}
        />
      </View>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        customStyles={{
          container: {
            height: selectsize,
          },
          draggableIcon: {
            backgroundColor: 'white',
          },
        }}>
        {selectedFilter === 'sort' && (
          <>
            <View style={styles.topview}>
              <Text style={styles.sortby}>Sort by</Text>
              <TouchableOpacity onPress={() => refRBSheet.current.close()}>
                <Text style={styles.cancel}>cancel</Text>
              </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <RadioButton data={data} style={{padding: 20}} />
            </ScrollView>
          </>
        )}
        {selectedFilter === 'price' && (
          <>
            <View style={styles.RangePickerContainer}>
              <View style={styles.priceContainer}>
                <View style={styles.iconBack}>
                  <PriceSvg height={30} width={240} />
                </View>
                <Text style={styles.textPrice}>Price Range (PKR)</Text>
              </View>
              <RangeSlider />

              <TouchableOpacity style={styles.appButton2Container}>
                <Text style={styles.appButton2Text}>Apply Filters</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
        {selectedFilter === 'location' && (
          <>
            <View style={styles.main}>
              <TouchableOpacity>
                <Text style={styles.text1}>Select City</Text>
              </TouchableOpacity>
              <View style={styles.horizontolLine} />
              <View style={styles.searchBox}>
                <AntDesign name={'search1'} color={'#808080'} size={20} />
                <TextInput
                  marginStart={10}
                  fontSize={15}
                  placeholder="Type to refine search"
                />
              </View>
              <ScrollView style={{marginTop: 10, marginBottom: 150}}>
                {/* <View style={}> */}
                {data1.length > 0 ? (
                  data1.map((item, index) => (
                    <TouchableOpacity style={styles.innerContainer}>
                      <Text style={styles.item}>{item}</Text>
                      <View style={styles.horizontolLine} />
                    </TouchableOpacity>
                  ))
                ) : (
                  <Text
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    Network Error!
                  </Text>
                )}
                {/* </View> */}
              </ScrollView>
            </View>
          </>
        )}
        {selectedFilter === 'age' && (
          <>
            <View style={styles.RangePickerContainer}>
              <View style={styles.AgeContainer}>
                <View style={styles.iconBack}>
                  <LocationSvg height={30} width={240} />
                </View>
                <Text style={styles.textPrice}>Age</Text>
              </View>
              <RangeSlider type="Age" />
              <TouchableOpacity style={styles.appButton2Container}>
                <Text style={styles.appButton2Text}>Apply Filters</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
        {selectedFilter === 'color' && (
          <>
            <View style={styles.flatlist}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                data={colorsList}
                horizontal={true}
                renderItem={({item, index}) => (
                  <TouchableOpacity
                    style={styles2().colornname}
                    onPress={() => {
                      console.log('Hit>>>', item.name);
                      addItemToList(item.name);
                      handleColorPress(index);
                    }}>
                    <View style={styles2().colorandnameview}>
                      <Image
                        source={item.imag}
                        style={
                          styles2(selectedIndices.includes(index)).colorimage
                        }
                      />
                      <Text style={styles2().namesofcolors}>{item.name}</Text>
                    </View>
                  </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
              <TouchableOpacity style={styles.appButton2Container}>
                <Text style={styles.appButton2Text}>Apply Filters</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </RBSheet>
    </SafeAreaView>
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
    paddingRight: 10,
  },
  backarrow: {
    marginLeft: 13,
  },
  searchBarContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginStart: 15,
    marginEnd: 15,
    alignItems: 'center',
    paddingStart: 15,
    height: 40,
    flex: 1,
  },
  txtInput: {
    fontSize: 18,
    textAlign: 'left',
    marginStart: 10,
    justifyContent: 'center',
    alignItems: 'center',
    top: 2,
    height: 80,
    flex: 1,
  },
  sort: {
    fontSize: 16,
    marginLeft: 3,
    fontWeight: 'bold',
  },
  filter: {
    fontSize: 16,
    marginLeft: 3,
    fontWeight: 'bold',
  },
  txtContainer: {
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    alignSelf: 'center',
  },
  filterlist: {
    color: '#000',
    fontSize: 17,
    textAlign: 'center',
    margin: 5,
    marginStart: 10,
    marginEnd: 10,
  },
  resultcounting: {
    fontSize: 15,
    paddingLeft: 25,
    flex: 0.9,
  },
  savesearchview: {
    flexDirection: 'row',
    marginTop: 20,
    fontSize: 15,
  },
  savesearch: {
    fontSize: 15,
    color: '#b63439',
    marginLeft: 5,
  },
  maincardview: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 0.5,
    margin: 15,
  },
  image: {
    width: 160,
    height: 130,
    borderRadius: 15,
    margin: 13,
  },
  staricon: {
    position: 'absolute',
    padding: 20,
  },
  name: {
    marginTop: 20,
    fontSize: 17,
    color: 'black',
  },
  price: {
    fontSize: 17,
    color: 'black',
    marginTop: 10,
  },
  agelocationview: {
    flexDirection: 'row',
    marginTop: 20,
  },
  age: {
    fontSize: 15,
  },
  location: {
    fontSize: 15,
    marginLeft: 3,
  },
  locationicon: {
    marginLeft: 14,
  },
  hearticon: {
    position: 'absolute',
    right: 12,
    top: 14,
  },
  topview: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    borderColor: 'black',
    borderBottomWidth: 0.2,
    height: 40,
  },
  sortby: {
    flex: 1,
    fontSize: 14,
  },
  cancel: {
    fontSize: 16,
    color: '#b63439',
  },
  RangePickerContainer: {
    flexDirection: 'column',
    marginHorizontal: 10,
    paddingVertical: 20,
    flex: 0.8,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBack: {
    backgroundColor: '#eee',
    borderRadius: 20,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    paddingStart: 13,
  },
  appButton2Container: {
    backgroundColor: '#b63439',
    marginTop: 20,
    height: 40,
    width: 360,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    marginBottom: 10,
  },
  appButton2Text: {
    color: 'white',
  },
  main: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#fff',
    elevation: 7,
  },
  horizontolLine: {
    borderBottomColor: '#707070',
    borderBottomWidth: 1,
    margin: 10,
  },
  text1: {
    fontSize: 18,
    color: '#000',
    fontWeight: '600',
    textAlign: 'left',
    margin: 10,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    margin: 20,
    height: 40,
    borderRadius: 5,
    paddingLeft: 15,
  },
  innerContainer: {
    marginBottom: 1,
    textAlign: 'center',
  },
  item: {
    fontSize: 16,
    marginStart: 10,
  },
  RangePickerContainer: {
    flexDirection: 'column',
    marginHorizontal: 10,
    paddingVertical: 20,
  },
  AgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBack: {
    backgroundColor: '#eee',
    borderRadius: 20,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default BrowsePost;
