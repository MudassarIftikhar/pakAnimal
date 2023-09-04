import React from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
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
// const state = {
//   images: [
//     require('./assets/images/slider1.png'),
//     require('./assets/images/slider2.png'),
//     require('./assets/images/slider3.png'),
//   ],
//   desc: ['Slider 1', 'Slider 2', 'Slider 3'],
//   currentIndex: 0,
// };
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
    <SafeAreaView style={{backgroundColor: '#fff'}}>
      <View style={{height: 40}}>
        <View
          style={{
            height: 40,
            width: 40,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'flex-end',
            right: 0,
          }}>
          <Cross name="x" size={20} color="#000" />
        </View>
      </View>
      <ScrollView style={{marginBottom: 10}}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '500',
            alignSelf: 'center',
            marginTop: 20,
          }}>
          Welcome to PakAimals
        </Text>
        <SliderBox
          images={images}
          autoplay
          circleLoop
          resizeMode={'center'}
          dotColor="#808080"
          inactiveDotColor="#808080"
          paginationBoxStyle={{
            position: 'absolute',
            bottom: 0,
            padding: 0,
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
          }}
          ImageComponentStyle={{
            borderRadius: 15,
            width: '90%',
            marginTop: 35,
            resizeMode: 'stretch',
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderBottomColor: '#eee',
            margin: 30,
            paddingBottom: 10,
            paddingStart: 10,
          }}>
          <View
            style={{
              borderRightWidth: 2,
              borderRightColor: '#eee',
              paddingEnd: 17,
              textAlignVertical: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
              }}>
              +92
            </Text>
          </View>
          <TouchableOpacity style={{paddingLeft: 17}}>
            <TextInput placeholder="Phone number" fontSize={18} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text
            style={{
              backgroundColor: '#00AEEF',
              color: '#fff',
              height: 40,
              fontSize: 18,
              fontWeight: '500',
              textAlign: 'center',
              textAlignVertical: 'center',
              marginHorizontal: 30,
              borderRadius: 3,
            }}>
            Continue with Mobile Number
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
            marginHorizontal: 30,
          }}>
          <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
          <View>
            <Text style={{width: 50, textAlign: 'center', color: '#000'}}>
              or
            </Text>
          </View>
          <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        </View>
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => {
            signIn();
          }}>
          <View style={styles.signinBtn}>
            <Image
              style={{height: 25, width: 25}}
              source={require('../assets/images/search.png')}
            />
            <Text
              style={{
                color: '#000',
                height: 40,
                fontSize: 18,
                marginLeft: 20,
                textAlignVertical: 'center',
              }}>
              Continue with Google
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnContainer}>
          <View style={styles.signinBtn}>
            <Image
              style={{height: 25, width: 25}}
              source={require('../assets/images/facebook.png')}
            />
            <Text
              style={{
                color: '#000',
                height: 40,
                fontSize: 18,
                marginLeft: 20,
                textAlignVertical: 'center',
              }}>
              Continue with Facebook
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => navigation.navigate('EmailLogin')}>
          <View style={styles.signinBtn}>
            <Entypo name="mail" size={25} color="#000" />
            <Text
              style={{
                color: '#000',
                height: 40,
                fontSize: 18,
                marginLeft: 20,
                textAlignVertical: 'center',
              }}>
              Continue with Email
            </Text>
          </View>
        </TouchableOpacity>
        <Text
          style={{
            alignSelf: 'center',
            alignItems: 'center',
            marginTop: 50,
            marginBottom: 30,
            color: '#808080',
          }}>
          By continuing you agree to our{'\n'}
          <Text style={{fontWeight: 600, textDecorationLine: 'underline'}}>
            Terms of use
          </Text>{' '}
          and{' '}
          <Text
            style={{
              color: '#000',
              fontWeight: '600',
              textDecorationLine: 'underline',
            }}>
            Privacy Policy
          </Text>
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
});
export default Login;
