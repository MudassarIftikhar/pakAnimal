import React, {Component, useState} from 'react';
import {
  FlatList,
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
import {useRoute} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Ionicons from 'react-native-vector-icons/Ionicons';
import SellNow from './sellNow';
import axios from 'axios';
import CategoryTab from '../../router/homeCategoryTab';
import {Item} from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
const tabButton = [
  {
    id: '1',
    name: 'Pets',
  },
  {
    id: '2',
    name: 'Farm Animal',
  },
  {
    id: '3',
    name: 'Accessories',
  },
  {
    id: '4',
    name: 'Pets',
  },
  {
    id: '5',
    name: 'Farm Animal',
  },
];
const appFeatureList = [
  {
    id: '1',
    title: 'Title',
    lable: 'PakWild',
    image: require('../../assets/images/Dogs-01.png'),
  },
  {
    id: '2',
    title: 'Text1',
    lable: 'PakWild',
    image: require('../../assets/images/Dogs-01.png'),
  },
  {
    id: '3',
    title: 'Text1',
    lable: 'PakWild',
    image: require('../../assets/images/Dogs-01.png'),
  },
  {
    id: '4',
    title: 'Text1',
    lable: 'PakWild',
    image: require('../../assets/images/Dogs-01.png'),
  },
];
const itemList = [
  {
    id: '1',
    title: 'Text1',
    price: '5000',
    city: 'Faisalabad',
    discription: 'Text text text',
    image: require('../../assets/images/Dogs-01.png'),
  },
  {
    id: '2',
    title: 'Text2',
    price: '10000',
    city: 'Lahore',
    discription: 'Text text text',

    image: require('../../assets/images/horse.png'),
  },
];
class Home extends Component {
  // const [modalVisible, setModalVisible] = useState(false);
  // const route = useRoute();
  // console.log('Roter Name>>>>>>', route.name);
  constructor(navigation) {
    super();
    this.state = {
      data: [],
    };
    this.navigation = navigation;
  }
  componentDidMount() {
    // this.getApiData();
  }
  async getApiData() {
    // let resp = await axios.get('http://192.168.1.16:3000/api/user/register');
    // console.log('Response>>>>', resp.data);
    // console.log('Data>>>>>',this.setState.data)
  }
  render() {
    return (
      <View>
        <View style={styles.headerContainer}>
          <View style={styles.tabBtnContainer}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {tabButton.map((item, index) => (
                <TouchableOpacity style={styles.btnContainer}>
                  <Text style={styles.tabBtnTxt}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          <View style={styles.searchBarContainer}>
            <AntDesign name="search1" size={20} color="#000" />
            <TextInput
              style={styles.txtInput}
              placeholderTextColor="#08080"
              placeholder="Search animal"
            />

            <View style={styles.searchLocationContainer}>
              <Ionicons name="location-sharp" size={15} color="#b63439" />
              <Text style={styles.locationTxt} numberOfLines={1}>
                Faisalabad
              </Text>
            </View>
          </View>
        </View>
        <ScrollView marginBottom={120}>
          <View marginBottom={20}>
            <Text style={styles.lbl1}>Browse Animal</Text>
            <Text style={styles.lbl1}>PakWild Offerings</Text>

            <TouchableOpacity onPress={{}} style={styles.postContainer}>
              <View style={{flexDirection: 'row', flex: 1}}>
                <View style={{flexDirection: 'column', flex: 1, marginEnd: 10}}>
                  <Text style={styles.postHeading}>Sell Your Pet!</Text>
                  <Text style={styles.postDiscription} numberOfLines={2}>
                    Connect with Caring Pet Owners and Verified Buyers
                  </Text>
                </View>
                <Image
                  style={styles.postImage}
                  source={require('../../assets/images/splash_icon.png')}
                />
              </View>
              <View style={styles.txtLblMainContainer}>
                <View style={styles.txtLblContainer}>
                  <Ionicons
                    name="checkmark-circle"
                    size={25}
                    color={'#b63439'}
                  />
                  <Text style={styles.txtLbl2}>text 1</Text>
                </View>
                <View style={styles.txtLblContainer}>
                  <Ionicons
                    name="checkmark-circle"
                    size={25}
                    color={'#b63439'}
                  />
                  <Text style={styles.txtLbl2}>text 2</Text>
                </View>
                <View style={styles.txtLblContainer}>
                  <Ionicons
                    name="checkmark-circle"
                    size={25}
                    color={'#b63439'}
                  />
                  <Text style={styles.txtLbl2}>text 3</Text>
                </View>
                <Ionicons
                  style={styles.btnNext}
                  name="chevron-forward-sharp"
                  size={25}
                />
              </View>
              {/* */}
            </TouchableOpacity>
            <View style={{flex: 1}}>
              <FlatList
                style={styles.FlatlistStyles}
                data={appFeatureList}
                horizontal={false}
                numColumns={2}
                renderItem={({item}) => (
                  <TouchableOpacity style={styles.featuredListContainer}>
                    <View style={{flexDirection: 'column'}}>
                      <Image style={styles.featureImg} source={item.image} />
                      <Text style={styles.lblTxt}>{item.lable}</Text>
                      <View style={styles.titleContainer}>
                        <Text numberOfLines={2} style={styles.titleTxt}>
                          {item.title}
                        </Text>
                        <Ionicons
                          style={styles.btnNext}
                          name="chevron-forward-sharp"
                          size={25}
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
                keyExtractor={this._keyExtractor}
              />
            </View>
            <View style={styles.listLblContainer}>
              <Text style={styles.lbl1}>Managed By PakWild</Text>
              <Text style={styles.viewAll}>View All</Text>
            </View>

            <ScrollView
              horizontal={true}
              marginStart={15}
              showsHorizontalScrollIndicator={false}>
              {itemList.map((item, index) => (
                <TouchableOpacity
                  style={styles.itemListContaier}
                  onPress={() =>
                    this.props.navigation.navigate('PostViewScreen', {
                      postTitle: item.title,
                      postPrice: item.price,
                      postCity: item.city,
                      postDiscription: item.discription,
                      postImage: item.image,
                    })
                  }>
                  <View style={{flexDirection: 'column'}}>
                    <Image style={styles.itemImage} source={item.image} />
                    <View style={{marginStart: 10}}>
                      <Text style={styles.itemTitleTxt}>{item.title}</Text>
                      <Text style={styles.itemCurrencyTxt}>
                        PKR{' '}
                        <Text style={styles.itemPriceTxt}>{item.price}</Text>
                      </Text>
                      <Text style={styles.itemCityTxt}>{item.city}</Text>
                      <Text marginBottom={10} style={styles.itemCityTxt}>
                        {item.discription}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 125,
    backgroundColor: '#b63439',
  },
  tabBtnContainer: {
    flexDirection: 'row',
    height: 60,
    width: '100%',
    alignSelf: 'flex-start',
    alignItems: 'center',
    right: 0,
    marginStart: 5,
  },
  btnContainer: {
    backgroundColor: '#eee',
    height: 30,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    paddingStart: 5,
    paddingEnd: 5,
    margin: 10,
  },
  tabBtnTxt: {
    color: '#000',
    fontSize: 17,
    padding: 2,
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    flexWrap: 'wrap',
    flexGrow: 1,
    marginStart: 4,
    marginEnd: 4,
  },

  searchBarContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginStart: 15,
    marginEnd: 15,
    alignItems: 'center',
    paddingStart: 15,
  },

  txtInput: {
    fontSize: 18,
    textAlign: 'left',
    marginStart: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderEndWidth: 1,
    flex: 1,
  },
  searchLocationContainer: {
    flexDirection: 'row',
    borderStartWidth: 1,
    borderStartColor: '#b63439',
    paddingStart: 10,
    alignItems: 'center',
    paddingEnd: 20,
  },
  locationTxt: {
    width: 60,
    marginStart: 5,
    textAlign: 'center',
    color: '#b63439',
    fontSize: 14,
  },
  lbl1: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
    margin: 20,
  },
  postOuterContainer: {},
  postContainer: {
    elevation: 5,
    borderRadius: 20,
    backgroundColor: '#fff',
    paddingLeft: 10,
    padding: 10,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    paddingBottom: 10,
    flexWrap: 'wrap',
  },
  postHeading: {
    fontSize: 20,
    fontWeight: '600',
    margin: 10,
    color: '#b63439',
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
  txtLblMainContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    marginStart: 10,
    marginBottom: 10,
  },
  txtLblContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginStart: 10,
  },
  txtLbl2: {
    fontSize: 16,
    color: '#000',
    bottom: 2,
    marginStart: 7,
  },
  btnNext: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  FlatlistStyles: {
    width: '100%',
    margin: 10,
  },
  featuredListContainer: {
    height: 150,
    width: '45%',
    borderRadius: 15,
    backgroundColor: '#fff',
    margin: 5,
  },
  featureImg: {
    width: '100%',
    height: 70,
    resizeMode: 'center',
    marginTop: 10,
  },
  lblTxt: {
    color: '#b63439',
    paddingStart: 10,
    marginTop: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    paddingEnd: 10,
    marginBottom: 10,
  },
  titleTxt: {
    color: '#000',
    fontSize: 20,
    fontWeight: '600',
    paddingStart: 10,
    marginEnd: 10,
    marginTop: 5,
    flex: 1,
  },
  listLblContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewAll: {
    position: 'absolute',
    right: 0,
    color: '#b63439',
    marginRight: 15,
  },
  itemListContaier: {
    width: 200,
    borderRadius: 15,
    backgroundColor: '#fff',
    margin: 8,
    flexGrow: 1,
  },
  itemImage: {
    width: '100%',
    height: 110,
    marginTop: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  itemTitleTxt: {
    fontSize: 17,
    color: '#000',
    fontWeight: '500',
    marginTop: 10,
  },
  itemCurrencyTxt: {
    fontSize: 20,
    color: '#000',
    marginTop: 5,
  },
  itemPriceTxt: {
    fontWeight: '600',
  },
  itemCityTxt: {
    fontSize: 14,
    marginTop: 5,
  },
});
export default Home;
