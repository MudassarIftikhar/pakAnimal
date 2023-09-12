import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Cross from 'react-native-vector-icons/Feather';
import {SliderBox} from 'react-native-image-slider-box';
import Entypo from 'react-native-vector-icons/Entypo';
// import statusCodes along with GoogleSignin
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
GoogleSignin.configure();
const images = [
  require('../assets/images/slider1.png'), // Local image
  require('../assets/images/slider2.png'),
  require('../assets/images/slider3.png'),
];

const Login = ({navigation}) => {
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signOut();
      const userInfo = await GoogleSignin.signIn();
      console.log('usrInfo>>>>', userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('Login Flow Error');
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Already is in process');
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play Service not available');
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.mainInnerConatiner}>
        <View style={styles.CrossBtn}>
          <Cross name="x" size={20} color="#000" />
        </View>
      </View>
      <ScrollView style={styles.scroll}>
        <Text style={styles.lblWelcom}>Welcome to PakAnimals</Text>
        <SliderBox
          images={images}
          autoplay
          circleLoop
          resizeMode={'center'}
          dotColor="#808080"
          inactiveDotColor="#808080"
          paginationBoxStyle={styles.pagination}
          ImageComponentStyle={styles.imgComponent}
        />
        <View style={styles.inputMainContainer}>
          <View style={styles.txt92Container}>
            <Text style={styles.txt92}>+92</Text>
          </View>
          <TouchableOpacity style={styles.mobileInput}>
            <TextInput placeholder="Phone number" fontSize={18} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.btnWithMobile}>Continue with Mobile Number</Text>
        </TouchableOpacity>
        <View style={styles.horizontalLineContainer}>
          <View style={styles.horizontalLine} />
          <View>
            <Text style={styles.txtOR}>or</Text>
          </View>
          <View style={styles.horizontalLine} />
        </View>
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => {
            signIn();
          }}>
          <View style={styles.signinBtn}>
            <Image
              style={styles.iconSize}
              source={require('../assets/images/search.png')}
            />
            <Text style={styles.btnGoogle}>Continue with Google</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnContainer}>
          <View style={styles.signinBtn}>
            <Image
              style={styles.iconSize}
              source={require('../assets/images/facebook.png')}
            />
            <Text style={styles.btnGoogle}>Continue with Facebook</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => navigation.navigate('EmailLogin')}>
          <View style={styles.signinBtn}>
            <Entypo name="mail" size={25} color="#000" />
            <Text style={styles.btnGoogle}>Continue with Email</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.txtTermsCondition}>
          By continuing you agree to our{'\n'}
          <Text style={styles.txtTermsCondition2}>Terms of use</Text> and{' '}
          <Text style={styles.txtprivacyPolicy}>Privacy Policy</Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  signinBtn: {
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
  },
  btnContainer: {
    borderWidth: 1,
    borderColor: '#000',
    height: 40,
    marginHorizontal: 30,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {backgroundColor: '#fff'},
  mainInnerConatiner: {height: 40},
  CrossBtn: {
    height: 40,
    width: 40,
    position: 'absolute',
    top: 10,
    right: 0,
  },
  scroll: {marginBottom: 10},
  lblWelcom: {
    fontSize: 20,
    fontWeight: '500',
    alignSelf: 'center',
    marginTop: 20,
  },
  pagination: {
    position: 'absolute',
    bottom: 0,
    padding: 0,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  imgComponent: {
    borderRadius: 15,
    width: '90%',
    marginTop: 35,
    resizeMode: 'stretch',
  },
  inputMainContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    margin: 30,
    paddingBottom: 10,
    paddingStart: 10,
  },
  txt92Container: {
    borderRightWidth: 2,
    borderRightColor: '#eee',
    paddingEnd: 17,
    textAlignVertical: 'center',
    justifyContent: 'center',
  },
  txt92: {
    textAlign: 'center',
    fontSize: 18,
  },
  btnWithMobile: {
    backgroundColor: '#00AEEF',
    color: '#fff',
    height: 40,
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    textAlignVertical: 'center',
    marginHorizontal: 30,
    borderRadius: 3,
  },
  horizontalLineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 30,
  },
  horizontalLine: {flex: 1, height: 1, backgroundColor: 'black'},
  txtOR: {width: 50, textAlign: 'center', color: '#000'},
  mobileInput: {paddingLeft: 17},
  btnGoogle: {
    color: '#000',
    height: 40,
    fontSize: 18,
    marginLeft: 20,
    textAlignVertical: 'center',
  },
  iconSize: {height: 25, width: 25},
  txtTermsCondition: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 30,
    color: '#808080',
  },
  txtTermsCondition2: {fontWeight: '600', textDecorationLine: 'underline'},
  txtprivacyPolicy: {
    color: '#000',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});
export default Login;
