import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  AsyncStorage,
  StatusBar,
  ScrollView,
  Dimensions,
  Button,
  TextInput,
  Switch,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  Alert,
} from 'react-native';

import styles from './style';
import database from '@react-native-firebase/database';

export default class NotificationSettings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eventDutchSwitch: false,
      chatSwitch: false,
      chatLikesSwitch: false,
      eventAttendanceSwitch: false,
    };
  }

  async componentDidMount() {
    const id = await AsyncStorage.getItem('id', 0);
    this.setState({
      userId: id,
    });
    console.log(this.state.userId);

    try {
      database()
        .ref('/Users/' + id)
        .on('value', querySnapShot => {
          let data = querySnapShot.val() ? querySnapShot.val() : {};
          let list = {...data};
          console.log(list.showAge);

          this.setState({
            eventDutchSwitch: list.eventDutchSwitch,
            chatSwitch: list.chatSwitch,
            chatLikesSwitch: list.chatLikesSwitch,
            eventAttendanceSwitch: list.eventAttendanceSwitch,
          });

          // console.log(this.state.dataSource);
        });
    } catch (error) {
      Alert.alert(error.toString());
    }
  }

  validate = () => {
    this.setState({
      isLoading: true,
    });

    try {
      database()
        .ref('Users')
        .child(this.state.userId)
        .update({
          eventDutchSwitch: this.state.eventDutchSwitch,
          chatSwitch: this.state.chatSwitch,
          chatLikesSwitch: this.state.chatLikesSwitch,
          eventAttendanceSwitch: this.state.eventAttendanceSwitch,
        })
        .then(data => {
          this.setState({
            isLoading: false,
          });
        });
    } catch (error) {
      Alert.alert(error);
    }
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.mainContainer}>
          <StatusBar backgroundColor="#FF4A00FF" barStyle="light-content" />

          <View style={[styles.viewContainer]}>
            <View
              style={{
                marginTop: 8,
                backgroundColor: 'white',
                flexDirection: 'row',
                width: '100%',
              }}>
              <View style={{flexDirection: 'column'}}>
                <View style={{flex: 1}}>
                  <Text
                    style={[
                      styles.heading,
                      {color: '#626262', height: 20, marginTop: 7},
                    ]}>
                    Event Dutch
                  </Text>
                </View>
                <View style={{flex: 1}}>
                  <Text
                    style={[
                      styles.des,
                      {color: '#626262', height: 40, marginTop: 7},
                    ]}>
                    You just got an event partner
                  </Text>
                </View>
              </View>

              <View style={{alignItems: 'flex-end', marginTop: 10, flex: 1}}>
                <Switch
                  trackColor={{true: '#FF4A00FF', false: 'grey'}}
                  style={{marginTop: 0}}
                  onValueChange={switchValue =>
                    this.setState({eventDutchSwitch: switchValue})
                  }
                  value={this.state.eventDutchSwitch}
                />
              </View>
            </View>

            <View
              style={{
                marginTop: 8,
                backgroundColor: 'white',
                flexDirection: 'row',
                width: '100%',
              }}>
              <View style={{flexDirection: 'column'}}>
                <View style={{flex: 1}}>
                  <Text
                    style={[
                      styles.heading,
                      {color: '#626262', height: 20, marginTop: 7},
                    ]}>
                    Chat
                  </Text>
                </View>
                <View style={{flex: 1}}>
                  <Text
                    style={[
                      styles.des,
                      {color: '#626262', height: 40, marginTop: 7},
                    ]}>
                    Someone wants to chat
                  </Text>
                </View>
              </View>

              <View style={{alignItems: 'flex-end', marginTop: 10, flex: 1}}>
                <Switch
                  trackColor={{true: '#FF4A00FF', false: 'grey'}}
                  style={{marginTop: 0}}
                  onValueChange={switchValue =>
                    this.setState({chatSwitch: switchValue})
                  }
                  value={this.state.chatSwitch}
                />
              </View>
            </View>

            <View
              style={{
                marginTop: 8,
                backgroundColor: 'white',
                flexDirection: 'row',
                width: '100%',
              }}>
              <View style={{flexDirection: 'column'}}>
                <View style={{flex: 1}}>
                  <Text
                    style={[
                      styles.heading,
                      {color: '#626262', height: 20, marginTop: 7},
                    ]}>
                    Chat Likes
                  </Text>
                </View>
                <View style={{flex: 1}}>
                  <Text
                    style={[
                      styles.des,
                      {color: '#626262', height: 40, marginTop: 7},
                    ]}>
                    Someone liked how you chat
                  </Text>
                </View>
              </View>

              <View style={{alignItems: 'flex-end', marginTop: 10, flex: 1}}>
                <Switch
                  trackColor={{true: '#FF4A00FF', false: 'grey'}}
                  style={{marginTop: 0}}
                  onValueChange={switchValue =>
                    this.setState({chatLikesSwitch: switchValue})
                  }
                  value={this.state.chatLikesSwitch}
                />
              </View>
            </View>

            <View
              style={{
                marginTop: 8,
                backgroundColor: 'white',
                flexDirection: 'row',
                width: '100%',
              }}>
              <View style={{flexDirection: 'column'}}>
                <View style={{flex: 1}}>
                  <Text
                    style={[
                      styles.heading,
                      {color: '#626262', height: 20, marginTop: 7},
                    ]}>
                    Event Attendance
                  </Text>
                </View>
                <View style={{flex: 1}}>
                  <Text
                    style={[
                      styles.des,
                      {color: '#626262', height: 40, marginTop: 7},
                    ]}>
                    Someone just joined an event
                  </Text>
                </View>
              </View>

              <View style={{alignItems: 'flex-end', marginTop: 10, flex: 1}}>
                <Switch
                  trackColor={{true: '#FF4A00FF', false: 'grey'}}
                  style={{marginTop: 0}}
                  onValueChange={switchValue =>
                    this.setState({eventAttendanceSwitch: switchValue})
                  }
                  value={this.state.eventAttendanceSwitch}
                />
              </View>
            </View>

            <View
              style={{
                marginTop: 100,
                flex: 2,
                marginBottom: 30,
              }}>
              <TouchableOpacity onPress={() => this.validate()}>
                <View style={styles.roundBtn}>
                  <View>
                    <Text style={{color: 'white', fontSize: 16}}>Save</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
