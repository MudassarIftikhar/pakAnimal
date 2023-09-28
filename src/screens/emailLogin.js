import React, {useState} from 'react';
import {
  Alert,
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
import SignUp from './signup';
const EmailLogin = ({navigation}) => {
  const [state, setState] = useState(true);
  const [email, setEmail] = useState('mudassar12@gmail.com');
  const [password, setPassword] = useState('123456');
  const signinUser = () => {
    if (email !== '' && password !== '') {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          navigation.navigate('HomeActivity');
          console.log('User account signed in!');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }

          console.error(error);
        });
    } else {
      Alert.alert('Please put the right information');
    }
  };
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.goBack()}>
        <Cross name="x" size={20} color="#000" />
      </TouchableOpacity>
      <View style={styles.innerContainer}>
        <Text style={styles.lblEnterEmail}>Enter your Email</Text>
        <Text style={styles.lable}>Email Address</Text>
        <TextInput
          style={styles.textInputStyle}
          placeholderTextColor={'#000'}
          placeholder="username@email.com"
          value={email}
          onChangeText={text => setEmail(text)}
        />

        <Text style={styles.lable}>Password</Text>
        <View>
          <TextInput
            style={styles.textInputStyle}
            placeholderTextColor={'#000'}
            placeholder="write your passsword"
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

        <Text style={styles.txtForgotPassword}>Forgot Password?</Text>
        <TouchableOpacity style={styles.btnBox} onPress={() => signinUser()}>
          <Text style={styles.btnSignup}>Sign in</Text>
        </TouchableOpacity>

        <View style={styles.haveAccContainer}>
          <Text style={styles.lblAlreadyAcc}>Don't have an account yet? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.txtSignup}>Sign Up</Text>
          </TouchableOpacity>
        </View>
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
  btnBox: {
    backgroundColor: '#00AEEF',
    height: 40,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnSignup: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',

    fontWeight: '600',
  },
  lblAlreadyAcc: {
    fontSize: 16,
    color: '#000',
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
  txtForgotPassword: {
    fontSize: 15,
    color: '#000',
    fontWeight: '500',
    textDecorationLine: 'underline',
    marginTop: 20,
  },
  header: {
    height: 40,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    marginEnd: 10,
  },
  innerContainer: {margin: 30},
  lblEnterEmail: {fontWeight: '700', color: '#000', fontSize: 22},
  txtSignup: {
    fontWeight: '800',
    color: '#000',
    marginTop: 20,
  },
  haveAccContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default EmailLogin;
