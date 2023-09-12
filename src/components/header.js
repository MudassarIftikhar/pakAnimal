import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Cross from 'react-native-vector-icons/Feather';
const Header = props => {
  return (
    <View style={styles.header}>
      <View style={styles.headerBox}>
        <TouchableOpacity onPress={() => props.Navigation.goBack()}>
          <IonIcons name="arrow-back" size={30} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTxt}>{props.title}</Text>
        {props.CrossIcon ? (
          <Cross marginEnd={10} name="x" size={25} color="#fff" />
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    width: '100%',
    alignItems: 'center',
  },
  headerBox: {
    flexDirection: 'row',
    height: 40,
    width: '100%',
    alignSelf: 'flex-start',
    alignItems: 'center',
    right: 0,
    paddingTop: 5,
    paddingStart: 15,
  },
  headerTxt: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
    marginStart: 40,
    flex: 1,
  },
});
export default Header;
