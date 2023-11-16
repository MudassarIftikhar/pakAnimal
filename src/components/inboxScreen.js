import React, {useRef} from 'react';
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
import DescriptionIcon from 'react-native-vector-icons/MaterialIcons';
import SendIcon from 'react-native-vector-icons/MaterialCommunityIcons';

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
      {/* <TouchableOpacity>
        <CallIcon
          name="call-outline"
          size={20}
          color="#fff"
          style={styles.call}
        />
      </TouchableOpacity> */}
      <View style={styles.headericonscontainer}>
        <TouchableOpacity>
          <ReportIcon
            name="report-problem"
            size={20}
            color="#fff"
            style={styles.report}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <DescriptionIcon
            name="description"
            size={20}
            color="#fff"
            style={styles.dot}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const Inbox = ({navigation}) => {
  const msgsList = [
    {id: '1', text: 'Hello!', isUser: true},
    {id: '2', text: 'Hi there!', isUser: false},
    {id: '3', text: 'How are you?', isUser: true},
    {id: '4', text: 'I am good. Thanks!', isUser: false},
    {id: '5', text: 'Hello!', isUser: true},
    {id: '6', text: 'Hi there!', isUser: false},
    {id: '7', text: 'How are you?', isUser: true},
    {id: '8', text: 'I am good. Thanks!', isUser: false},
    {id: '9', text: 'Hello!', isUser: true},
    {id: '10', text: 'Hi there!', isUser: false},
    {id: '11', text: 'How are you?', isUser: true},
    {id: '12', text: 'I am good. Thanks!', isUser: false},

    {id: '13', text: 'Hello!', isUser: true},
    {id: '14', text: 'Hi there!', isUser: false},
    {id: '15', text: 'How are you?', isUser: true},
    {id: '16', text: 'I am good. Thanks!', isUser: false},
  ];

  return (
    <SafeAreaView flex={1}>
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
      <View style={{flex: 0.9, padding: 10}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={msgsList}
          horizontal={false}
          inverted={true}
          renderItem={({item}) => (
            <View
              style={item.isUser ? styles.userMessage : styles.otherMessage}>
              <Text style={styles.messageText}>{item.text}</Text>
            </View>
          )}
        />
      </View>

      <View style={styles.inputcontainer}>
        <TextInput placeholder="Send Message" style={styles.msginput} />
        <TouchableOpacity>
          <SendIcon
            name="send-circle"
            color="#b63439"
            size={45}
            style={styles.sendicon}
          />
        </TouchableOpacity>
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
  },
  backarrow: {
    marginLeft: 13,
  },
  nametext: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
    flex: 1,
  },
  dot: {
    marginRight: 20,
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

  inputcontainer: {
    backgroundColor: '#fff',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    elevation: 5,
  },
  msginput: {
    flex: 1,
    backgroundColor: 'white',
    height: 40,
    margin: 10,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#b63439',
    padding: 10,
    borderRadius: 10,
    maxWidth: '70%',
    marginBottom: 10,
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 10,
    maxWidth: '70%',
    marginBottom: 10,
  },
  messageText: {
    fontSize: 16,
    color: '#fff',
  },
  headericonscontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 0.4,
  },
});
export default Inbox;
