import React from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
const ChooseAPlan = ({route, navigation}) => {
  console.log('Type>>>>', route);
  const type = '';
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'#b63439'} />
      <View style={styles.header}>
        <View style={styles.headerBox}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <IonIcons name="chevron-back-sharp" size={30} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTxt}>Choose a Plan</Text>
        </View>
      </View>
      {type === 'Pet' ? (
        <View marginBottom={70}>
          <Text style={styles.mainHeading}>
            How are you looking to list your pet?
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('BasicInfo')}
            style={styles.postContainer}>
            <View flex={1}>
              <Text style={styles.postHeading}>Sell Your Pet!</Text>
              <Text style={styles.postDiscription} numberOfLines={2}>
                Connect with Caring Pet Owners and Verified Buyers
              </Text>
              <Text style={styles.postTxtlbl}>
                I want expert to sell my animal
              </Text>
            </View>
            <Image
              style={styles.postImage}
              source={require('../../../assets/images/splash_icon.png')}
            />
          </TouchableOpacity>
          {/* Card 2 */}

          <TouchableOpacity
            onPress={() => navigation.navigate('SellYourCar')}
            style={styles.postContainer}>
            <View flex={1}>
              <Text style={styles.postHeading}>Post Ad for Breeding!</Text>
              <Text style={styles.postDiscription} numberOfLines={2}>
                Secure and Trustworthy Breeding with a Perfect Match
              </Text>
              <Text style={styles.postTxtlbl}>
                I want expert to sell my animal
              </Text>
            </View>
            <Image
              style={styles.postImage}
              source={require('../../../assets/images/splash_icon.png')}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          {/* 2nd Type */}

          <Text style={styles.mainHeading}>
            How are you looking to list your farm animal?
          </Text>
          {/* 3rd card */}

          <TouchableOpacity
            onPress={() => navigation.navigate('BasicInfo')}
            style={styles.postContainer}>
            <View flex={1}>
              <Text style={styles.postHeading}>Sell Your Farm Animal!</Text>
              <Text style={styles.postDiscription} numberOfLines={2}>
                Connect with Caring Farm Animal Owners and Verified Buyers
              </Text>
              <Text style={styles.postTxtlbl}>
                I want expert to sell my animal
              </Text>
            </View>
            <Image
              style={styles.postImage}
              source={require('../../../assets/images/splash_icon.png')}
            />
          </TouchableOpacity>
          {/* Card 4 */}

          <TouchableOpacity
            onPress={() => navigation.navigate('SellYourCar')}
            style={styles.postContainer}>
            <View flex={1}>
              <Text style={styles.postHeading}>Post Ad for Breeding!</Text>
              <Text style={styles.postDiscription} numberOfLines={2}>
                Secure and Trustworthy Breeding with a Perfect Match
              </Text>
              <Text style={styles.postTxtlbl}>
                I want expert to sell my animal
              </Text>
            </View>
            <Image
              style={styles.postImage}
              source={require('../../../assets/images/splash_icon.png')}
            />
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainHeading: {
    fontSize: 36,
    fontWeight: '600',
    margin: 30,
    color: '#0047AB',
  },
  postContainer: {
    margin: 20,
    elevation: 5,
    borderRadius: 20,
    backgroundColor: '#fff',
    paddingLeft: 10,
    padding: 10,
    flexDirection: 'row',
  },
  postHeading: {
    fontSize: 20,
    fontWeight: '600',
    margin: 10,
    color: '#0000FF',
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
  header: {height: 50, backgroundColor: '#b63439', alignItems: 'center'},
  headerBox: {
    flexDirection: 'row',
    height: 40,
    width: '100%',
    alignSelf: 'flex-start',
    alignItems: 'center',
    right: 0,
    paddingTop: 5,
  },
  headerTxt: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
    marginStart: 20,
  },
});
export default ChooseAPlan;
