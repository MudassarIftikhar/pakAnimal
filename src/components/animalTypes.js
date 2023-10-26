import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import AnimalTypeSvg from '../assets/SVGIcon/Animal Type.svg';

import RBSheet from 'react-native-raw-bottom-sheet';

const AnimalTypes = props => {
  const [animalType, setAnimalType] = useState('Pet');
  const refRBSheet = useRef();
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
    <View>
      <View>
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={true}
          height={600}
          customStyles={{
            draggableIcon: {
              backgroundColor: '#FFFFFF',
            },
          }}>
          <View
            style={{
              flexDirection: 'column',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}>
            <View style={styles.sheettopcontent}>
              <Text style={styles.bodycolor}>AnimalTypes</Text>
              <TouchableOpacity onPress={() => refRBSheet.current.close()}>
                <Text style={styles.cancel}>Cancel</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.flatlist}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={colorsList}
                horizontal={false}
                renderItem={({item}) => (
                  <TouchableOpacity
                    style={styles.colornname}
                    onPress={() => {
                      setAnimalType(item.name);
                      refRBSheet.current.close();
                    }}>
                    <View style={styles.colorandnameview}>
                      <Image source={item.imag} style={styles.colorimage} />
                      <Text style={styles.namesofcolors}>{item.name}</Text>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </RBSheet>
      </View>

      <TouchableOpacity
        style={styles.infoContainer}
        onPress={() => {
          refRBSheet.current.open();
        }}>
        <View style={styles.iconBack}>
          <AnimalTypeSvg width={30} height={240} />
        </View>
        <View flex={1} paddingStart={13}>
          <Text style={styles.text1}>Animal Type</Text>
          <Text style={styles.text2}>{animalType}</Text>
        </View>
        <MaterialIcons
          name={'keyboard-arrow-down'}
          size={30}
          color={'#808080'}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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

  text1: {
    fontSize: 14,
    color: '#000',
  },
  text2: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  sheettopcontent: {
    flexDirection: 'row',
  },
  bodycolor: {
    color: 'darkblue',
    fontWeight: 'bold',
    flex: 1,
    marginLeft: 20,
  },
  cancel: {
    color: 'skyblue',
    fontWeight: 'bold',
    marginRight: 20,
  },
  colornname: {
    paddingTop: 20,
    margin: 15,
  },
  colorimage: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  colorandnameview: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  namesofcolors: {
    alignItems: 'center',
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  flatlist: {
    padding: 35,
  },
});
export default AnimalTypes;
