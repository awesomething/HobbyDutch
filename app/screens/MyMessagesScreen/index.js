import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  ScrollView,
  Dimensions,
  TextInput,
  AsyncStorage,
  FlatList,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {size} from '../../helpers/devices';
import * as Statics from '../../helpers/statics';
import Chat from '../ChatScreen/index';

import database from '@react-native-firebase/database';

import EditProfile from '../EditProfileInfo/index';
import styles from './styles';
class MyMessagesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      name: '',
      details: '',
      matchedUser: '',
      imagesArray: [],
      myId: '',
      useName: '',
      LastMessage: '',
      messagesData: [],
    };
  }

  async componentDidMount() {
    const id = await AsyncStorage.getItem('id');

    this.setState({
      myId: id,
    });

    database()
      .ref('Chatlist')
      .child(this.state.myId)
      .on('value', querySnapShot => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let list = {...data};
        this.setState({
          messagesData: list,
        });
      });
  }
  catch(error) {
    Alert.alert(error.toString());
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          {/* <View
            style={{
              flexDirection: 'row',
              width: Statics.DEVICE_WIDTH,
              height: Statics.DEVICE_HEIGHT / 15,
            }}>
            <View
              style={{
                flex: 2,
                width: Statics.DEVICE_WIDTH / 1.2,
                marginTop: 0,
                height: Statics.DEVICE_HEIGHT / 10,
                marginLeft: size(3),
                marginBottom: 0,
                flexDirection: 'row',
                marginTop: size(10),
              }}>
              <Icon
                name="search"
                size={28}
                color="#FF4A00FF"
                style={{marginRight: 3, marginTop: 5}}
              />

              <TextInput
                placeholder="Search Matches"
                placeholderTextColor="#d1cfcf"
                style={{
                  width: Statics.DEVICE_WIDTH / 2,
                  height: Statics.DEVICE_HEIGHT / 18,
                  color: '#ABABAB',
                }}
              />

              <View style={{marginLeft: size(110), marginTop: size(8)}}>
                <Text
                  style={{
                    fontSize: size(15),
                    fontWeight: 'bold',
                    color: '#d1cfcf',
                  }}>
                  Search
                </Text>
              </View>
            </View>
          </View> */}
          <View
            style={{
              marginTop: size(30),
              marginLeft: size(15),
              flexDirection: 'row',
              width: Statics.DEVICE_WIDTH,
              height: Statics.DEVICE_HEIGHT / 28,
            }}>
            <Text style={{color: 'red', fontSize: size(16)}}>New Matches</Text>
            <Text
              style={{
                backgroundColor: 'red',
                color: 'white',
                width: 20,
                height: 20,
                textAlign: 'center',
                borderRadius: 30,
                marginLeft: 3,
                marginTop: 2,
              }}>
              1
            </Text>
          </View>

          <TouchableOpacity>
            <View
              style={{
                marginTop: 50,
                width: 60,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 30,
              }}>
              <Image
                style={{
                  height: Statics.DEVICE_HEIGHT / 9,
                  width: Statics.DEVICE_WIDTH / 5,
                  borderRadius: size(60),
                }}
                source={{
                  uri:
                    'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F10.jpg?alt=media&token=4e953cbc-de3f-41e8-ada4-9739dd2f8508',
                }}
              />
              <Text
                style={{
                  width: Statics.DEVICE_WIDTH / 5,
                  fontWeight: 'bold',
                  marginLeft: 30,
                  fontSize: size(14),
                }}>
                User Just Matched
              </Text>
            </View>
          </TouchableOpacity>

          <View
            style={{
              position: 'relative',
              marginTop: size(50),
              marginLeft: size(18),
            }}>
            <Text
              style={{fontSize: size(17), color: 'red', fontWeight: 'bold'}}>
              Messages
            </Text>
          </View>

          <View
            style={{
              flex: 2,

              marginBottom: 1,

              paddingRight: 2,
              paddingLeft: 2,
            }}>
            <FlatList
              data={Object.values(this.state.messagesData)}
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
                  <TouchableOpacity
                  
                  
                  
                  onPress={()=> this.props.navigation.navigate('Chat' , {'matchedUserId' :item.id , 'name' : item.name})}
                  >
                    <View
                      style={{
                        borderBottomRightRadius: 20,
                        backgroundColor: '#ededed',

                        paddingRight: 10,
                        paddingLeft: 0,
                        paddingTop: 5,
                        paddingBottom: 8,
                        borderRadius: 7,
                        marginTop: 7,
                        marginRight: 8,
                        marginLeft: 8,
                        flexDirection: 'column',
                      }}>
                        <View style={{flexDirection:'row'}}>

                          <Image
                          style={{height:50,width:50,borderRadius:60}}
                          source={require('../../../assests/images/usericon.jpg')}
                          />

                          <View style={{flex:1}}>


                          <Text
                        style={{
                          fontSize: 15,
                          marginTop: 3,
                          marginLeft: 10,
                          fontWeight: 'bold',
                        }}>
                        {item.name}
                      </Text>

                      <Text
                        style={{
                          fontSize: 8,
                          marginTop: 3,
                          marginLeft: 10,
                        }}>
                        {item.message}
                      </Text>
                          </View>
                          

                        </View>
                     

                      
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

// MessagesScreen.navigationOptions={
//   tabBarIcon:({tintColor, focused})=>(
//       <Icon
//           name={focused ? 'rocketchat' : 'rocketchat'}
//           color={tintColor}
//           size={20}
//       />
//   )
// }

const myStack = createStackNavigator({
  Home: {
    screen: MyMessagesScreen,
    navigationOptions: {
      header: null,
    },
  },
  Chat: {
    screen: Chat,
    navigationOptions: {
      header: null,
    },
  },
});

export default createAppContainer(myStack);
