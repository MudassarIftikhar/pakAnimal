import React from 'react';
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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import SimpleButton from '../../sample/SimpleButton';
import Header from '../../../components/header';
import InfoTrack from '../../../components/infoTrack';

const AnimalInfo = ({props, navigation}) => {
  return (
    <View paddingTop={40} flex={1} backgroundColor={'#EF4036'}>
      <StatusBar backgroundColor={'#EF4036'} />
      <ImageBackground source={require('../../../assets/images/BG-01.png')}>
        <Header title="Animal Info" CrossIcon={true} Navigation={navigation} />
        <InfoTrack position={1} title="Animal info" />
      </ImageBackground>
      <ScrollView style={styles.txtInputMainDiv}>
        <View style={styles.discriptionBox}>
          {/* 3rd Field */}
          <View style={styles.txtInputInnerDiv}>
            <Entypo style={styles.iconBack} name="location-pin" size={15} />
            <Text style={styles.headingLbl}>Description</Text>
            <MaterialIcons name="error-outline" color="red" size={20} />
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Briefly describe the animal you're selling"
              placeholderTextColor={'#B2BEB5'}
              value={props}
            />
          </View>
          <View style={styles.txtInputInnerDiv}>
            <Entypo style={styles.iconBack} name="location-pin" size={15} />
            <Text style={styles.headingLbl}>Choose your Animal</Text>
          </View>
          <View style={styles.multiBtnContainer}>
            <SimpleButton />
          </View>
        </View>
        <View style={styles.btnBox}>
          <TouchableOpacity
            style={styles.submitBtn}
            onPress={() => navigation.navigate('CheckOutSecond')}>
            <AntDesign name="arrowright" size={40} color="#fff" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  infoTrackMainDiv: {
    height: 70,
    paddingTop: 20,
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
    height: 150,
    borderColor: '#B2BEB5',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 15,
    paddingStart: 10,
    borderBottomColor: '#707070',
    borderBottomWidth: 1,
    paddingBottom: 9,
    textAlign: 'left',
    textAlignVertical: 'top',
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
  multiBtnContainer: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
    marginStart: 40,
    flex: 1,
  },
  discriptionBox: {marginTop: 20, marginBottom: 20},
  btnBox: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingTop: 2,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    marginTop: 150,
  },
});
export default AnimalInfo;
