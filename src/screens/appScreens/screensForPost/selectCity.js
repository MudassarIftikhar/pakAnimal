import {useFocusEffect} from '@react-navigation/native';
import React, {useEffect, useState, useRef} from 'react';
import {
  BackHandler,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import {Modal} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LocationSvg from '../../../assets/SVGIcon/Location.svg';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RBSheet from 'react-native-raw-bottom-sheet';

const screenHeight = Dimensions.get('window').height;
const SelectCity = ({navigation}) => {
  const [data, setData] = useState([]);

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
  const refRBSheet = useRef();
  return (
    <View>
      <TouchableOpacity
        style={styles.infoContainer}
        onPress={() => {
          refRBSheet.current.open();
        }}>
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
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={screenHeight * 0.98}
        customStyles={{
          draggableIcon: {
            backgroundColor: '#FFFFFF',
          },
        }}>
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
            {data.length > 0 ? (
              data.map((item, index) => (
                <TouchableOpacity style={styles.innerContainer}>
                  <Text style={styles.item}>{item}</Text>
                  <View style={styles.horizontolLine} />
                </TouchableOpacity>
              ))
            ) : (
              <Text style={{justifyContent: 'center', alignItems: 'center'}}>
                Network Error!
              </Text>
            )}
            {/* </View> */}
          </ScrollView>
        </View>
      </RBSheet>
    </View>
  );
};

const styles = StyleSheet.create({
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
  header: {
    backgroundColor: '#eee',
    borderRadius: 30,
    textAlign: 'right',
    alignSelf: 'flex-end',
    margin: 15,
    padding: 5,
  },
  text1: {
    fontSize: 18,
    color: '#000',
    fontWeight: '600',
    textAlign: 'left',
    margin: 10,
  },

  modalView: {
    elevation: 3,
    shadowColor: 'black',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    bottom: 0,
    backgroundColor: '#fff',
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
});
export default SelectCity;
