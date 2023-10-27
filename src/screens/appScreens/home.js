import React, {Component, useState} from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeTabButton from '../../components/homeTabButton';
import OferingCard from '../../components/oferingCard';
import FeatureList from '../../components/featureList';
import ItemList from '../../components/itemList';
import CategoryTab from '../../router/homeCategoryTab';
import {Modal} from 'react-native-paper';
import Cross from 'react-native-vector-icons/Feather';
import axios from 'axios';
import LostAndFoundCard from '../../components/lostAndFoundCard';
class Home extends Component {
  // const [modalVisible, setModalVisible] = useState(false);
  // const route = useRoute();

  constructor(navigation) {
    super();
    this.state = {
      data: [],
    };
    this.navigation = navigation;
    // this.ShowModal = props.modal;
  }
  componentDidMount() {
    // this.getApiData();
  }
  async getApiData() {
    // let resp = await axios.get(
    //   'https://www.dailyfaceoff.com/_next/data/QCbC4gwcIQPVQ4S4akU2O/teams/vancouver-canucks/line-combinations.json?slug=vancouver-canucks',
    // ); //>>>>'http://192.168.1.16:3000/api/user/register'
    // console.log('Response>>>>', resp);
    // console.log('Data>>>>>', this.setState.data);
  }
  handleButtonClick = () => {
    return;
  };
  render() {
    const {customProp} = this.props.route.params?.customProp || false;

    return (
      <View>
        <View style={styles.headerContainer}>
          <StatusBar backgroundColor={'#b63439'} />
          <HomeTabButton />
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
        <ScrollView
          backgroundColor={'#fff'}
          horizontal={false}
          marginBottom={120}>
          <View marginBottom={20}>
            <Text style={styles.lbl1}>Browse Animal</Text>
            <View
              style={{
                height: 240,
              }}>
              <CategoryTab navigation={this.navigation} />
            </View>
            <Text style={styles.lbl1}>PakWild Offerings</Text>

            <OferingCard />
            <LostAndFoundCard />
            <FeatureList />

            <View style={styles.listLblContainer}>
              <Text style={styles.lbl1}>Managed By PakWild</Text>
              <Text style={styles.viewAll}>View All</Text>
            </View>
            <ItemList navigation={this.navigation} />
          </View>
        </ScrollView>
        {/* <View style={{height: 500, width: '100%'}}>
          {customProp && <SellNow />}
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 125,
    backgroundColor: '#b63439',
    paddingTop: 15,
  },

  searchBarContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginStart: 15,
    marginEnd: 15,
    alignItems: 'center',
    paddingStart: 15,
    height: 40,
  },

  txtInput: {
    fontSize: 18,
    textAlign: 'left',
    marginStart: 10,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    top: 2,
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
});
export default Home;
