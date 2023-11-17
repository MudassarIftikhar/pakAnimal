import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import LocationSvg from '../assets/SVGIcon/Location.svg';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RBSheet from 'react-native-raw-bottom-sheet';

export const FilterCategory = () => {
  const refRBSheet = useRef();
  const screenHeight = Dimensions.get('window').height;
  const petList = [
    {
      name: 'Dogs',
    },
    {
      name: 'Cats',
    },
    {
      name: 'Birds',
    },
    {
      name: 'Small Pets',
    },
    {
      name: 'Reptiles',
    },
    {
      name: 'Fishes',
    },
    {
      name: 'Unique Pets',
    },
  ];
  const farmList = [
    {
      name: 'Cattle',
    },
    {
      name: 'Goats',
    },
    {
      name: 'Sheep',
    },
    {
      name: 'Poultry',
    },
    {
      name: 'Camels',
    },
    {
      name: 'Horses',
    },
    {
      name: 'Donkeys',
    },
  ];
  return (
    <View>
      <TouchableOpacity
        style={styles.infoContainer}
        onPress={() => refRBSheet.current.open()}>
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
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={false}
        closeOnPressMask={false}
        dragFromTopOnly={false}
        closeOnPressBack={true}
        height={screenHeight}
        customStyles={{
          draggableIcon: {
            backgroundColor: 'white',
          },
        }}>
        <ScrollView>
          <View style={styles.topcontent}>
            <Text style={styles.selectanimaltext}>Select Animals</Text>
            <TouchableOpacity onPress={() => refRBSheet.current.close()}>
              <Text style={styles.canceltext}>cancel</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.horizontalline} />
          <Text style={styles.pettext}>Pet</Text>

          {petList.map(item => (
            <View style={{height: 40}}>
              <TouchableOpacity onPress={() => refRBSheet.current.close()}>
                <Text style={styles.petlistnames}>{item.name}</Text>
              </TouchableOpacity>
              <View style={styles.petlistline} />
            </View>
          ))}
          <Text style={styles.pettext}>Farm Animal</Text>
          {farmList.map(item => (
            <View style={{height: 40}}>
              <TouchableOpacity>
                <Text style={styles.petlistnames}>{item.name}</Text>
              </TouchableOpacity>
              <View style={styles.petlistline} />
            </View>
          ))}
        </ScrollView>
      </RBSheet>
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
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  topcontent: {
    flexDirection: 'row',
  },
  selectanimaltext: {
    marginTop: 20,
    marginLeft: 20,
    fontWeight: 'bold',
    flex: 1,
  },
  canceltext: {
    marginTop: 20,
    marginRight: 20,
    fontWeight: 'bold',
    color: '#b63439',
  },
  horizontalline: {
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    marginTop: 10,
  },

  pettext: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 16,
    color: '#b63439',
    fontWeight: 'bold',
    height: 40,
  },
  petlistnames: {
    marginLeft: 20,
  },
  petlistline: {
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
});
