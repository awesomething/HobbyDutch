import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Platform,
  ScrollView,
  StatusBar,
  ActivityIndicator,
  AsyncStorage,
  Share,
  TouchableOpacity,
} from 'react-native';
import {size} from '../../helpers/devices';
import * as Statics from '../../helpers/statics';
import Icon from 'react-native-vector-icons/MaterialIcons';
import EditProfile from '../EditProfileInfo/index';
import styles from './styles';
import database from '@react-native-firebase/database';

export default class MyProfile extends Component {
  constructor() {
    super();

    this.state = {
      text: 'ProfileLink......',
      dataSource: [],
      isLoading: true,
      userId: '',
    };
  }

  async componentDidMount() {
    const id = await AsyncStorage.getItem('id', 0);
    console.log(id);

    try {
      const mylist = [];
      this.setState({
        userId: id,
      });

      database()
        .ref('/Users/' + id)
        .on('value', querySnapShot => {
          let data = querySnapShot.val() ? querySnapShot.val() : {};
          let list = {...data};
          const {id, name, occupation, gender, phone, dob, email} = list;
          mylist.push({
            id: id,
            name: name,
            gender: gender,
            occupation: occupation,
            phone: phone,
            dob: dob,
            email: email,
          });

          this.setState({
            dataSource: mylist,
            isLoading: false,
          });

          console.log(this.state.dataSource);
        });
    } catch (error) {
      Alert.alert(error.toString());
    }
  }

  shareMessage = () => {
    Share.share({
      message: this.state.text.toString(),
    })
      .then(result => console.log(result))
      .catch(errorMsg => console.log(errorMsg));
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <StatusBar backgroundColor="#29AB87" barStyle="light-content" />

          <ActivityIndicator
            color="#29AB87"
            size="large"
            style={{marginTop: 10}}
          />
        </View>
      );
    }
    return (
      <ScrollView>
        {this.state.dataSource.map((item, key) => (
          <View style={styles.container}>
            <View style={{flex: 2}}>
              <View style={styles.profile_pic_container}>
                <Image
                  source={{
                    uri:
                      'https://firebasestorage.googleapis.com/v0/b/ebigs-tinder.appspot.com/o/General%2FGallery%2F14.jpg?alt=media&token=e87b6e59-c22c-45ab-ba2b-6f48c997d3cc',
                  }}
                  style={styles.profile_pic_style}
                />

                <Image
                  source={require('../../../assests/images/download.png')}
                  style={{
                    position: 'absolute',
                    width: Statics.DEVICE_WIDTH / 6,
                    height: Statics.DEVICE_HEIGHT / 11,
                    left: size(320),
                    top: size(330),
                  }}
                />

                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.profile_name_style}>{item.name}</Text>
                </View>

                <View style={{marginTop: size(10)}}>
                  <View
                    style={{flexDirection: 'row', width: Statics.DEVICE_WIDTH}}>
                    <Icon name={'work'} size={18} style={styles.detailsIcon} />
                    <Text style={styles.details}>{item.occupation} </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      width: Statics.DEVICE_WIDTH / 1.5,
                    }}>
                    <Icon
                      name={'person-outline'}
                      size={18}
                      style={styles.detailsIcon}
                    />
                    <Text style={styles.details}>
                      {item.gender} | {item.dob}{' '}
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', width: '75%'}}>
                    <Icon
                      name={'contact-phone'}
                      size={18}
                      style={styles.detailsIcon}
                    />
                    <Text style={styles.details}>
                      {item.phone} | {item.email}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    height: 1,
                    width: '100%',
                    backgroundColor: '#ebebe8',
                    marginTop: size(20),
                  }}
                />

                <View style={styles.tinder_plus_button_container}>
                  <TouchableOpacity style={styles.tinder_plus_button_style}>
                    <Text style={styles.tinder_button_text_style}>REPORT </Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={this.shareMessage}>
                  <View
                    style={{alignItems: 'center', width: Statics.DEVICE_WIDTH}}>
                    <Text style={styles.share}>SHARE THIS</Text>
                    <Text style={styles.shareL2}>
                      SEE WHAT A FRIEND THIINKS
                    </Text>
                  </View>
                </TouchableOpacity>

                <View
                  style={{
                    height: 1,
                    width: '100%',
                    backgroundColor: '#ebebe8',
                    marginTop: 10,
                  }}
                />
              </View>
            </View>

            <View style={{flex: 2}}>
              <View
                style={{
                  height: 1,
                  width: '100%',
                  backgroundColor: '#ebebe8',
                  marginTop: 0,
                }}
              />
              <View
                style={{
                  flex: 5,
                  justifyContent: 'flex-end',
                  marginBottom: size(20),
                  marginTop: size(250),
                }}>
                <View style={styles.navigation_container}>
                  <View style={styles.navigation_inner_container}>
                  
                      <Image
                        source={require('../../../assests/images/dislike.png')}
                        style={styles.button_style}
                      />
                  
                  </View>

                  <View style={styles.navigation_inner_container}>
                  
                      <Image
                        source={require('../../../assests/images/emoji.png')}
                        style={styles.button_style}
                      />
                   
                  </View>
                  <View style={styles.navigation_inner_container}>
                  
                      <Image
                        source={require('../../../assests/images/like.png')}
                        style={styles.button_style}
                      />
                   
                  </View>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    );
  }
}

// Profile.navigationOptions={
//   tabBarIcon:({tintColor, focused})=>(
//       <Icon
//           name={focused ? 'account-circle' : 'account-circle'}
//           color={tintColor}
//           size={25}
//       />
//   )
// }
