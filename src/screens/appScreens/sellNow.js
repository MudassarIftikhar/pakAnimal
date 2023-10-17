import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Modal} from 'react-native-paper';
import Cross from 'react-native-vector-icons/Feather';
const SellNow = ({navigation, props}) => {
  //const [showModal, setShowModal] = useState(false);

  return (
    // <View style={styles.main}>

    <Modal
      style={styles.main}
      visible={true}
      transparent={true}
      animationType="slide">
      <View style={styles.modalView}>
        <TouchableOpacity
          style={styles.header}
          onPress={() => navigation.navigate('Home')}>
          <Cross name="x" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.text1}>What do you want to sell?</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity
            style={styles.iconSubContainer}
            onPress={() => navigation.navigate('ChooseAPlan', {type: 'Pet'})}>
            <Image
              resizeMode={'center'}
              style={styles.icon}
              source={require('../../assets/images/Dogs-01.png')}
            />
            <Text style={styles.textIcon}>Pets</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconSubContainer}
            onPress={() => navigation.navigate('ChooseAPlan', {type: 'Farm'})}>
            <Image
              resizeMode={'center'}
              style={styles.icon}
              source={require('../../assets/images/FarmAnimals-01.png')}
            />
            <Text style={styles.textIcon}>Farm Animals</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconSubContainer}
            onPress={() =>
              navigation.navigate('SellYourCar', {type: 'Accessories'})
            }>
            <Image
              resizeMode={'center'}
              style={styles.icon}
              source={require('../../assets/images/PetAccessories-01.png')}
            />
            <Text style={styles.textIcon}>Accessories</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>

    // </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'rgba(52, 52, 52, 0.1)',
    flex: 1,
    justifyContent: 'flex-end',
  },
  subContainer: {
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#eee',
    borderRadius: 30,
    textAlign: 'right',
    alignSelf: 'flex-end',
    margin: 15,
    padding: 5,
  },
  text1: {
    fontSize: 23,
    color: '#000',
    fontWeight: '600',
    textAlign: 'center',
  },

  modalView: {
    elevation: 3,
    shadowColor: 'black',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'flex-end',
    bottom: 0,
    backgroundColor: '#fff',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  iconSubContainer: {
    flexDirection: 'column',
    marginTop: 30,
    marginBottom: 40,
    marginStart: 10,
  },
  icon: {
    backgroundColor: '#eee',
    borderRadius: 30,
    padding: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
  },
  textIcon: {
    justifyContent: 'center',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    color: '#000',
  },
});
export default SellNow;
