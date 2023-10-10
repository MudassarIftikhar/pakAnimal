import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
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
import PagerView from 'react-native-pager-view';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/AntDesign';
// import statusCodes along with GoogleSignin
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
GoogleSignin.configure();
const images = [
  {
    src: require('../assets/images/slider1.png'),
    text: 'Create alerts quickly and get notified when new listing become available',
    label: 'Create Quick Alerts',
  }, // Local image
  {
    src: require('../assets/images/slider2.png'),
    text: 'Easily save ads and accessories for a later time',
    label: 'Save Your Favourite Ads',
  },
  {
    src: require('../assets/images/slider3.png'),
    text: 'You can connect with thousands of buyers and quick search',
    label: 'Safely Connect with Buyers',
  },
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const viewPagerRef = useRef(null);
  const currentPageRef = useRef(0); // Create a ref to keep track of the current page

  useEffect(() => {
    // Your code to set up an interval and change pages programmatically
    const interval = setInterval(() => {
      if (viewPagerRef.current) {
        const nextPage = (currentPageRef.current + 1) % images.length;
        viewPagerRef.current.setPage(nextPage);
        currentPageRef.current = nextPage;
        setCurrentIndex(currentPageRef.current);
      }
    }, 3000); // Change image every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView style={styles.scroll}>
        <View style={styles.mainInnerConatiner}>
          <View style={styles.CrossBtn}>
            <Cross name="x" size={20} color="#000" />
          </View>
        </View>

        <Text style={styles.lblWelcom}>Welcome to PakAnimals</Text>
        <PagerView style={styles.pagerView} initialPage={0} ref={viewPagerRef}>
          {images.map((item, index) => (
            <View key={index} style={styles.page}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity>
                  <Icon name="left" size={30} />
                </TouchableOpacity>
                <Image source={item.src} style={styles.image} />
                <TouchableOpacity>
                  <Icon name="right" size={30} />
                </TouchableOpacity>
              </View>
              <Text style={styles.text}>{item.label}</Text>
              <Text style={styles.text}>{item.text}</Text>
            </View>
          ))}
        </PagerView>
        <View style={styleIndicator().indicatorBox}>
          {images.map((items, index) => {
            return (
              <View style={styleIndicator(currentIndex, index).indicators} />
            );
          })}
        </View>

        <View style={styles.inputMainContainer}>
          <View style={styles.txt92Container}>
            <Text style={styles.txt92}>+92</Text>
          </View>
          <TouchableOpacity style={styles.mobileInput}>
            <TextInput placeholder="Phone number" fontSize={18} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.btnBox}
          onPress={() => navigation.navigate('Signup')}>
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
const screenHeight = Dimensions.get('window').height;

const styleIndicator = (currentIndex, index) =>
  StyleSheet.create({
    indicatorBox: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    indicators: {
      height: currentIndex === index ? 10 : 8,
      width: currentIndex === index ? 16 : 8,
      borderRadius: 20,
      backgroundColor: currentIndex === index ? '#b63439' : '#d2d2d2',
      flexDirection: 'column',
      margin: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

const styles = StyleSheet.create({
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
    height: screenHeight * 0.12,
    bottom: 0,
    padding: 0,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  imgComponent: {
    borderRadius: 15,
    width: '90%',
    height: screenHeight * 0.5,
    resizeMode: 'center',
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
  btnBox: {
    alignItems: 'center',
    backgroundColor: '#b63439',
    height: 40,
    borderRadius: 3,
    marginHorizontal: 30,
    justifyContent: 'center',
  },
  btnWithMobile: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
    alignSelf: 'center',
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
  btnContainer: {
    borderWidth: 1,
    borderColor: '#000',
    height: 40,
    marginHorizontal: 30,
    borderRadius: 5,
    marginTop: 10,
  },
  signinBtn: {
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnGoogle: {
    color: '#000',
    fontSize: 18,
    marginLeft: 20,
  },
  iconSize: {height: 25, width: 25},
  txtTermsCondition: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 30,
    color: '#808080',
    paddingBottom: 10,
  },
  txtTermsCondition2: {fontWeight: '600', textDecorationLine: 'underline'},
  txtprivacyPolicy: {
    color: '#000',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  pagerView: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    marginTop: 10,

    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Login;
