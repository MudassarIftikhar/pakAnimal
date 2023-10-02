import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import CallIcon from 'react-native-vector-icons/Ionicons';
import ReportIcon from 'react-native-vector-icons/MaterialIcons';
import DotIcon from 'react-native-vector-icons/Entypo';
import SendIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {red} from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

const InboxHeader = ({navigation}) => {
  return (
    <View style={styles.headerview}>
      <TouchableOpacity>
        <Icon
          name="arrowleft"
          size={30}
          color="#fff"
          style={styles.backarrow}
        />
      </TouchableOpacity>
      <Text style={styles.nametext}>Name</Text>
      <TouchableOpacity>
        <CallIcon
          name="call-outline"
          size={20}
          color="#fff"
          style={styles.call}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <ReportIcon
          name="report-problem"
          size={20}
          color="#fff"
          style={styles.report}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <DotIcon
          name="dots-three-vertical"
          size={20}
          color="#fff"
          style={styles.dot}
        />
      </TouchableOpacity>
    </View>
  );
};
const Inbox = ({navigation}) => {
  const msgsList = [
    {
      id: 1,
      msg1: 'final price keya he. Last word what u demand',
      msg2: '44000',
    },
  ];
  return (
    <SafeAreaView>
      <InboxHeader />
      <View style={styles.detailview}>
        <Image
          source={require('../../src/assets/images/cat.png')}
          style={styles.detailedimage}
        />
        <View style={styles.infoview}>
          <Text style={{flex: 0.4}}>Persion cat 1 year age</Text>
          <Text style={styles.pricetext}>PKR 45000 Thousand</Text>
        </View>
      </View>

      <View style={{margin: 15}}>
        <FlatList
          data={msgsList}
          horizontal={false}
          renderItem={({item}) => (
            <View>
              <View style={styles.mesg1View}>
                <Text style={styles.mesg1Text}>{item.msg1}</Text>
              </View>
              <View style={styles.mesg2View}>
                <Text style={styles.mesg2Text}>{item.msg2}</Text>
              </View>
            </View>
          )}
        />
      </View>
      <View>
        <View style={styles.inputcontainer}>
          <TextInput placeholder="Send Message" style={styles.msginput} />
          <TouchableOpacity>
            <SendIcon
              name="send-circle"
              color="skyblue"
              size={45}
              style={styles.sendicon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  headerview: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#b63439',
    justifyContent: 'space-between',
  },
  backarrow: {
    marginLeft: 13,
  },
  nametext: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    flex: 0.4,
  },
  dot: {
    marginRight: 10,
  },
  detailview: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    margin: 10,
    height: 80,
    alignItems: 'center',
  },
  detailedimage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  infoview: {
    marginLeft: 20,
  },
  pricetext: {
    flex: 0.3,
    color: 'black',
    fontWeight: 'bold',
  },
  mesg1View: {
    height: 50,
    width: 250,
    backgroundColor: '#0096FF',
    borderRadius: 8,
    flex: 1,
    marginLeft: 130,
  },
  mesg1Text: {
    margin: 5,
    fontSize: 15,
  },
  mesg2View: {
    height: 40,
    width: 60,
    backgroundColor: '#D3D3D3',
    borderRadius: 8,
    marginTop: 10,
  },
  mesg2Text: {
    margin: 8,
    fontSize: 15,
  },
  inputcontainer: {
    backgroundColor: 'white',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 485,
  },
  msginput: {
    flex: 1,
    backgroundColor: 'white',
    height: 40,
    margin: 10,
  },
});
export default Inbox;
