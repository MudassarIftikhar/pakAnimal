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
  const petList = [
    {
      imag: require('../assets/images/Dogs.png'),
      name: 'Dogs',
    },
    {
      imag: require('../assets/images/Cats.png'),
      name: 'Cats',
    },
    {
      imag: require('../assets/images/Birds.png'),
      name: 'Birds',
    },
    {
      imag: require('../assets/images/SmallPets.png'),
      name: 'Small Pets',
    },
    {
      imag: require('../assets/images/Reptiles.png'),
      name: 'Reptiles',
    },
    {
      imag: require('../assets/images/Fishes.png'),
      name: 'Fishes',
    },
    {
      imag: require('../assets/images/UniquePets.png'),
      name: 'Unique Pets',
    },
  ];
  const farmList = [
    {
      imag: require('../assets/images/Dogs.png'),
      name: 'Cattle',
    },
    {
      imag: require('../assets/images/Cats.png'),
      name: 'Goats',
    },
    {
      imag: require('../assets/images/Birds.png'),
      name: 'Sheep',
    },
    {
      imag: require('../assets/images/SmallPets.png'),
      name: 'Poultry',
    },
    {
      imag: require('../assets/images/Reptiles.png'),
      name: 'Camels',
    },
    {
      imag: require('../assets/images/Fishes.png'),
      name: 'Horses',
    },
    {
      imag: require('../assets/images/UniquePets.png'),
      name: 'Donkeys',
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
              marginBottom: 30,
            }}>
            <View style={styles.sheettopcontent}>
              <Text style={styles.bodycolor}>Animal Types</Text>
              <TouchableOpacity onPress={() => refRBSheet.current.close()}>
                <Text style={styles.cancel}>Cancel</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.flatlist}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={props.type === 'Farm Animal' ? farmList : petList}
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
    color: '#b63439',
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
