import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesom from 'react-native-vector-icons/FontAwesome';

const More = ({navigation}) => {
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.imageMainContainer}>
          <Image
            style={styles.image}
            source={require('../../assets/images/user.png')}
            resizeMode={'cover'} // <- needs to be "cover" for borderRadius to take effect on Android
          />
          <View style={styles.imageInnerContaier}>
            <Text style={styles.userName}>user name</Text>
            <View>
              <Text style={styles.viewProfile}>View Profile {'>'}</Text>
            </View>
          </View>
        </View>
        <Text style={styles.lblText}>Personal</Text>

        {/* <TouchableOpacity
          style={styles.listContainer}
          onPress={() => navigation.navigate('Cart')}>
          <FontAwesom name="opencart" size={20} color="#808080" />
          <Text style={styles.listLblText}>My Cart</Text>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={25}
            color="#808080"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.listContainer}
          onPress={() => navigation.navigate('MyOrders')}>
          <FontAwesom name="opencart" size={20} color="#808080" />
          <Text style={styles.listLblText}>My Orders</Text>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={25}
            color="#808080"
          />
        </TouchableOpacity> */}

        <View style={styles.listContainer}>
          <EvilIcons name="heart" size={25} color="#808080" />
          <Text style={styles.listLblText}>Saved</Text>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={25}
            color="#808080"
          />
        </View>

        {/* <View style={styles.listContainer}>
          <MaterialCommunityIcon name="garage" size={20} color="#808080" />
          <Text style={styles.listLblText}>My Garage</Text>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={25}
            color="#808080"
          />
        </View> */}

        <View style={styles.listContainer}>
          <FontAwesom name="language" size={20} color="#808080" />
          <Text style={styles.listLblText}>Language</Text>
          <Text style={styles.language}>English</Text>
        </View>

        <Text style={styles.lblText}>Others</Text>

        <View style={styles.listContainer}>
          <FontAwesom name="opencart" size={20} color="#808080" />
          <Text style={styles.listLblText}>Videos</Text>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={25}
            color="#808080"
          />
        </View>

        <View style={styles.listContainer}>
          <FontAwesom name="opencart" size={20} color="#808080" />
          <Text style={styles.listLblText}>Blog</Text>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={25}
            color="#808080"
          />
        </View>

        <View style={styles.listContainer}>
          <FontAwesom name="opencart" size={20} color="#808080" />
          <Text style={styles.listLblText}>Contact Us</Text>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={25}
            color="#808080"
          />
        </View>

        <View style={styles.listContainer}>
          <FontAwesom name="opencart" size={20} color="red" />
          <Text style={styles.listLblText}>Logout</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageMainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 75,
  },
  imageInnerContaier: {flexDirection: 'column', marginStart: 20},
  userName: {
    fontSize: 22,
    fontWeight: '800',
    color: '#000',
  },
  viewProfile: {
    fontSize: 16,
    fontWeight: '500',
    color: '#00AEEF',
  },
  lblText: {
    fontSize: 18,
    marginStart: 20,
    marginBottom: 10,
    marginTop: 10,
  },
  listLblText: {
    flex: 1,
    fontSize: 17,
    color: '#000',
    marginLeft: 20,
    bottom: 2,
  },
  listContainer: {
    paddingStart: 20,
    marginTop: 10,
    paddingBottom: 10,
    marginEnd: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#000',
    borderBottomWidth: 0.2,
  },
  language: {
    color: '#00AEEF',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});
export default More;
