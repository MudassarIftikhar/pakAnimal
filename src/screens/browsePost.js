import React, {useRef} from 'react';
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
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RBSheet from 'react-native-raw-bottom-sheet';
import RadioButton from 'radio-buttons-react-native';
import Filter from '../components/filter';

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
    {
      id: 8,
      title: 'disability',
    },
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

  return (
    <SafeAreaView>
      <BrowsePostHeader navigation={props.navigation} />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity
          style={{flexDirection: 'row'}}
          onPress={() => refRBSheet.current.open()}>
          <MaterialIcons name="sort" size={25} style={styles.sorticon} />
          <Text style={styles.sort}>Sort</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flexDirection: 'row'}}
          onPress={() =>
            props.navigation.navigation.navigate('Filter', {
              navigation: props.navigation,
            })
          }>
          <MaterialIcons name="sort" size={25} style={styles.sorticon} />
          <Text style={styles.filter}>filter</Text>
        </TouchableOpacity>
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          height={550}
          customStyles={{
            draggableIcon: {
              backgroundColor: 'white',
            },
          }}>
          <View style={styles.topview}>
            <Text style={styles.sortby}>Sort by</Text>
            <Text style={styles.cancel}>cancel</Text>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <RadioButton data={data} style={{padding: 20}} />
          </ScrollView>
        </RBSheet>
        <FlatList
          data={FiltersList}
          horizontal={true}
          renderItem={({item}) => (
            <View>
              <Text style={styles.filterlist}>{item.title}</Text>
            </View>
          )}
        />
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
    </SafeAreaView>
  );
};
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
  searchBarContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginStart: 15,
    marginEnd: 15,
    alignItems: 'center',
    paddingStart: 15,
    height: 40,
    width: 300,
  },
  txtInput: {
    fontSize: 18,
    textAlign: 'left',
    marginStart: 10,
    justifyContent: 'center',
    alignItems: 'center',
    top: 2,
    height: 80,
    borderEndWidth: 1,
    flex: 1,
  },
  sorticon: {
    marginTop: 15,
    marginLeft: 15,
  },
  sort: {
    marginTop: 15,
    fontSize: 16,
    marginLeft: 3,
    fontWeight: 'bold',
  },
  filter: {
    marginTop: 15,
    fontSize: 16,
    marginLeft: 3,
    fontWeight: 'bold',
  },
  filterlist: {
    color: '#000',
    fontSize: 17,
    padding: 6,
    paddingStart: 15,
    paddingEnd: 15,
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginStart: 15,
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 0.5,
  },
  resultcounting: {
    fontSize: 15,
    flex: 0.9,
  },
  savesearchview: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 20,
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
});
export default BrowsePost;
