import React, {useState} from 'react';
import {
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import DiscriptionSvg from '../assets/SVGIcon/Description.svg';
import AnimalTypeSvg from '../assets/SVGIcon/Animal Type.svg';
import LocationSvg from '../assets/SVGIcon/Location.svg';
import GenderSvg from '../assets/SVGIcon/Gender.svg';
import TrainingLevelSvg from '../assets/SVGIcon/Training Level.svg';
import NameSvg from '../assets/SVGIcon/Name01.svg';
import MobileNoSvg from '../assets/SVGIcon/Mobile Number.svg';
import PriceSvg from '../assets/SVGIcon/Price.svg';
import VaccinatedSvg from '../assets/SVGIcon/Vaccination.svg';

import Age from '../assets/SVGIcon/Age.svg';
import ColorBottomSheet from './colorBottomSheet';
import AnimalTypes from './animalTypes';

const BreedingPostInfo = props => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
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
  // console.log('Post>>>>', props.type);
  return (
    <View>
      {/* Info List */}
      <View style={styles.horizontolLine} />

      <View style={styles.infoContainer}>
        <View style={styles.iconBack}>
          <DiscriptionSvg height={30} width={240} />
        </View>
        <View flex={1} paddingStart={13}>
          <Text style={styles.text1}>Title</Text>
          <TextInput
            style={styles.text2}
            placeholder="eg. Labrador Retriever puppy"
          />
        </View>
      </View>

      <View style={styles.horizontolLine2} />

      <View style={styles.infoContainer}>
        <View style={styles.iconBack}>
          <DiscriptionSvg height={30} width={240} />
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
          <LocationSvg height={30} width={240} />
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
      {props.type !== 'Accessories' ? (
        <View>
          <AnimalTypes type={props.type} />

          <View style={styles.horizontolLine2} />
          <TouchableOpacity
            style={styles.infoContainer}
            onPress={() => {
              // setOpen1(!open1);
            }}>
            <View style={styles.iconBack}>
              <Age width={30} height={240} />
            </View>
            <View flex={1} paddingStart={13}>
              <Text style={styles.text1}>Age</Text>
              {/* {open1 ? (
                dropItems.map(dropValue => (
                  <TouchableOpacity
                    style={{}}
                    onPress={() => (
                      setValue(dropValue.label), setOpen1(!open1)
                    )}>
                    <Text style={styles.listText}>{dropValue.label}</Text>
                  </TouchableOpacity>
                ))
              ) : (
                <Text style={styles.text2}>{value}</Text>
              )} */}
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
              <GenderSvg height={30} width={240} />
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
              <TrainingLevelSvg height={35} width={260} />
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
              <VaccinatedSvg height={30} width={240} />
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
        </View>
      ) : (
        ''
      )}
      <View style={styles.horizontolLine2} />
      <ColorBottomSheet />

      <View style={styles.horizontolLine2} />

      <View style={styles.infoContainer}>
        <View style={styles.iconBack}>
          <PriceSvg width={30} height={240} />
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
          <NameSvg height={30} width={240} />
        </View>
        <View flex={1} paddingStart={13}>
          <Text style={styles.text1}>Name</Text>
          <Text style={styles.text2}>Enter your name</Text>
        </View>
      </View>
      <View style={styles.horizontolLine2} />

      <View style={styles.infoContainer}>
        <View style={styles.iconBack}>
          <MobileNoSvg height={30} width={240} />
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
          trackColor={{false: '#eee', true: '#b63439'}}
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
    backgroundColor: '#b63439',
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
    top: -2,
  },
  text2: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
    top: 2,
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
    // borderBottomWidth: 0.4,
    // borderLeftWidth: 0.4,
    // borderRightWidth: 0.4,
    marginTop: 4,
    textAlignVertical: 'bottom',
  },
  listBox: {
    height: 40,
    justifyContent: 'flex-end',
    backgroundColor: '#ffff',
    elevation: 3,
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
