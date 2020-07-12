import {Dimensions} from 'react-native'
export default {
  mainContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  viewContainer: {
    marginTop: 5,
    width: '100%',
  
    padding: 2,
  },
  input: {
    width: 300,
    height: 50,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  heading: {
    fontSize: 18,
    color: '#3F3F3F',
    marginLeft: 7,
  },
  headerText: {
    fontSize: 20,
    color: 'black',
    marginTop: 15,
    marginLeft: 20,
  },
  detailText: {
    marginLeft: 7,
    color: '#ABABAB',
  },

  imageView: {
    width: 125,
    margin: 5,
    height: 190,
    borderRadius: 10,
    backgroundColor: '#e7e7e7',
  },
  iconStyle: {
    width: 30,
    height: 35,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'contain',
  },
  roundBtnTrans: {
    borderColor: 'black',
    borderRadius: 30,
    width: '85%',
    marginTop: 20,
    height: 40,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  roundBtn: {
    borderColor: 'white',
    borderRadius: 10,
    width: '100%',
    marginTop: 20,
    height: 50,
    backgroundColor: '#FF4A00FF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },

  MainContainer :{
    
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: (Platform.OS == 'ios') ? 20 : 0
    
    },
    
    ModalInsideView:{
      flex: 2,

      marginTop: 5
    
    },
    
    TextStyle:{
    
      fontSize: 20, 
      marginBottom: 20, 
      color: "#fff",
      padding: 20,
      textAlign: 'center'
    
    },    
  danceBtn: {
    marginLeft:5,
    borderColor: 'white',
    borderRadius: 15,
    width: 120,
    marginTop: 20,
  
    height: 45,
    backgroundColor: '#FF4A00FF',
    alignItems: 'center',
    justifyContent: 'center',

  },
  textInput: {
    alignSelf: 'stretch',
    fontSize: 14,
    color: '#676666',

    // Add this to specify bottom border thickness
  },
  BottomContainer: {
    width: 20,
    height: 20,

    backgroundColor: '#FF655B',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 200,
  },
  textCon: {
    marginTop: 0,
  },
  text: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 150,
  },
  des:{
    color:'#ABABAB',
    marginLeft:5
  },
  Category: {
    flex:1,
    justifyContent: 'flex-start',
    alignItems:'center',    
    margin:5
},

};
