import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const CheckOutSecond = ({route, navigation}) => {
  //   console.log('Type>>>>', route);
  return (
    <View flex={1}>
      <ScrollView>
        <View>
          <StatusBar translucent backgroundColor={'rgba(0,0,0,0)'} />
          <View style={styles.imageMainContainer}>
            {/* <Image style={styles.itemImage} source={} /> */}
            <View style={styles.imageTxtContainer}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <IonIcons name="chevron-back-sharp" size={30} color="#fff" />
              </TouchableOpacity>
              <Text style={styles.itemName}>{}</Text>
            </View>
            <View style={styles.picQty}>
              <Text style={styles.picQtyTxt}>1/5</Text>
            </View>
            <View style={styles.imageBtnContainer}>
              <Entypo
                style={styles.btnShare}
                name="share"
                size={20}
                color="#000"
              />
              <Entypo
                style={styles.btnShare}
                name="heart"
                size={20}
                color="#B2BEB5"
              />
            </View>
          </View>
          <Text style={styles.postTitle}>{}</Text>
          <Text style={styles.postPrice}>PKR {}</Text>
          <View style={styles.postCityContainer}>
            <EvilIcons name="location" size={20} color="B2BEB5" />
            <Text>{}</Text>
          </View>
          <View style={styles.horizontolLine} />

          <Text style={styles.lbl1}>Discription</Text>
          <Text style={styles.discriptionTxt}>{}</Text>
          <View style={styles.horizontolLine} />
          <Text style={styles.lbl1}>Seller Comment</Text>
          <Text style={styles.discriptionTxt}>{}</Text>
          <View style={styles.horizontolLine} />
          <Text style={styles.lbl1}>Seller Detail</Text>
          <Text style={styles.discriptionTxt}>{}</Text>
        </View>
      </ScrollView>
      <View style={styles.btnMainContainer}>
        <TouchableOpacity style={styles.btnContainer}>
          <FontAwesome name="phone" size={20} color={'#fff'} />
          <Text style={styles.btnCallTxt}>Add Post</Text>
        </TouchableOpacity>
        {/* <View style={styles.btnContactContainer}>
          <TouchableOpacity style={styles.btnOuterContact}>
            <IonIcons
              name="chatbox-ellipses-outline"
              size={20}
              color={'#00AEEF'}
            />
            <Text style={styles.btnContact}>SMS</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnOuterContact}>
            <IonIcons name="chatbubbles-outline" size={20} color={'#00AEEF'} />
            <Text style={styles.btnContact}>Chat</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnOuterContact}>
            <Image
              style={{height: 20, width: 20}}
              source={require('../../../assets/images/social.png')}
            />
            <Text style={styles.btnContact}>WhatsApp</Text>
          </TouchableOpacity>
        </View>*/}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageMainContainer: {
    backgroundColor: 'rgba(0,0,0,0)',
    alignItems: 'center',
  },
  imageTxtContainer: {
    flexDirection: 'row',
    height: 40,
    width: '100%',
    alignSelf: 'flex-start',
    alignItems: 'center',
    right: 0,
    paddingTop: 5,
    position: 'absolute',
    top: 40,
    left: 0,
  },
  itemName: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
    marginStart: 20,
  },
  postTitle: {
    fontSize: 23,
    fontWeight: '400',
    color: '#000',
    marginStart: 15,
    marginTop: 10,
  },
  postDiscription: {
    fontSize: 16,
    marginLeft: 10,
    color: '#000',
  },
  postCityContainer: {
    flexDirection: 'row',
    marginStart: 10,
    marginTop: 5,
  },
  postPrice: {
    fontSize: 19,
    fontWeight: '500',
    color: '#000',
    marginStart: 15,
    marginTop: 2,
  },
  itemImage: {
    height: 300,
    width: '100%',
  },
  picQtyTxt: {
    color: '#ffff',
    marginHorizontal: 5,
    fontWeight: '700',
    fontSize: 15,
  },
  picQty: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    flexWrap: 'wrap',
    backgroundColor: '#000',
    opacity: 0.6,
    padding: 3,
    borderRadius: 3,
    marginStart: 20,
    marginBottom: 15,
  },
  imageBtnContainer: {
    position: 'absolute',
    right: 10,
    bottom: 15,
    flexDirection: 'row',
  },
  btnShare: {
    backgroundColor: '#eee',
    borderRadius: 20,
    padding: 10,
    marginStart: 15,
  },
  btnMainContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  btnContainer: {
    flexDirection: 'row',
    backgroundColor: '#00AEEF',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 5,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 15,
  },
  btnCallTxt: {
    fontSize: 16,
    color: '#fff',
    marginStart: 15,
  },
  btnContactContainer: {
    flexDirection: 'row',
    paddingStart: 30,
    justifyContent: 'space-between',
    paddingEnd: 30,
    paddingBottom: 20,
  },
  btnOuterContact: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContact: {
    color: '#00AEEF',
    fontSize: 18,
    marginStart: 5,
    alignItems: 'center',
  },
  horizontolLine: {
    borderTopWidth: 1,
    borderTopColor: '#B2BEB5',
    marginTop: 10,
  },
  lbl1: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 15,
    marginStart: 15,
  },
  discriptionTxt: {
    marginStart: 15,
  },
});
export default CheckOutSecond;
