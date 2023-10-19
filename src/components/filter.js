import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import LocationSvg from '../assets/SVGIcon/Location.svg';
import ColorSvg from '../assets/SVGIcon/Color.svg';
import PriceSvg from '../assets/SVGIcon/Price.svg';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const FilterHeader = () => {
  return (
    <View style={styles.headerview}>
      <TouchableOpacity>
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
  return (
    <View flex={1}>
      <FilterHeader />
      <ScrollView>
        <View style={styles.horizontolLine2} />

        <TouchableOpacity style={styles.infoContainer}>
          <View style={styles.iconBack}>
            <LocationSvg height={30} width={240} />
          </View>
          <View flex={1} paddingStart={13}>
            <Text style={styles.text1}>Location</Text>
          </View>
          <MaterialIcons
            name={'keyboard-arrow-down'}
            size={30}
            color={'#808080'}
          />
        </TouchableOpacity>
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
        <TouchableOpacity style={styles.infoContainer}>
          <View style={styles.iconBack}>
            <LocationSvg height={30} width={240} />
          </View>
          <View flex={1} paddingStart={13}>
            <Text style={styles.text1}>Age</Text>
          </View>
          <MaterialIcons
            name={'keyboard-arrow-down'}
            size={30}
            color={'#808080'}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.infoContainer}>
          <View style={styles.iconBack}>
            <PriceSvg height={30} width={240} />
          </View>
          <View flex={1} paddingStart={13}>
            <Text style={styles.text1}>Price Range (PKR)</Text>
          </View>
          <MaterialIcons
            name={'keyboard-arrow-down'}
            size={30}
            color={'#808080'}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.infoContainer}>
          <View style={styles.iconBack}>
            <ColorSvg height={30} width={240} />
          </View>
          <View flex={1} paddingStart={13}>
            <Text style={styles.text1}>color</Text>
          </View>
          <MaterialIcons
            name={'keyboard-arrow-down'}
            size={30}
            color={'#808080'}
          />
        </TouchableOpacity>
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
    backgroundColor: '#e7e7e8',
    height: 70,
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
});
export default Filter;
