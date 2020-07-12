import React from 'react';
import {GiftedChat} from 'react-native-gifted-chat';

import {
  FlatList,
  AsyncStorage,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  Text,
  ScrollView,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
} from 'react-native';

import database from '@react-native-firebase/database';
import styles from './Style';
import moment from 'moment';

export default class Chat extends React.Component {
  constructor() {
    super();

    this.state = {
      messages: [],
      from_UserId: '',
      from_UserName: '',
      to_UserId: '',
      to_UserName: '',
      chat_Id: '',
    };
  }
  static navigationOptions = ({navigation}) => ({
    title: (navigation.state.params || {}).name || 'Scv Chat!',
  });

  componentDidMount = async () => {

    const matchedUserId = this.props.navigation.getParam('matchedUserId', 0);
    const matchedUserUserName= this.props.navigation.getParam('name', '');
    console.log(matchedUserUserName)
  
    const id = await AsyncStorage.getItem('id');
   
    this.setState({
      to_UserId:matchedUserId,
      to_UserName:matchedUserUserName,
      from_UserId: id,
    })

    this.fetchUserInfo();
  


    var senderId = this.state.from_UserId;
    var receiverId = this.state.to_UserId;
    const chatIDpre = [];
    chatIDpre.push(senderId);
    chatIDpre.push(receiverId);
    chatIDpre.sort();
    const chatId = chatIDpre.join('_');
    console.log('chatId' , chatId)
    this.setState({
      chat_Id: chatId,
    });
    console.log(this.state.chat_Id)

    this.fetchMessages();

    database()
      .ref('/Users/' + id)
      .on('value', querySnapShot => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};

        this.setState({
          from_UserName: data.name,
        });
      });
  };

  fetchUserInfo = () => {
    try {
      database()
        .ref('/Users/' + this.state.from_UserId)
        .on('value', querySnapShot => {
          let data = querySnapShot.val() ? querySnapShot.val() : {};
          let list = {...data};
          //console.log('User Data', list);

          this.setState({
           from_UserName:list.name
          });
        });
    } catch (error) {
      Alert.alert(error.toString());
    }
  };

  sendTextMessage = async () => {
    var message = this.state.message;
    var senderId = this.state.from_UserId;
    var senderName=this.state.from_UserName
  
    var receiverId = this.state.to_UserId;
    var recieverName=this.state.to_UserName

    database()
      .ref('Chats')
      .child(this.state.chat_Id)
      .push({
        senderId: senderId,
        receiverId: receiverId,
        senderName:senderName,
        recieverName:recieverName,
        message: message,
        messageType: 'text',
        startedAt: database.ServerValue.TIMESTAMP,
      })
      .then(() => {
        this.setState({
          message: '',
        });
      });
    database()
      .ref('Chatlist')
      .child(senderId)
      .child(receiverId)
      .set({
        id: receiverId,
        name:recieverName,
        message: message,
        createdAt: database.ServerValue.TIMESTAMP,
      });
    database()
      .ref('Chatlist')
      .child(receiverId)
      .child(senderId)
      .set({
        id: senderId,
        name:senderName,
        message: message,
        createdAt: database.ServerValue.TIMESTAMP,
      });
  };

  fetchMessages = async () => {
    var that = this;
    var query = database()
      .ref('Chats')
      .child(this.state.chat_Id)
      .orderByChild('startedAt')
      .limitToLast(20);
    query.on(
      'child_added',
      async function(snapshot) {
        if (snapshot.val()) {
          const {
            receiverId,
            senderId,
            message,
            startedAt,
            messageType,
          } = snapshot.val();

          that.setState({
            messages: [
              ...that.state.messages,
              {
                receiverId,
                senderId,
                message,
                startedAt,
                messageType,
              },
            ],
          });

          console.log(that.state.messages);
        }
      },
      function(error) {
        console.log(error.message);
      },
    );
  };

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <View style={{flex: 1}}>
          <View
            style={{
              flex: 2,
              justifyContent: 'space-between',
              marginBottom: 1,

              paddingRight: 2,
              paddingLeft: 2,
              backgroundColor: '#FF4A00FF',
            }}>
            <FlatList
              data={Object.values(this.state.messages)}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              ref="messages_flatlist"
              keyExtractor={(item, index) => index.toString()}
              onContentSizeChange={() =>
                this.refs.messages_flatlist.scrollToEnd()
              }
              renderItem={({item, index}) => {
                const timestamp = item.startedAt;

                return (
                  <View
                    style={{
                      borderBottomRightRadius: 20,
                      backgroundColor:
                        item.senderId == this.state.to_UserId
                          ? '#DCF8C6'
                          : '#FFFFFF',
                      alignSelf:
                        item.senderId == this.state.from_UserId
                          ? 'flex-end'
                          : 'flex-start',
                      paddingRight: 10,
                      paddingLeft: 10,
                      paddingTop: 5,
                      paddingBottom: 8,
                      borderRadius: 7,
                      marginTop: 7,
                      marginRight: 8,
                      marginLeft: 8,
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        marginTop: 3,
                        marginLeft: 10,
                        textAlign: 'right',
                      }}>
                      {item.message}
                    </Text>

                    <Text
                      style={{
                        fontSize: 8,
                        marginTop: 3,
                        marginLeft: 10,
                        textAlign: 'right',
                      }}>
                      {moment(timestamp).format('hh:mm A')}
                    </Text>
                  </View>
                );
              }}
            />
          </View>

          <View style={{flex: 1}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: 5,
                paddingBottom: 25,
                widht: '100%',
              }}>
              <TextInput
                style={{
                  borderRadius: 20,
                  width: '80%',
                  borderColor: 'white',
                  borderWidth: 2,
                  paddingLeft: 10,
                  paddingRight: 10,
                  backgroundColor: 'white',
                }}
                autoFocus={true}
                placeholder={'Type the message'}
                multiline={true}
                numberOfLines={0.1}
                onChangeText={message => this.setState({message})}
                value={this.state.message}
              />

              <TouchableOpacity
                onPress={this.sendTextMessage}
                style={{
                  backgroundColor: '#fff',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                }}>
                <Image
                  source={require('../../../assests/images/send.png')}
                  style={{marginLeft: 5, width: 35, height: 40}}
                  resizeMode={'contain'}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
