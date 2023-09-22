import React, {useRef} from 'react';
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

import RBSheet from 'react-native-raw-bottom-sheet';

const ColorBottomSheet = props => {
  const refRBSheet = useRef();
  const colorsList = [
    {
      imag: require('../assets/images/white.png'),
      name: 'White',
    },
    {
      imag: require('../assets/images/silver.png'),
      name: 'Silver',
    },
    {
      imag: require('../assets/images/black.png'),
      name: 'Black',
    },
    {
      imag: require('../assets/images/grey.png'),
      name: 'Grey',
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
      name: 'Gold',
    },
    {
      imag: require('../assets/images/maroon.png'),
      name: 'Maroon',
    },
    {
      imag: require('../assets/images/beige.png'),
      name: 'Beige',
    },
    {
      imag: require('../assets/images/pink.png'),
      name: 'Pink',
    },
    {
      imag: require('../assets/images/brown.png'),
      name: 'Brown',
    },
    {
      imag: require('../assets/images/burgundy.png'),
      name: 'Burgundy',
    },
    {
      imag: require('../assets/images/yellow.png'),
      name: 'Yellow',
    },
    {
      imag: require('../assets/images/bronze.png'),
      name: 'Bronze',
    },
    {
      imag: require('../assets/images/purple.png'),
      name: 'Purple',
    },
    {
      imag: require('../assets/images/turquoise.png'),
      name: 'Turquoise',
    },
    {
      imag: require('../assets/images/orange.png'),
      name: 'Orange',
    },
    {
      imag: require('../assets/images/indigo.png'),
      name: 'Indigo',
    },
    {
      imag: require('../assets/images/magneta.png'),
      name: 'Magneta',
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
          <View style={{flexDirection: 'column'}}>
            <View style={styles.sheettopcontent}>
              <Text style={styles.bodycolor}>Body color</Text>
              <Text style={styles.cancel}>Cancel</Text>
            </View>
            <View style={styles.flatlist}>
              <FlatList
                data={colorsList}
                numColumns={5}
                horizontal={false}
                renderItem={({item}) => (
                  <TouchableOpacity style={styles.colornname}>
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
          <MaterialCommunityIcon name={'tag'} size={20} color={'#808080'} />
        </View>
        <View flex={1} paddingStart={13}>
          <Text style={styles.text1}>Color</Text>
          <Text style={styles.text2}>Choos a color</Text>
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
    flexDirection: 'column',
    paddingTop: 20,
    alignItems: 'center',
    margin: 15,
  },
  colorimage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  colorandnameview: {
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 60,
    maxWidth: 40,
  },
  namesofcolors: {
    paddingTop: 3,
  },
  flatlist: {
    padding: 35,
  },
});
export default ColorBottomSheet;
