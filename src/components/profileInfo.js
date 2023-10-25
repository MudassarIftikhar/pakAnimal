import React, {useCallback, useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import GenderSvg from '../assets/SVGIcon/Gender.svg';
import LocationSvg from '../assets/SVGIcon/Location.svg';
import Contactus from '../assets/SVGIcon/Contactus.svg';
import RangeSlider from './rangeSlider';
const ProfileInfo = (props, {navigation}) => {
  const [open2, setOpen2] = useState(false);
  const [valueGender, setValueGender] = useState('Male');
  const [genderType, setGenderType] = useState([
    {id: '1', label: 'Male', value: 'male'},
    {id: '2', label: 'Female', value: 'female'},
  ]);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [datePicked, setDatePicked] = useState('');
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    // console.log('A date has been picked: ', date);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Months are 0-based, so add 1
    const day = date.getDate();

    // Format the date as a string (e.g., "YYYY-MM-DD")
    const formattedDate = `${day.toString().padStart(2, '0')}/${month
      .toString()
      .padStart(2, '0')}/${year}`;

    console.log('Picked date: ', formattedDate);
    setDatePicked(formattedDate);
    hideDatePicker();
  };

  return (
    <View>
      <View style={styles.profileBox}>
        <Image
          style={styles.image}
          source={require('../assets/images/user.png')}
          resizeMode={'cover'}
        />
        <View style={styles.imageInnerContaier}>
          <View style={styles.userNameBox}>
            <Text style={styles.userName}>user name</Text>
            <MaterialIcons
              style={styles.editIcon}
              name="edit"
              size={22}
              color={'#808080'}
            />
          </View>
          <Text style={styles.txtCity}>Faisalabad</Text>
          <Text style={styles.txtCity}>Member Since Oct 19,2023</Text>
        </View>
      </View>
      <View style={styles.mainView}>
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

        <TouchableOpacity style={styles.infoContainer}>
          <View style={styles.iconBack}>
            <Contactus height={30} width={240} />
          </View>
          <View flex={1} paddingStart={13}>
            <Text style={styles.textEmail}>Email Address</Text>
            <TextInput style={styles.textInput2} placeholder="email@com" />
          </View>
        </TouchableOpacity>
        <View style={styles.horizontolLine2} />
        <TouchableOpacity style={styles.infoContainer} onPress={showDatePicker}>
          <View style={styles.iconBack}>
            <LocationSvg height={30} width={240} />
          </View>
          <View flex={1} paddingStart={13}>
            <Text style={styles.text3}>
              {datePicked !== '' ? datePicked : 'BirtDay'}
            </Text>
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
                // <View style={styles.dropDownBox}>
                <TouchableOpacity
                  style={styles.listBox}
                  onPress={() => (
                    setValueGender(dropValue.label), setOpen2(!open2)
                  )}>
                  <Text style={styles.listText}>{dropValue.label}</Text>
                </TouchableOpacity>
                // </View>
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
      </View>
      <View>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          buttonTextColorIOS="#b63439"
          customStyles={{
            datepicker: {
              backgroundColor: '#b63439',
            },
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  datePickerStyle: {
    backgroundColor: '#b63439',
  },
  mainView: {
    backgroundColor: '#fff',
  },
  profileBox: {
    flexDirection: 'row',
    padding: 20,
    marginTop: 15,
    width: '100%',
    paddingRight: 20,
    backgroundColor: '#eee',
  },
  image: {
    height: 100,
    width: 100,
  },
  userName: {
    fontSize: 22,
    fontWeight: '800',
    color: '#000',
    flex: 1,
  },

  imageInnerContaier: {
    width: '90%',
    flexDirection: 'column',
    marginStart: 20,
    alignSelf: 'center',
  },
  userNameBox: {
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingLeft: 2,
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
    fontWeight: '800',
    color: '#000',
  },
  textInput2: {
    fontSize: 18,
    fontWeight: '800',
    color: '#000',
    borderBottomColor: '#b63439',
    borderBottomWidth: 2,
    paddingBottom: 3,
  },
  textEmail: {
    marginTop: 20,
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
  dropDownBox: {},
});
export default ProfileInfo;
