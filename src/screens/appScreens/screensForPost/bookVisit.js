import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Cross from 'react-native-vector-icons/Feather';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesom from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import StepIndicator from 'react-native-step-indicator';
import {
  SelectMultipleButton,
  SelectMultipleGroupButton,
} from 'react-native-selectmultiple-button';
import {Item} from 'react-native-paper/lib/typescript/src/components/Drawer/Drawer';
const buttonLbl = [
  {
    id: '1',
    name: 'Cat',
  },
  {
    id: '2',
    name: 'goat',
  },
  {
    id: '3',
    name: 'Dog',
  },
  {
    id: '4',
    name: 'Cow',
  },
];
const labels = ['Basic info', 'Animal info', 'Book visit', 'Checkout'];
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

const BookVisit = ({navigation}) => {
  return (
    <View flex={1} backgroundColor={'#EF4036'}>
      <StatusBar backgroundColor={'#EF4036'} />
      <ImageBackground source={require('../../../assets/images/BG-01.png')}>
        <View
          style={{
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
              Book expert visit
            </Text>
            <Cross marginEnd={10} name="x" size={25} color="#fff" />
          </View>
        </View>
        <View style={styles.infoTrackMainDiv}>
          <StepIndicator
            stepCount={4}
            customStyles={customStyles}
            currentPosition={2}
            labels={labels}
          />
        </View>
        <View style={styles.outerDiv}>
          <Text style={styles.lable1}>Book expert visit</Text>
          <MaterialIcons
            style={{
              alignSelf: 'center',
              marginTop: -9,
              marginStart: 7,
            }}
            name="error-outline"
            color="#fff"
            size={20}
          />
        </View>
      </ImageBackground>
      <View style={styles.txtInputMainDiv}>
        <View style={{marginBottom: 20}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 20,
              backgroundColor: '#F3E6BD',
              borderRadius: 30,
              margin: 20,
              alignItems: 'center',
            }}>
            <MaterialIcons name="error-outline" color="#FFC300" size={20} />
            <Text
              style={{fontSize: 18, color: '#000', flex: 1, marginStart: 10}}>
              Service Charges
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: '#000',
                textAlign: 'right',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                fontWeight: '600',
                marginEnd: 5,
              }}>
              Rs.5000
            </Text>
            <Entypo name="chevron-small-down" size={20} color="#000" />
          </View>
          {/* 3rd Field */}
          <View style={styles.txtInputInnerDiv}>
            <Entypo style={styles.iconBack} name="location-pin" size={15} />
            <Text style={styles.headingLbl}>Location of visit</Text>
            <MaterialIcons name="error-outline" color="red" size={20} />
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Select city area"
              placeholderTextColor={'#B2BEB5'}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.selectCityBtn}
              onPress={() => navigation.navigate('SelectCity')}>
              <IonIcons name={'chevron-forward'} color={'#eee'} size={26} />
            </TouchableOpacity>
          </View>
        </View>
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
            onPress={() => navigation.navigate('CheckOut')}>
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
    flexDirection: 'row',
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
  multiBtn: {
    borderRadius: 30,
    width: 100,
    hight: 50,
    borderColor: '#00AEEF',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    padding: 5,
  },
});
export default BookVisit;
