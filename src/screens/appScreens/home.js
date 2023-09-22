import React, {Component} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeTabButton from '../../components/homeTabButton';
import OferingCard from '../../components/oferingCard';
import FeatureList from '../../components/featureList';
import ItemList from '../../components/itemList';
import CategoryTab from '../../router/homeCategoryTab';

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
            <View style={{width: '100%', height: 350}}>
              <CategoryTab />
            </View>
            {/* <Categories /> */}
            <Text style={styles.lbl1}>PakWild Offerings</Text>

            <OferingCard />
            <FeatureList />

            <View style={styles.listLblContainer}>
              <Text style={styles.lbl1}>Managed By PakWild</Text>
              <Text style={styles.viewAll}>View All</Text>
            </View>
            <ItemList />
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
