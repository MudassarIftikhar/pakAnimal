import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import SellNow from '../screens/appScreens/sellNow';

const OferingCard = props => {
  return (
    <TouchableOpacity
      onPress={() => {
        <SellNow />;
      }}
      style={styles.postContainer}>
      <View style={styles.cardOutterBox}>
        <View style={styles.cardInnerBox}>
          <Text style={styles.postHeading}>Sell Your Pet!</Text>
          <Text style={styles.postDiscription} numberOfLines={2}>
            Connect with Caring Pet Owners and Verified Buyers
          </Text>
        </View>
        <Image
          style={styles.postImage}
          source={require('../assets/images/splash_icon.png')}
        />
      </View>
      <View style={styles.txtLblMainContainer}>
        <View style={styles.txtLblContainer}>
          <IonIcons name="checkmark-circle" size={25} color={'#b63439'} />
          <Text style={styles.txtLbl2}>text 1</Text>
        </View>
        <View style={styles.txtLblContainer}>
          <IonIcons name="checkmark-circle" size={25} color={'#b63439'} />
          <Text style={styles.txtLbl2}>text 2</Text>
        </View>
        <View style={styles.txtLblContainer}>
          <IonIcons name="checkmark-circle" size={25} color={'#b63439'} />
          <Text style={styles.txtLbl2}>text 3</Text>
        </View>
        <IonIcons
          style={styles.btnNext}
          name="chevron-forward-sharp"
          size={25}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    elevation: 7,
    borderRadius: 20,
    backgroundColor: '#fff',
    paddingLeft: 10,
    padding: 10,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    paddingBottom: 10,
    flexWrap: 'wrap',
  },
  postHeading: {
    fontSize: 20,
    fontWeight: '600',
    margin: 10,
    color: '#b63439',
  },
  postDiscription: {
    fontSize: 16,
    marginLeft: 10,
    color: '#000',
  },
  postTxtlbl: {
    fontSize: 16,
    margin: 10,
    color: '#0000FF',
  },
  postImage: {
    height: 130,
    width: 100,
  },
  btnNext: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  txtLbl2: {
    fontSize: 16,
    color: '#000',
    bottom: 2,
    marginStart: 7,
  },
  txtLblMainContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    marginStart: 10,
    marginBottom: 10,
  },
  txtLblContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginStart: 10,
  },

  cardOutterBox: {flexDirection: 'row', flex: 1},
  cardInnerBox: {flexDirection: 'column', flex: 1, marginEnd: 10},
});
export default OferingCard;
