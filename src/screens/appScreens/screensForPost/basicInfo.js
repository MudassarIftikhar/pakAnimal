import React, {useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Cross from 'react-native-vector-icons/Feather';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import StepIndicator from 'react-native-step-indicator';
import {AvoidSoftInput, AvoidSoftInputView} from 'react-native-avoid-softinput';
import {useFocusEffect} from '@react-navigation/native';

const labels = ['Basic info', 'Animal info', 'Checkout'];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 1,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: 'gold',
  stepStrokeWidth: 2,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#fff',
  separatorFinishedColor: 'gold',
  separatorUnFinishedColor: '#fff',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: 'gold',
  stepIndicatorLabelFontSize: 11,
  currentStepIndicatorLabelFontSize: 11,
  stepIndicatorLabelCurrentColor: '#000',
  stepIndicatorLabelFinishedColor: '#000',
  stepIndicatorLabelUnFinishedColor: '#000',
  labelColor: '#fff',
  labelSize: 11,
  currentStepLabelColor: 'gold',
};

const BasicInfo = ({navigation, route}) => {
  const [fullName, setFullName] = useState('Mudassar Iftikhar');
  const [phoneNo, setPhoneNo] = useState('0345678667');
  const [city, setCity] = useState('');
  const onFocusEffect = React.useCallback(() => {
    // This should be run when screen gains focus - enable the module where it's needed
    AvoidSoftInput.setShouldMimicIOSBehavior(true);
    return () => {
      // This should be run when screen loses focus - disable the module where it's not needed, to make a cleanup
      AvoidSoftInput.setShouldMimicIOSBehavior(false);
    };
  }, []);

  useFocusEffect(onFocusEffect); // register callback to focus events

  const disabled = () => {
    return fullName !== '' && phoneNo !== '' ? false : true;
  };
  // console.log('>>>', route);
  let CCity = '';

  // setCity(route.params.cCity);
  return (
    <View flex={1} backgroundColor={'#EF4036'}>
      <StatusBar backgroundColor={'#EF4036'} />
      <ImageBackground source={require('../../../assets/images/BG-01.png')}>
        <View
          style={{
            marginTop: 50,
            height: 50,
            alignItems: 'center',
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
            <Text
              style={{
                fontSize: 20,
                color: '#fff',
                fontWeight: '600',
                marginStart: 40,
                flex: 1,
              }}>
              Basic Info
            </Text>
            <Cross marginEnd={10} name="x" size={25} color="#fff" />
          </View>
        </View>
        <View style={styles.infoTrackMainDiv}>
          <StepIndicator
            stepCount={3}
            customStyles={customStyles}
            currentPosition={0}
            labels={labels}
          />
        </View>
        <View style={styles.outerDiv}>
          <Text style={styles.lable1}>Your basic info</Text>
        </View>
      </ImageBackground>
      <View style={styles.txtInputMainDiv}>
        <AvoidSoftInputView>
          <ScrollView>
            <View style={{marginBottom: 20}}>
              <View style={styles.txtInputInnerDiv}>
                <MaterialCommunityIcon
                  style={styles.iconBack}
                  name="face-man"
                  size={15}
                />
                <Text style={styles.headingLbl}>Your full name</Text>
                <MaterialIcons name="error-outline" color="red" size={20} />
              </View>
              <TextInput
                style={styles.input}
                placeholder="Enter full name"
                placeholderTextColor={'#B2BEB5'}
                onChangeText={text => setFullName(text)}
                value={fullName}
              />
              {/* 2nd Field */}
              <View style={styles.txtInputInnerDiv}>
                <MaterialCommunityIcon
                  style={styles.iconBack}
                  name="phone"
                  size={15}
                />
                <Text style={styles.headingLbl}>Your phone number</Text>
                <MaterialIcons name="error-outline" color="red" size={20} />
              </View>
              <TextInput
                style={styles.input}
                placeholder="03xxxxxxxxx"
                placeholderTextColor={'#B2BEB5'}
                onChangeText={text => setPhoneNo(text)}
                value={phoneNo}
              />
              {/* 3rd Field */}
              <View style={styles.txtInputInnerDiv}>
                <Entypo style={styles.iconBack} name="location-pin" size={15} />
                <Text style={styles.headingLbl}>Where do you live?</Text>
                <MaterialIcons name="error-outline" color="red" size={20} />
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Select city"
                  placeholderTextColor={'#B2BEB5'}
                  onChangeText={text => setCity(text)}
                  value={CCity === '' ? city : CCity}
                />
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.selectCityBtn}
                  onPress={() => navigation.navigate('SelectCity')}>
                  <IonIcons name={'chevron-forward'} color={'#eee'} size={26} />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </AvoidSoftInputView>

        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            paddingTop: 2,
            borderTopWidth: 1,
            borderTopColor: '#eee',
            marginTop: 150,
          }}>
          <TouchableOpacity
            style={styles.submitBtn}
            disabled={fullName !== '' && phoneNo !== '' ? false : true}
            activeOpacity={disabled ? 0.7 : 1}
            onPress={() => navigation.navigate('Animalinfo')}>
            <AntDesign name="arrowright" size={40} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoTrackMainDiv: {
    height: 70,
    paddingTop: 20,
    // justifyContent: 'center',
    // flexDirection: 'row',
  },
  outerDiv: {
    height: 100,
    paddingTop: 20,
  },
  txtInputMainDiv: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: '#fff',
    flex: 1,
  },
  txtInputInnerDiv: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  headingLbl: {
    color: '#0047AB',
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 20,
    marginRight: 15,
  },
  lable1: {
    fontSize: 32,
    fontWeight: '500',
    color: '#fff',
    textAlign: 'left',
    marginLeft: 20,
    marginTop: 10,
  },
  input: {
    marginTop: -9,
    marginRight: 20,
    marginLeft: 55,
    height: 50,
    borderColor: '#B2BEB5',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 15,
    paddingStart: 10,
    borderBottomColor: '#707070',
    borderBottomWidth: 1,
    paddingBottom: 9,
  },
  iconBack: {
    backgroundColor: '#eee',
    borderRadius: 20,
    height: 20,
    width: 20,
    textAlign: 'center',
    padding: 2,
  },
  submitBtn: {
    borderRadius: 30,
    height: 60,
    alignItems: 'flex-end',
    backgroundColor: '#EF4036',
    justifyContent: 'center',
    paddingRight: 20,
    marginStart: 20,
    marginRight: 20,
    marginBottom: 40,
  },
  selectCityBtn: {
    position: 'absolute',
    right: 25,
    bottom: 1,
    padding: 0,
    paddingBottom: 8,
  },
});
export default BasicInfo;
