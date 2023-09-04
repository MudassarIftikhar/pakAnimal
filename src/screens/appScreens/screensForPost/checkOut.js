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
const methodList = [
  {
    id: '1',
    name: 'EasyPaisa',
    image: require('../../../assets/images/easyPaisa.png'),
  },
  {
    id: '2',
    name: 'JazzCash Shop',
    image: require('../../../assets/images/jazzCash.png'),
  },
  {
    id: '3',
    name: 'Jazz Cash Mobile Account',
    image: require('../../../assets/images/jazzCash.png'),
  },
  {
    id: '4',
    name: 'Debit/Credit Card',
    image: require('../../../assets/images/easyPaisa.png'),
  },
  {
    id: '5',
    name: 'Online Bank Transfer',
    image: require('../../../assets/images/easyPaisa.png'),
  },
];
const CheckOut = ({navigation}) => {
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
              CheckOut
            </Text>
            <Cross marginEnd={10} name="x" size={25} color="#fff" />
          </View>
        </View>
        <View style={styles.infoTrackMainDiv}>
          <StepIndicator
            stepCount={3}
            customStyles={customStyles}
            currentPosition={3}
            labels={labels}
          />
        </View>
        <View style={styles.outerDiv}>
          <Text style={styles.lable1}>CheckOut</Text>
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
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 20,
              backgroundColor: '#EBF8EE',
              borderRadius: 30,
              margin: 20,
              alignItems: 'center',
            }}>
            <MaterialCommunityIcon
              name="lock-outline"
              color="#5DA75A"
              size={20}
            />
            <Text
              style={{fontSize: 14, color: '#000', flex: 1, marginStart: 10}}>
              All payment method are encrypted and secure
            </Text>
          </View>
          {/* 3rd Field */}
          <View
            style={{
              borderWidth: 1,
              borderColor: '#eee',
              height: 50,
              borderRadius: 7,
              margin: 20,
              alignItems: 'flex-start',
              justifyContent: 'center',
            }}>
            <Text style={styles.input}>CheckOut Details</Text>
            <TouchableOpacity activeOpacity={0.8} style={styles.selectCityBtn}>
              <Entypo name="chevron-small-down" size={25} color="#000" />
            </TouchableOpacity>
          </View>
          <ScrollView>
            {methodList.map(item => (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginStart: 10,
                  marginEnd: 10,
                  borderBottomColor: '#eee',
                  borderBottomWidth: 1,
                  marginTop: 10,
                  paddingBottom: 15,
                }}>
                <Image
                  style={{
                    height: 20,
                    width: 20,
                    marginStart: 10,
                  }}
                  source={item.image}
                />
                <Text
                  style={{
                    fontSize: 18,
                    color: '#000',
                    marginStart: 20,
                  }}>
                  {item.name}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
        <Text
          style={{
            alignSelf: 'center',
            alignItems: 'center',
            marginBottom: 10,
            color: '#808080',
            textAlign: 'center',
            margin: 20,
          }}>
          By checking out, I agree to{' '}
          <Text
            style={{
              fontWeight: 600,
              color: '#00AEEF',
              textDecorationLine: 'underline',
            }}>
            Terms of Sevice, Eligibility criteria{' '}
          </Text>{' '}
          and I have all the{' '}
          <Text
            style={{
              color: '#00AEEF',
              fontWeight: '600',
              textDecorationLine: 'underline',
            }}>
            Required Documents
          </Text>
        </Text>
        <View
          style={{
            flex: 1,
            paddingTop: 2,
            borderTopWidth: 1,
            borderTopColor: '#eee',
            marginTop: 0,
            marginBottom: 20,
          }}>
          <TouchableOpacity style={styles.submitBtn}>
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
    color: '#000',
    fontSize: 15,
    paddingStart: 10,
    paddingBottom: 9,
    justifyContent: 'center',
    marginVertical: 10,
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
    bottom: 5,
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
  horizontolLine: {
    borderBottomColor: 'green',
    borderBottomWidth: 1,
    marginTop: 15,
  },
});
export default CheckOut;
