import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import DropDownPicker from 'react-native-dropdown-picker';
import {Item} from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
// import ImagePicker from 'react-native-image-crop-picker';
import {launchImageCamera, launchImageLibrary} from 'react-native-image-picker';
const SellYourCar = ({navigation}) => {
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

  const [selectedImage, setSelectedImage] = useState('');
  const imagePicker = () => {
    let options = {
      storageOptions: {
        path: 'image',
      },
    };
    launchImageLibrary(options, response => {
      setSelectedImage(response.assets[0].uri);
      console.log('Response>>>', response.assets[0].uri);
    });
  };
  return (
    <SafeAreaView backgroundColor={'#fff'} flex={1}>
      <StatusBar backgroundColor={'#b63439'} />
      <View
        style={{
          height: 50,
          backgroundColor: '#b63439',
          alignItems: 'center',
          elevation: 3,
        }}>
        <View
          style={{
            flexDirection: 'row',
            height: 40,
            width: '100%',
            alignSelf: 'flex-start',
            alignItems: 'center',
            right: 0,
            paddingTop: 5,
            paddingStart: 15,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <IonIcons name="arrow-back" size={30} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Sell Your Pet</Text>
          {/* <Cross marginEnd={10} name="x" size={25} color="#fff" /> */}
        </View>
      </View>
      <ScrollView>
        {selectedImage ? (
          <View>
            <Image
              style={{height: 150, width: '100%', marginTop: 5}}
              source={{uri: selectedImage}}
            />
            <Text
              style={{alignItems: 'center', textAlign: 'center', marginTop: 5}}>
              {selectedImage.length} Photo
            </Text>
            <TouchableOpacity
              style={styles.imgSecondDiv}
              onPress={() => {
                imagePicker();
              }}>
              <SimpleLineIcons name={'camera'} size={20} color={'#fff'} />
              <Text style={styles.lable2}>Add more Photos</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            style={styles.imgMainDiv}
            onPress={() => {
              imagePicker();
            }}>
            <SimpleLineIcons name={'camera'} size={30} color={'#707070'} />
            <Text style={styles.lable1}>Add Photo</Text>
          </TouchableOpacity>
        )}

        <Text style={styles.headingLbl}>
          Tap on images to edit them. To reorder,select the image,hold and drag.
        </Text>
        {/* Info List */}
        <View style={styles.horizontolLine} />

        <View style={styles.infoContainer}>
          <View style={styles.iconBack}>
            <MaterialIcons name={'location-city'} size={25} color={'#808080'} />
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

        <View style={styles.infoContainer}>
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
        </View>
        <View style={styles.horizontolLine2} />

        <TouchableOpacity
          style={styles.infoContainer}
          onPress={() => {
            setOpen1(!open1);
          }}>
          <View style={styles.iconBack}>
            <MaterialIcons name={'location-city'} size={25} color={'#808080'} />
          </View>
          <View flex={1} paddingStart={13}>
            <Text style={styles.text1}>Animal Type</Text>
            {open1 ? (
              dropItems.map(dropValue => (
                <TouchableOpacity
                  style={{}}
                  onPress={() => (setValue(dropValue.label), setOpen1(!open1))}>
                  <Text>{dropValue.label}</Text>
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
                  style={{}}
                  onPress={() => (
                    setValueGender(dropValue.label), setOpen2(!open2)
                  )}>
                  <Text>{dropValue.label}</Text>
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
                  <Text>{dropValue.label}</Text>
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
                  <Text>{dropValue.label}</Text>
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
      </ScrollView>
    </SafeAreaView>
  );
};

const DropDownMenu = () => {
  const [open, setOpen] = useState(false);
  const [dropItems, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  return (
    <View>
      {open
        ? dropItems.map(
            dropValue => (
              (
                <View style={{height: 40, width: 120}}>
                  <Text>{dropValue.label}</Text>
                </View>
              ),
              setOpen(true)
            ),
          )
        : ((<Text style={styles.text2}>Animal</Text>), setOpen(false))}
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
  headerTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
    marginStart: 40,
    flex: 1,
  },
  headingLbl: {
    color: '#707070',
    fontSize: 14,
    marginLeft: 10,
    marginRight: 15,
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
});
export default SellYourCar;
