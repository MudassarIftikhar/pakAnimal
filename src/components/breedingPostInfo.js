import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  Image,
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import RBSheet from 'react-native-raw-bottom-sheet';
import DiscriptionSvg from '../assets/images/Description-01.svg';
import AnimalTypeSvg from '../assets/images/Animal Type-01.svg';

const BreedingPostInfo = props => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [value, setValue] = useState('Pet');
  const [valueGender, setValueGender] = useState('Male');
  const [valueTraining, setValueTraining] = useState('No Training');
  const [valueVaccinated, setValueVaccinated] = useState('No Vaccinated');
  const [dropItems, setItems] = useState([
    {id: '1', label: 'Pet', value: 'pet'},
    {id: '2', label: 'Farm Animal', value: 'farmanimal'},
  ]);
  const [genderType, setGenderType] = useState([
    {id: '1', label: 'Male', value: 'male'},
    {id: '2', label: 'Female', value: 'female'},
  ]);
  const [trainingType, setTrainingType] = useState([
    {id: '1', label: 'Basic Obedience', value: 'basicobedience'},
    {id: '2', label: 'Intermediate Skills', value: 'intermediateskills'},
    {id: '3', label: 'Advanced Training', value: 'advancedtraining'},
    {id: '4', label: 'No Training', value: 'notraining'},
  ]);
  const [vaccinated, setVaccinated] = useState([
    {id: '1', label: 'Not Vaccinated', value: 'notvaccinated'},
    {id: '2', label: 'Vaccinated', value: 'vaccinated'},
  ]);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
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
      {/* Info List */}
      <View style={styles.horizontolLine} />

      <View style={styles.infoContainer}>
        <View style={styles.iconBack}>
          {/* <DiscriptionSvg height={120} width={120} color={'#000'} /> */}
          {/* <DiscriptionSvg height={200} width={200} /> */}
        </View>
        <View flex={1} paddingStart={13}>
          <Text style={styles.text1}>Description</Text>
          <TextInput
            style={styles.text2}
            placeholder="eg. Selling a friendly Labrador Retriever puppy"
          />
        </View>
      </View>

      <View style={styles.horizontolLine2} />

      <TouchableOpacity
        style={styles.infoContainer}
        onPress={() => props.Navigation.navigate('SelectCity')}>
        <View style={styles.iconBack}>
          <MaterialIcons name={'location-city'} size={25} color={'#808080'} />
        </View>
        <View flex={1} paddingStart={13}>
          <Text style={styles.text1}>Location</Text>
          <Text style={styles.text2}>City</Text>
        </View>
        <MaterialIcons
          name={'keyboard-arrow-down'}
          size={30}
          color={'#808080'}
        />
      </TouchableOpacity>
      <View style={styles.horizontolLine2} />

      <TouchableOpacity
        style={styles.infoContainer}
        onPress={() => {
          setOpen1(!open1);
        }}>
        <View style={styles.iconBack}>
          {/* <AnimalTypeSvg width={20} height={20} /> */}
        </View>
        <View flex={1} paddingStart={13}>
          <Text style={styles.text1}>Animal Type</Text>
          {open1 ? (
            dropItems.map(dropValue => (
              <TouchableOpacity
                style={{}}
                onPress={() => (setValue(dropValue.label), setOpen1(!open1))}>
                <Text style={styles.listText}>{dropValue.label}</Text>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={styles.text2}>{value}</Text>
          )}
        </View>

        <MaterialIcons
          name={'keyboard-arrow-down'}
          size={30}
          color={'#808080'}
        />
      </TouchableOpacity>

      <View style={styles.horizontolLine2} />

      <TouchableOpacity
        style={styles.infoContainer}
        onPress={() => {
          setOpen2(!open2);
        }}>
        <View style={styles.iconBack}>
          <MaterialIcons name={'location-city'} size={25} color={'#808080'} />
        </View>
        <View flex={1} paddingStart={13}>
          <Text style={styles.text1}>Gender</Text>
          {open2 ? (
            genderType.map(dropValue => (
              <TouchableOpacity
                style={styles.listBox}
                onPress={() => (
                  setValueGender(dropValue.label), setOpen2(!open2)
                )}>
                <Text style={styles.listText}>{dropValue.label}</Text>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={styles.text2}>{valueGender}</Text>
          )}
        </View>
        <MaterialIcons
          name={'keyboard-arrow-down'}
          size={30}
          color={'#808080'}
        />
      </TouchableOpacity>
      <View style={styles.horizontolLine2} />

      <TouchableOpacity
        style={styles.infoContainer}
        onPress={() => {
          setOpen3(!open3);
        }}>
        <View style={styles.iconBack}>
          <MaterialIcons name={'location-city'} size={25} color={'#808080'} />
        </View>
        <View flex={1} paddingStart={13}>
          <Text style={styles.text1}>Training level</Text>
          {open3 ? (
            trainingType.map(dropValue => (
              <TouchableOpacity
                style={{}}
                onPress={() => (
                  setValueTraining(dropValue.label), setOpen3(!open3)
                )}>
                <Text style={styles.listText}>{dropValue.label}</Text>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={styles.text2}>{valueTraining}</Text>
          )}
        </View>
        <MaterialIcons
          name={'keyboard-arrow-down'}
          size={30}
          color={'#808080'}
        />
      </TouchableOpacity>
      <View style={styles.horizontolLine2} />

      <TouchableOpacity
        style={styles.infoContainer}
        onPress={() => {
          setOpen4(!open4);
        }}>
        <View style={styles.iconBack}>
          <MaterialIcons name={'location-city'} size={25} color={'#808080'} />
        </View>
        <View flex={1} paddingStart={13}>
          <Text style={styles.text1}>Vaccination</Text>
          {open4 ? (
            vaccinated.map(dropValue => (
              <TouchableOpacity
                style={{}}
                onPress={() => (
                  setValueVaccinated(dropValue.label), setOpen4(!open4)
                )}>
                <Text style={styles.listText}>{dropValue.label}</Text>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={styles.text2}>{valueVaccinated}</Text>
          )}
        </View>
        <MaterialIcons
          name={'keyboard-arrow-down'}
          size={30}
          color={'#808080'}
        />
      </TouchableOpacity>
      <View style={styles.horizontolLine2} />
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
      <View style={styles.horizontolLine2} />

      <View style={styles.infoContainer}>
        <View style={styles.iconBack}>
          <MaterialCommunityIcon name={'tag'} size={20} color={'#808080'} />
        </View>
        <View flex={1} paddingStart={13}>
          <Text style={styles.text1}>Price</Text>
          <Text style={styles.text2}>set a price</Text>
        </View>
      </View>
      <View style={styles.horizontolLine2} />

      <View style={styles.horizontolLine2} />
      <Text style={styles.txtLbl2}>Contact Information</Text>

      <View style={styles.infoContainer}>
        <View style={styles.iconBack}>
          <MaterialCommunityIcon
            name={'face-man'}
            size={25}
            color={'#808080'}
          />
        </View>
        <View flex={1} paddingStart={13}>
          <Text style={styles.text1}>Name</Text>
          <Text style={styles.text2}>Enter your name</Text>
        </View>
      </View>
      <View style={styles.horizontolLine2} />

      <View style={styles.infoContainer}>
        <View style={styles.iconBack}>
          <IonIcons
            name={'phone-portrait-outline'}
            size={25}
            color={'#808080'}
          />
        </View>
        <View flex={1} paddingStart={13}>
          <Text style={styles.text1}>Mobile Number</Text>
          <Text style={styles.text2}>03001234567</Text>
        </View>
      </View>
      <View style={styles.horizontolLine2} />

      <View style={styles.infoContainer2}>
        <View style={styles.whatsAppIconBack}>
          <IonIcons name={'logo-whatsapp'} size={25} color={'#fff'} />
        </View>
        <Text style={styles.text3}>Allow WhatsApp Contact</Text>
        <Switch
          trackColor={{false: '#eee', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#fff' : '#fff'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <TouchableOpacity style={styles.submitBtn}>
        <Text style={{fontSize: 16, color: '#fff'}}>Post Your Ad</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  infoTrackMainDiv: {
    backgroundColor: '#0047AB',
    height: 70,
    paddingTop: 20,
    // justifyContent: 'center',
    // flexDirection: 'row',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    paddingVertical: 20,
  },
  infoContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    paddingVertical: 20,
    alignSelf: 'flex-end',
    // justifyContent: 'space-evenly',
  },
  imgMainDiv: {
    borderColor: '#00AEEF',
    borderStyle: 'dashed',
    borderWidth: 2,
    backgroundColor: '#fff',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
  },
  imgSecondDiv: {
    backgroundColor: '#b63439',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    flexDirection: 'row',
    marginTop: 10,
  },

  lable1: {
    fontSize: 12,
    fontWeight: '500',
  },
  lable2: {
    fontSize: 12,
    fontWeight: '500',
    color: '#fff',
    marginStart: 5,
  },
  iconBack: {
    backgroundColor: '#eee',
    borderRadius: 20,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitBtn: {
    borderRadius: 5,
    height: 50,
    alignItems: 'center',
    backgroundColor: '#00AEEF',
    justifyContent: 'center',
    paddingRight: 20,
    marginStart: 20,
    marginRight: 20,
    marginBottom: 40,
    marginTop: 40,
  },
  selectCityBtn: {
    position: 'absolute',
    right: 25,
    bottom: 1,
    padding: 0,
    paddingBottom: 8,
  },
  horizontolLine: {
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    marginTop: 15,
  },
  horizontolLine2: {
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    marginLeft: 50,
    marginRight: 15,
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
  text3: {
    fontSize: 18,
    marginEnd: 50,
    marginStart: 10,
  },
  whatsAppIconBack: {
    backgroundColor: '#50C878',
    borderRadius: 5,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtLbl2: {
    backgroundColor: '#eee',
    color: '#000',
    marginTop: 10,
    fontSize: 22,
    fontWeight: '500',
    padding: 10,
    paddingTop: 20,
    alignItems: 'baseline',
  },
  listText: {
    backgroundColor: '#fff',
    paddingStart: 5,
    fontSize: 15,
    fontWeight: '600',
    borderBottomColor: '#686A6C',
    borderBottomWidth: 0.4,
    borderLeftWidth: 0.4,
    borderRightWidth: 0.4,
    marginTop: 4,
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
export default BreedingPostInfo;
