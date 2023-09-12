/* eslint-disable no-alert */
import React, {useState} from 'react';
import {services} from '../utils/api/services';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Cross from 'react-native-vector-icons/Feather';
import auth from '@react-native-firebase/auth';

const SignUp = ({navigation}) => {
  const [state, setState] = useState(true);
  const [state2, setState2] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const createUser = () => {
    // auth()
    //   .createUserWithEmailAndPassword(email, password)
    //   .then(() => {
    //     console.log('User account created & signed in!');
    //   })
    //   .catch(error => {
    //     if (error.code === 'auth/email-already-in-use') {
    //       console.log('That email address is already in use!');
    //     }
    //     if (error.code === 'auth/invalid-email') {
    //       console.log('That email address is invalid!');
    //     }
    //     console.error(error);
    //   });

    if (
      email !== '' &&
      fullName !== '' &&
      password !== '' &&
      confirmPassword !== ''
    ) {
      if (password.length >= 8 && password === confirmPassword) {
        services
          .userRegistration(email, fullName, password)
          .then(res => {
            alert('Successfully Registered');
          })
          .catch(err => {
            console.log('error.....', JSON.stringify(err));
          });
      } else {
        alert('Please enter valid Password');
      }
    } else {
      alert('All fields are required');
    }
  };
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.goBack()}>
        <Cross name="x" size={20} color="#000" />
      </TouchableOpacity>
      <View style={styles.innerMainContaier}>
        <Text style={styles.lableLetsGo}>Let's get you started! </Text>
        <Text style={styles.lable}>Email Address</Text>
        <TextInput
          style={styles.textInputStyle}
          placeholderTextColor={'#000'}
          placeholder="username@email.com"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Text style={styles.lable}>Full Name</Text>
        <TextInput
          style={styles.textInputStyle}
          placeholderTextColor={'#000'}
          placeholder="Enter your full name here"
          value={fullName}
          onChangeText={text => setFullName(text)}
        />
        <Text style={styles.lable}>Password</Text>
        <View>
          <TextInput
            style={styles.textInputStyle}
            placeholderTextColor={'#000'}
            placeholder="set a new passsword"
            secureTextEntry={state}
            autoCompleteType="password"
            autoCapitalize="none"
            autoCorrect={false}
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.visibilityBtn}
            onPress={() => setState(!state)}>
            <Image
              source={
                !state
                  ? require('../assets/images/view.png')
                  : require('../assets/images/hide.png')
              }
              style={styles.btnImage}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.lable}>Confirm Password</Text>
        <View>
          <TextInput
            style={styles.textInputStyle}
            placeholderTextColor={'#000'}
            placeholder="Enter your password again"
            secureTextEntry={state2}
            autoCompleteType="password"
            autoCapitalize="none"
            autoCorrect={false}
            value={confirmPassword}
            onChangeText={text => setConfirmPassword(text)}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.visibilityBtn}
            onPress={() => setState2(!state2)}>
            <Image
              source={
                !state2
                  ? require('../assets/images/view.png')
                  : require('../assets/images/hide.png')
              }
              style={styles.btnImage}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => createUser()}>
          <Text style={styles.btnSignup}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.haveAccContainer}>
          <Text style={styles.lblAlreadyAcc}> Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('EmailLogin')}>
            <Text style={styles.txtSingIn}>Sign In</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.lable2}>
          {' '}
          By continuing you agree to our{'\n'}{' '}
          <Text style={styles.lblTermsPolicy}>Terms of Service</Text> &{' '}
          <Text style={styles.lblTermsPolicy}>Privacy Policy</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  visibilityBtn: {
    position: 'absolute',
    right: 1,
    bottom: 1,
    padding: 0,
    paddingBottom: 8,
  },
  btnImage: {
    height: 20,
    width: 20,
  },
  textInputStyle: {
    height: 40,
    color: '#000',
    fontSize: 16,
    borderBottomColor: '#707070',
    borderBottomWidth: 1,
    textAlignVertical: 'bottom',
    paddingStart: 0,
    paddingBottom: 9,
  },
  lable: {
    fontSize: 16,
    color: '#808080',
    marginTop: 15,
  },
  btnSignup: {
    backgroundColor: '#00AEEF',
    color: '#fff',
    height: 40,
    fontSize: 18,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: 20,
    fontWeight: '600',
  },
  lblAlreadyAcc: {
    fontSize: 16,
    color: '#000',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  lable2: {
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 30,
    color: '#808080',
    fontWeight: '700',
    fontSize: 16,
  },
  lblTermsPolicy: {
    alignSelf: 'center',
    fontSize: 14,
    color: '#808080',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  header: {
    height: 40,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    marginEnd: 10,
  },
  lableLetsGo: {fontWeight: '700', color: '#000', fontSize: 22},
  txtSingIn: {
    fontWeight: '800',
    color: '#000',
    marginTop: 20,
  },
  haveAccContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  innerMainContaier: {margin: 30},
});
export default SignUp;
