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

    // {
    //   id: 1,
    //   msg1: 'final price keya he. Last word what u demand',
    //   msg2: '44000',
    //   sendBy: 'sender',
    // },
    // {
    //   id: 1,
    //   msg1: 'final price keya he. Last word what u demand',
    //   msg2: '44000',
    //   sendBy: 'reciever',
    // },
    // {
    //   id: 1,
    //   msg1: 'final price keya he. Last word what u demand',
    //   msg2: '44000',
    //   sendBy: 'sender',
    // },
    // {
    //   id: 1,
    //   msg1: 'final price keya he. Last word what u demand',
    //   msg2: '44000',
    //   sendBy: 'reciever',
    // },
    // {
    //   id: 1,
    //   msg1: 'final price keya he. Last word what u demand',
    //   msg2: '44000',
    //   sendBy: 'sender',
    // },
    // {
    //   id: 1,
    //   msg1: 'final price keya he. Last word what u demand',
    //   msg2: '44000',
    //   sendBy: 'reciever',
    // },
    // {
    //   id: 1,
    //   msg1: 'final price keya he. Last word what u demand',
    //   msg2: '44000',
    //   sendBy: 'sender',
    // },
    // {
    //   id: 1,
    //   msg1: 'final price keya he. Last word what u demand',
    //   msg2: '44000',
    //   sendBy: 'reciever',
    // },
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
          data={msgsList}
          horizontal={false}
          renderItem={({item}) => (
            // <View style={{flexDirection: 'row'}}>
            //   {item.sendBy == 'sender' ? (
            //     <View style={styles.mesg1View}>
            //       <Text style={styles.mesg1Text}>{item.msg1}</Text>
            //       <Text style={styles.mesg1Text}>{item.sendBy}</Text>
            //     </View>
            //   ) : (
            //     <View style={styles.mesg2View}>
            //       <Text style={styles.mesg2Text}>{item.msg2}</Text>
            //       <Text style={styles.mesg1Text}>{item.sendBy}</Text>
            //     </View>
            //   )}
            // </View>
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
  // mesg1View: {
  //   height: 50,
  //   width: 250,
  //   backgroundColor: '#0096FF',
  //   borderRadius: 8,
  //   position: 'absolute',
  //   right: 0,
  //   marginRight: 10,
  // },
  // mesg1Text: {
  //   margin: 5,
  //   fontSize: 15,
  // },
  // mesg2View: {
  //   height: 40,
  //   width: 70,
  //   backgroundColor: '#D3D3D3',
  //   borderRadius: 8,
  //   marginTop: 50,
  // },
  // mesg2Text: {
  //   margin: 8,
  //   fontSize: 15,
  // },
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
});
export default Inbox;
