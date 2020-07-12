import * as React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
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
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';


import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import styles from './style';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import DatePicker from 'react-native-datepicker';

import {Alert} from 'react-native';

import {size} from '../../helpers/devices';
import * as Statics from '../../helpers/statics';
import LoginScreenComponent from '../LoginScreen/index';

class EmailComponent extends React.Component {
  constructor(props) {
    super(props);

    console.ignoredYellowBox = ['Setting a timer'];

    this.state = {
      textInput_Email: '',
    };
  }

  saveData = async () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const email = this.state.textInput_Email;
    if (email == '' || reg.test(email) === false) {
      Alert.alert(' Please enter email in proper format!');
    } else {
      try {
        await AsyncStorage.setItem('email', email);
        this.props.navigation.navigate('Password');
      } catch (error) {
        // Error retrieving data
        Alert.alert(error.message);
      }
    }
  };

  render() {
    return (
      <ScrollView>
        <StatusBar backgroundColor="#FF4A00FF" barStyle="light-content" />
        <View style={styles.mainContainer}>
          <View style={{marginTop: size(50), marginLeft: size(50), flex: 1}}>
            <Text style={styles.textStyle}>My</Text>
            <Text style={styles.textStyle}>email is</Text>
          </View>
          <View
            style={{
              flex: 1,
              width: Statics.DEVICE_WIDTH / 1.2,
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: 0,
            }}>
            <TextInput
              style={styles.textInput}
              placeholder="Email Address"
              onChangeText={TextInputValue =>
                this.setState({textInput_Email: TextInputValue})
              }
            />
          </View>
          <View style={{alignItems: 'center', marginTop: 0, flex: 1}}>
            <TouchableOpacity
              style={{alignItems: 'center'}}
              onPress={() => this.saveData()}>
              <View style={styles.roundBtn}>
                <View>
                  <Text style={{color: 'white', fontSize: 16}}>Continue</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

class PasswordComponent extends React.Component {
  constructor(props) {
    super(props);

    console.ignoredYellowBox = ['Setting a timer'];

    this.state = {
      textInput_Password: '',
    };
  }

  saveData = async () => {
    const password = this.state.textInput_Password;
    if (password == '' || password.length < 6) {
      Alert.alert('Please enter password more than 6 characters!');
    } else {
      try {
        await AsyncStorage.setItem('password', password);
        this.props.navigation.navigate('Name');
      } catch (error) {
        // Error retrieving data
        Alert.alert(error.message);
      }
    }
  };

  render() {
    return (
      <ScrollView>
        <StatusBar backgroundColor="#FF4A00FF" barStyle="light-content" />
        <View style={styles.mainContainer}>
          <View style={{marginTop: size(50), marginLeft: size(50), flex: 1}}>
            <Text style={styles.textStyle}>Set </Text>
            <Text style={styles.textStyle}>My Password</Text>
          </View>
          <View
            style={{
              flex: 1,
              width: Statics.DEVICE_WIDTH / 1.2,
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: 0,
            }}>
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={TextInputValue =>
                this.setState({textInput_Password: TextInputValue})
              }
            />
          </View>
          <View style={{alignItems: 'center', marginTop: size(0), flex: 1}}>
            <TouchableOpacity
              style={{alignItems: 'center'}}
              onPress={() => this.saveData()}>
              <View style={styles.roundBtn}>
                <View>
                  <Text style={{color: 'white', fontSize: size(16)}}>
                    Continue
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
class NameComponent extends React.Component {
  constructor(props) {
    super(props);

    console.ignoredYellowBox = ['Setting a timer'];

    this.state = {
      textInput_Name: '',
    };
  }

  saveData = async () => {
    const name = this.state.textInput_Name;
    if (name == '') {
      Alert.alert('Please enter full name!');
    } else {
      try {
        await AsyncStorage.setItem('name', name);
        this.props.navigation.navigate('Birthday');
      } catch (error) {
        // Error retrieving data
        Alert.alert(error.message);
      }
    }
  };
  render() {
    return (
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={{marginTop: size(50), marginLeft: size(50), flex: 1}}>
            <Text style={styles.textStyle}>My Full</Text>
            <Text style={styles.textStyle}>Name is</Text>
          </View>
          <View
            style={{
              flex: 1,
              width: Statics.DEVICE_WIDTH / 1.2,
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: 0,
            }}>
            <TextInput
              style={styles.textInput}
              placeholder="Full Name"
              onChangeText={TextInputValue =>
                this.setState({textInput_Name: TextInputValue})
              }
            />
          </View>
          <View style={{alignItems: 'center', marginTop: 0, flex: 1}}>
            <TouchableOpacity
              style={{alignItems: 'center'}}
              onPress={() => this.saveData()}>
              <View style={styles.roundBtn}>
                <View>
                  <Text style={{color: 'white', fontSize: 16}}>Continue</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

class BirthdayComponent extends React.Component {
  constructor(props) {
    super(props);

    console.ignoredYellowBox = ['Setting a timer'];

    this.state = {
      input_birthday: '',
    };
  }

  saveData = async () => {
    const birthday = this.state.input_birthday;
    if (birthday == '') {
      Alert.alert('Please pick your Date of Birthday!');
    } else {
      try {
        await AsyncStorage.setItem('birthday', birthday);
        this.props.navigation.navigate('Gender');
      } catch (error) {
        // Error retrieving data
        Alert.alert(error.message);
      }
    }
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={{marginTop: size(50), marginLeft: size(50), flex: 1}}>
            <Text style={styles.textStyle}>My</Text>
            <Text style={styles.textStyle}>birthday is</Text>
          </View>
          <View
            style={{
              flex: 1,
              width: Statics.DEVICE_WIDTH / 1.2,
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: 0,
            }}>
            <DatePicker
              style={{width: 300}}
              date={this.state.input_birthday}
              mode="date"
              placeholder="select date"
              format="YYYY-MM-DD"
              maxDate="2016-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                },
                // ... You can check the source to find the other keys.
              }}
              onDateChange={date => {
                this.setState({input_birthday: date});
              }}
            />
          </View>
          <View style={{alignItems: 'center', marginTop: 0, flex: 1}}>
            <TouchableOpacity
              style={{alignItems: 'center'}} //this.props.navigation.navigate('Gender')}
              onPress={() => this.saveData()}>
              <View style={styles.roundBtn}>
                <View>
                  <Text style={{color: 'white', fontSize: 16}}>Continue</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

class GenderComponent extends React.Component {
  constructor(props) {
    super(props);

    console.ignoredYellowBox = ['Setting a timer'];

    this.state = {
      input_gender: '',
    };
  }

  saveMale = async () => {
    const gender = 'Man';

    try {
      await AsyncStorage.setItem('gender', gender);
      this.props.navigation.navigate('Interest');
    } catch (error) {
      // Error retrieving data
      Alert.alert(error.message);
    }
  };

  saveFemale = async () => {
    const gender = 'Woman';

    try {
      await AsyncStorage.setItem('gender', gender);
      this.props.navigation.navigate('Interest');
    } catch (error) {
      // Error retrieving data
      Alert.alert(error.message);
    }
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={{marginTop: size(50), marginLeft: size(50), flex: 1}}>
            <Text style={styles.textStyle}>I am a</Text>
          </View>
          <View
            style={{
              flex: 5,
              width: Statics.DEVICE_WIDTH / 1.5,
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: 0,
            }}>
            <TouchableOpacity
              onPress={() => this.saveFemale()}
              style={{alignItems: 'center'}}>
              <View style={styles.roundBtnTrans}>
                <View>
                  <Text style={{color: 'black', fontSize: size(17)}}>
                    Woman
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.saveMale()}
              style={{alignItems: 'center'}}>
              <View style={styles.roundBtnTrans}>
                <View>
                  <Text style={{color: 'black', fontSize: size(17)}}>Man</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
class InterestComponent extends React.Component {
  constructor(props) {
    super(props);

    console.ignoredYellowBox = ['Setting a timer'];

    this.state = {
      input_interest: '',
    };
  }

  mixInterested = async () => {
    const interestedIn = 'Both';

    try {
      await AsyncStorage.setItem('interest', interestedIn);
      this.props.navigation.navigate('Occupation');
    } catch (error) {
      // Error retrieving data
      Alert.alert(error.message);
    }
  };

  manInterested = async () => {
    const interestedIn = 'Man';

    try {
      await AsyncStorage.setItem('interest', interestedIn);
      this.props.navigation.navigate('Occupation');
    } catch (error) {
      // Error retrieving data
      Alert.alert(error.message);
    }
  };

  womanInterested = async () => {
    const interestedIn = 'Woman';

    try {
      await AsyncStorage.setItem('interest', interestedIn);
      this.props.navigation.navigate('Occupation');
    } catch (error) {
      // Error retrieving data
      Alert.alert(error.message);
    }
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={{marginTop: size(50), marginLeft: size(50), flex: 1}}>
            <Text style={styles.textStyle}>I am Interested in</Text>
          </View>
          <View
            style={{
              flex: 4,
              width: Statics.DEVICE_WIDTH / 1.2,
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: 0,
            }}>
            <TouchableOpacity
              onPress={() => this.womanInterested()}
              style={{alignItems: 'center'}}>
              <View style={styles.roundBtnTrans}>
                <View>
                  <Text style={{color: 'black', fontSize: size(17)}}>
                    Woman
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.manInterested()}
              style={{alignItems: 'center'}}>
              <View style={styles.roundBtnTrans}>
                <View>
                  <Text style={{color: 'black', fontSize: size(17)}}>Man</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.mixInterested()}
              style={{alignItems: 'center'}}>
              <View style={styles.roundBtnTrans}>
                <View>
                  <Text style={{color: 'black', fontSize: size(17)}}>Both</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

class OccupationComponent extends React.Component {
  constructor(props) {
    super(props);

    console.ignoredYellowBox = ['Setting a timer'];

    this.state = {
      textInput_School: '',
    };
  }

  student = async () => {
    const occupation = 'Student';

    try {
      await AsyncStorage.setItem('occupation', occupation);
      this.props.navigation.navigate('Phone');
    } catch (error) {
      // Error retrieving data
      Alert.alert(error.message);
    }
  };

  employee = async () => {
    const occupation = 'Employee';

    try {
      await AsyncStorage.setItem('occupation', occupation);
      this.props.navigation.navigate('Phone');
    } catch (error) {
      // Error retrieving data
      Alert.alert(error.message);
    }
  };
  render() {
    return (
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={{marginTop: size(50), marginLeft: size(50), flex: 1}}>
            <Text style={styles.textStyle}>My</Text>
            <Text style={styles.textStyle}>occupation is</Text>
          </View>
          <View
            style={{
              flex: 4,
              width: Statics.DEVICE_WIDTH / 1.2,
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: 0,
            }}>
            <TouchableOpacity
              onPress={() => this.student()}
              style={{alignItems: 'center'}}>
              <View style={styles.roundBtnTrans}>
                <View>
                  <Text style={{color: 'black', fontSize: size(17)}}>
                    Student
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.employee()}
              style={{alignItems: 'center'}}>
              <View style={styles.roundBtnTrans}>
                <View>
                  <Text style={{color: 'black', fontSize: size(17)}}>
                    Employed
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          {/* <View
          style={{
            flex: 2,
            width: '80%',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 40,
          }}>
          <TextInput
            style={styles.textInput}
            placeholder="occupation"></TextInput>
        </View> */}
        </View>
      </ScrollView>
    );
  }
}

class PhoneComponent extends React.Component {
  constructor(props) {
    super(props);

    console.ignoredYellowBox = ['Setting a timer'];

    this.state = {
      textInput_MobileNo: '',
      userId: '',
      currentDate: '',
      isLoading: false,
    };
  }
  saveData = async () => {
  
    const phone = this.state.textInput_MobileNo;
    if (phone == '') {
      Alert.alert('Please enter phone number with country code! ');
    } else {
      try {
        await AsyncStorage.setItem('phone', phone);
        const name = await AsyncStorage.getItem('name');
        const email = await AsyncStorage.getItem('email');
        const phonee = await AsyncStorage.getItem('phone');
        const gender = await AsyncStorage.getItem('gender');
        const interest = await AsyncStorage.getItem('interest');
        const birthday = await AsyncStorage.getItem('birthday');
        const password = await AsyncStorage.getItem('password');
        const occupation = await AsyncStorage.getItem('occupation');
        this.setState({
          isLoading: true,
        });
        auth()
          .createUserWithEmailAndPassword(email, password)
          .then(res => {
            this.setState({
              userId: res.user.uid,
            });

            AsyncStorage.setItem('id', this.state.userId);

            try {
              database()
                .ref('Users')
                .child(this.state.userId)
                .set({
                  id:this.state.userId,
                  name: name,
                  gender: gender,
                  email: email,
                  password: password,
                  interest: interest,
                  occupation: occupation,
                  phone: phonee,
                  accType: 'Trial',
                  dob: birthday,
                  createdOn:this.state.currentDate,
                  payment:false,
                  company:'Null',
                  school:'Null',
                  city:'Null',
                  sexualOrientation:'Null',
                  skills:1,
                  hobbies:'Null',
                  showAge:false,
                  showDistance:false,
                  eventDutchSwitch:false,
                  chatSwitch:false,
                  chatLikesSwitch:false,
                  eventAttendanceSwitch:false,
                  eventImages:'',
                  showOnHobbyDutch:false,
                  shareFeed:false,
                  distane:2,
                  ageLimit:3,


                })
                .then(data => {
                  this.setState({
                    isLoading: false,
                  });
                  Alert.alert('Registration successfull.You can now login to get started');
                 this.props.navigation.navigate('Login');

                })
                .catch(error => {
                  this.setState({
                    isLoading: false,
                  });
                  Alert.alert(error.toString());
                });
            } catch (error) {
              this.setState({
                isLoading: false,
              });
              Alert.alert(error.toString());
            }
          })
          .catch(error => {
            this.setState({
              isLoading: false,
            });
            Alert.alert(JSON.stringify(error));
          });
      } catch (error) {
        // Error retrieving data
        Alert.alert(error.message);
      }
    }
  };

  getCurrentDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    this.setState({
      currentDate: month  + '/' + date + '/' + year,
    });
    console.log(this.state.currentDate);
    this.saveData();
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={{marginTop: size(50), marginLeft: size(50), flex: 1}}>
            <Text style={styles.textStyle}>My number is</Text>
          </View>
          <View
            style={{
              flex: 1,
              width: Statics.DEVICE_WIDTH / 1.2,
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: 0,
            }}>
            <TextInput
              style={styles.textInput}
              placeholder="Mobile Number"
              onChangeText={TextInputValue =>
                this.setState({textInput_MobileNo: TextInputValue})
              }
            />
          </View>
          <View style={{alignItems: 'center', marginTop: 40, flex: 2}}>
            <TouchableOpacity
              disabled={this.state.isLoading}
              style={{alignItems: 'center'}}
              onPress={() => this.getCurrentDate()}>
              <View style={styles.roundBtn}>
                <View>
                  <Text style={{color: 'white', fontSize: 16}}>Continue</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{marginTop: 20, flex: 2}}>
            <ActivityIndicator
              animating={this.state.isLoading}
              style={{marginTop: 0}}
              color={'#FF4A00FF'}
              size="large"
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

class LoginScreen extends React.Component {
  render() {
    return < LoginScreenComponent/>;
  }
}

const loginStack = createStackNavigator({
  Home: {
    screen: EmailComponent,
    navigationOptions: {
      header: null,
    },
  },
  Birthday: {
    screen: BirthdayComponent,
    navigationOptions: {
      header: null,
    },
  },
  Gender: {
    screen: GenderComponent,
    navigationOptions: {
      header: null,
    },
  },
  Password: {
    screen: PasswordComponent,
    navigationOptions: {
      header: null,
    },
  },

  Name: {
    screen: NameComponent,
    navigationOptions: {
      header: null,
    },
  },

  Occupation: {
    screen: OccupationComponent,
    navigationOptions: {
      header: null,
    },
  },
  Phone: {
    screen: PhoneComponent,
    navigationOptions: {
      header: null,
    },
  },

  Interest: {
    screen: InterestComponent,
    navigationOptions: {
      header: null,
    },
  },

  // EditProfile: {
  //   screen: EditProfileInfo,
  //   navigationOptions: {
  //     header: null,
  //   },
  // },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
});

export default createAppContainer(loginStack);
